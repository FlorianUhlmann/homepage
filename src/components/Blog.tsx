import React from 'react';
import { BlogIcon } from './Icons';

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Blog</h2>
      <p className="text-gray-400 mb-8">I occasionally write about technology, design, and development.</p>
      <div className="space-y-6">
          {/* Blog Post */}
          <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400">How I Built This Portfolio</h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">July 1, 2025</p>
              <p className="text-gray-400">A deep dive into the process of creating this personal website with React and Tailwind CSS, combining different design inspirations.</p>
          </div>
          {/* Blog Post */}
          <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400">Top 5 VS Code Extensions for React Developers</h3>
               <p className="text-sm text-gray-500 mt-1 mb-3">June 15, 2025</p>
              <p className="text-gray-400">A curated list of my favorite VS Code extensions that boost productivity and make coding in React a joy.</p>
          </div>
      </div>
    </div>
  );
};

export default Blog;
