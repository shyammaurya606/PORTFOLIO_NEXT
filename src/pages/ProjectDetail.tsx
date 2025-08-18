import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { getProjectBySlug, type Project } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find project by ID (convert to slug-based lookup)
  const project = getProjectBySlug(id || '');

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const categorizeProject = (project: Project): string => {
    const hasReact = project.tech.some(tech => ['React', 'Next.js'].includes(tech));
    const hasBackend = project.tech.some(tech => ['Node.js', 'Express', 'Python', 'MongoDB'].includes(tech));
    
    if (hasReact && hasBackend) return 'Full Stack';
    if (hasBackend) return 'Backend';
    return 'Frontend';
  };

  // Generate features and challenges based on project tech stack
  const generateFeatures = (project: Project): string[] => {
    const features = [];
    
    if (project.tech.includes('React') || project.tech.includes('Next.js')) {
      features.push('Modern React-based user interface');
      features.push('Responsive design for all devices');
    }
    
    if (project.tech.includes('Node.js') || project.tech.includes('Express')) {
      features.push('RESTful API architecture');
      features.push('Server-side functionality');
    }
    
    if (project.tech.includes('Socket.io')) {
      features.push('Real-time communication');
      features.push('Live updates and notifications');
    }
    
    if (project.tech.includes('MongoDB')) {
      features.push('NoSQL database integration');
      features.push('Scalable data storage');
    }
    
    if (project.tech.includes('Firebase')) {
      features.push('Cloud-based backend services');
      features.push('Authentication and hosting');
    }
    
    if (project.tech.includes('APIs')) {
      features.push('Third-party API integration');
      features.push('External data sources');
    }
    
    features.push('Clean, maintainable code structure');
    features.push('Optimized performance');
    
    return features;
  };

  const generateChallenges = (project: Project): string[] => {
    const challenges = [];
    
    if (project.tech.includes('Socket.io')) {
      challenges.push('Implementing real-time communication efficiently');
    }
    
    if (project.tech.includes('APIs')) {
      challenges.push('Integrating and managing multiple external APIs');
    }
    
    if (project.tech.includes('MongoDB')) {
      challenges.push('Designing efficient database schemas');
    }
    
    if (project.tech.includes('React')) {
      challenges.push('Managing complex state and component interactions');
    }
    
    challenges.push('Ensuring cross-browser compatibility');
    challenges.push('Optimizing application performance');
    
    return challenges;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 animate-fadeInUp">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
            {project.featured && (
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            )}
          </div>
          <p className="text-xl text-gray-400 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
               {project.isComplete === true ? (
    <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
      Completed
    </span>
  ) : project.isComplete === false ? (
    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
      In Progress
    </span>
  ) : (
    <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
      Completed: {new Date(project.isComplete).toLocaleDateString()}
    </span>
  )} 
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={16} />
              <span>{categorizeProject(project)}</span>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="mb-12 animate-fadeInUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="animate-fadeInUp">
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            <div className="animate-fadeInUp">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {generateFeatures(project).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="animate-fadeInUp">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Challenges</h2>
              <div className="space-y-4">
                {generateChallenges(project).map((challenge, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 animate-fadeInUp">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 animate-fadeInUp">
              <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-600/20 to-slate-600/20 border border-gray-500/30 rounded-lg text-gray-400 hover:text-gray-300 transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Project Stats */}
            <div className="card-hover bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 animate-fadeInUp">
              <h3 className="text-xl font-bold text-white mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">{categorizeProject(project)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Created At:</span>
  <span className="flex items-center text-white">
    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
    {new Date(project.createdAt).toLocaleDateString()}
  </span>
</div>

<div className="flex justify-between items-center">
  <span className="text-gray-400">Updated At:</span>
  <span className="flex items-center text-white">
    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
    {new Date(project.updatedAt).toLocaleDateString()}
  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Similar Work?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and challenges. Let's discuss how I can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="btn-glow bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;