import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import { projects, getFeaturedProjects, type Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique tech categories from projects
  const getCategories = () => {
    const techCategories = new Set<string>();
    projects.forEach(project => {
      project.tech.forEach(tech => {
        techCategories.add(tech);
      });
    });
    return ['All', ...Array.from(techCategories)];
  };

  const categories = getCategories();

  // Filter logic
  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      selectedCategory === 'All' || project.tech.includes(selectedCategory);

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      searchTerm.trim() === '' ||
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.tech.some(tech => tech.toLowerCase().includes(search));

    return matchesCategory && matchesSearch;
  });

  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 animate-fadeInUp">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents
            a unique challenge and learning experience.
          </p>
        </div>

        {/* 🔍 Search + Filter (Now at Top) */}
        <div className="flex flex-col items-center justify-center mb-16 animate-fadeInUp space-y-4">
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by title, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          {/* Category Buttons */}
          <div className="flex items-center space-x-4 card-glow p-2 rounded-lg flex-wrap justify-center">
            <Filter className="text-gray-400" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
       

        {/* All Projects */}
        <h2 className="text-3xl font-bold text-white mb-8 animate-fadeInUp">All Projects Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow shimmer-card rounded-xl overflow-hidden animate-fadeInUp flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
  {project.featured === true ? (
    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
  ) : project.featured === false ? (
<span>
                
              </span>  ) : null}
</div>

                <div className="absolute top-4 left-4">
                    {project.isComplete === true ? (
    <span className="bg-black text-green-400 px-2 py-1 rounded-full text-xs font-medium">
      Completed
    </span>
  ) : project.isComplete === false ? (
    <span className="bg-black text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
      In Progress
    </span>
  ) : (
   null
  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm"
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
                <div className="flex space-x-4 mt-auto">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
