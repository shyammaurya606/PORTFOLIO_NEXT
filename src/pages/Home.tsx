import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Twitter, Code, Palette, Zap, MapPin, Mail, Calendar, Server, ShieldCheck, BrainCircuit, ExternalLink } from 'lucide-react';
import { profileData, aboutData } from '../data/profile';
import { getFeaturedProjects } from '../data/projects';
import { getLatestPosts } from '../data/posts';

const Home: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'Cyber Enthusiast', 'Problem Solver', 'Tech Enthusiast'];

  const featuredProjects = getFeaturedProjects();
  const latestPosts = getLatestPosts();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    Code,
    Server,
    ShieldCheck,
    BrainCircuit,
    Palette,
    Zap
  };

  const features = profileData.services.slice(0, 3).map(service => ({
    icon: iconMap[service.icon as keyof typeof iconMap] || Code,
    title: service.title,
    description: service.description
  }));

  const additionalFeatures = [
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    }
  ];

  const allFeatures = [
    ...features,
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices'
    },
    {
      icon: Palette,
      title: 'Modern Design', 
      description: 'Creating beautiful and intuitive user interfaces'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="profile-image-container">
               <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={profileData.avatar}
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-white">
                 I'm <span className="gradient-text"  >{profileData.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground text-white" >
                {profileData.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl text-white">
                {profileData.description}
                
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{profileData.experience}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/projects"
                  className="btn-glow bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View My Work</span>
                  <ArrowRight size={20} />
                </Link>
                <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={profileData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed text-white">
              {aboutData.longDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="card-glow bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-500 mb-2">{profileData.stats.projects}+</div>
                <h3 className="text-lg font-semibold text-white mb-2">Projects Completed</h3>
                <p className="text-gray-400">Successful web applications built and delivered</p>
              </div>
              <div className="card-glow bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-500 mb-2">{profileData.stats.experience}</div>
                <h3 className="text-lg font-semibold text-white mb-2">Months Experience</h3>
                <p className="text-gray-400">In MERN-stack development</p>
              </div>
              <div className="card-glow bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-500 mb-2">{profileData.stats.satisfaction}</div>
                <h3 className="text-lg font-semibold text-white mb-2">Client Satisfaction</h3>
                <p className="text-gray-400">Happy clients and successful projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
              return (
                <div
                  key={index}
                  className="card-glow shimmer-card bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-12 h-12 text-blue-500 mb-6 animate-float" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
      <Link
        to="/projects"
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
      >
        <span>View All Projects</span>
        <ArrowRight size={20} />
      </Link>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.slice(0, 3).map((project, index) => (
        <div
          key={project.id}
          className="card-hover shimmer-card bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden flex flex-col h-full"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-gray-500 text-sm">
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>

            {/* Push button row to bottom */}
            <div className="mt-auto flex space-x-3">
              <Link
                to={`/projects/${project.slug}`}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View Details
              </Link>
              <a
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
                title="View Source Code"
              >
                <Github size={20} />
              </a>
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
                title="View Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white">Latest Blog Posts</h2>
            <Link
              to="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View All Posts</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <div
                key={post.id}
                className="card-hover shimmer-card bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-300">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <Link
              to="/contact"
              className="btn-glow bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;