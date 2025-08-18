import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { posts, getLatestPosts, type Post } from '../data/posts';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.substring(0, 200).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  // Mark first 3 posts as featured
  const featuredPosts = posts.slice(0, 3);

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

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and design.
            Stay updated with the latest trends and best practices.
          </p>
        </div>

       {/* Search and Filter */}
<div className="flex justify-center mb-12 animate-fadeInUp">
  <div className="relative w-full max-w-md">
    {/* Search Icon */}
    <Search
  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
  size={20}
/>
    {/* Input */}
    <input
      type="text"
      placeholder="Search articles..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
    />
  </div>
</div>


        {/* Featured Posts */}
        {searchTerm === '' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 animate-fadeInUp">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="card-hover bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getPostImage(post)}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-slate-900/80 text-gray-300 px-2 py-1 rounded text-sm">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{post.content.substring(0, 150)}...</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{getReadTime(post.content)} min read</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
             className="card-hover shimmer-card bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={getPostImage(post)}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/80 text-gray-300 px-2 py-1 rounded text-sm">
                    {post.tags[0]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.content.substring(0, 150)}...</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{getReadTime(post.content)} min read</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-gray-500 text-xs">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
              }}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles and insights delivered directly to your inbox.
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

export default Blog;