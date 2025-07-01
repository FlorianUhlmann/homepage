// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <header className="flex items-center space-x-6 mb-8">
        <img src="https://placehold.co/128x128/60a5fa/white?text=Avatar" alt="avatar" className="w-32 h-32 rounded-full border-4 border-gray-600" />
        <div>
          <h1 className="text-4xl font-bold text-white">Florian Uhlmann</h1>
          <p className="text-lg text-gray-400 flex items-center">
            <a href="https://github.com/FlorianUhlmann" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <img src="/github.svg" alt="GitHub" className="h-5 w-5 mr-2" />
              github.com/FlorianUhlmann
            </a>
          </p>
        </div>
      </header>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          A bio that sounds like a GitHub profile README.md. Talk about your interests, what you're currently learning, and what you're passionate about. Mention your expertise in technologies like React, Node.js, etc. You can also include how to reach you for collaboration or work opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;