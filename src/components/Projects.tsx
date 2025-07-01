import React from 'react';
import { ProjectIcon } from './Icons';

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <p className="text-gray-400 mb-8">Here are some of my pinned projects from GitHub.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card */}
        <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors">
          <h3 className="font-bold text-xl text-blue-400 mb-2">project-one</h3>
          <p className="text-gray-400">A short description of the repository, just like on GitHub. Explain the purpose and the tech stack used.</p>
        </div>
        {/* Project Card */}
        <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors">
          <h3 className="font-bold text-xl text-blue-400 mb-2">project-two</h3>
          <p className="text-gray-400">Another one of your top projects. What problem does it solve? What did you learn from building it?</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
