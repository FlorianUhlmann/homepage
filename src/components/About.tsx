import React from 'react';
import { UserIcon } from './Icons';

const About = () => {
  return (
    <div>
      {/* The header with avatar and name, now part of the 'About' page */}
      <header className="flex items-center space-x-6 mb-8">
        <img src="https://placehold.co/128x128/60a5fa/white?text=Avatar" alt="avatar" className="w-32 h-32 rounded-full border-4 border-gray-600" />
        <div>
          <h1 className="text-4xl font-bold text-white">Your Name</h1>
          <p className="text-lg text-gray-400">your-github-username</p>
        </div>
      </header>
      {/* The main content for the 'About' section */}
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
