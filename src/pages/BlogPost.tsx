import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { getPostBySlug, posts, type Post } from '../data/posts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const getPostImage = (post: Post): string => {
    // Generate different images based on post tags
    if (post.tags.includes('React') || post.tags.includes('Next.js')) {
      return 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg';
    }
    if (post.tags.includes('TypeScript') || post.tags.includes('JavaScript')) {
      return 'https://images.pexels.com/photos/11035467/pexels-photo-11035467.jpeg';
    }
    if (post.tags.includes('CSS') || post.tags.includes('Frontend')) {
      return 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg';
    }
    if (post.tags.includes('Node.js') || post.tags.includes('Backend')) {
      return 'https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg';
    }
    return 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg';
  };

  const getReadTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-6">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-white mb-3 mt-4">{line.substring(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-300 mb-2 ml-4">{line.substring(2)}</li>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="text-white font-semibold mb-3">{line.slice(2, -2)}</p>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-gray-300 mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="animate-fadeInUp">
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                {post.tags[0]}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{getReadTime(post.content)} min read</span>
              </div>
              <button className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:border-slate-600 transition-colors duration-300"
                >
                  <Tag size={12} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-xl mb-8">
              <img
                src={getPostImage(post)}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-left">
            <div className="article-content">
              {formatContent(post.content)}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        <div className="mt-16 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 block"
              >
                <img
                  src={getPostImage(relatedPost)}
                  alt={relatedPost.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{relatedPost.content.substring(0, 100)}...</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  <span>{new Date(relatedPost.createdAt).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock size={12} className="mr-1" />
                  <span>{getReadTime(relatedPost.content)} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to my newsletter for more insights and tutorials on web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;