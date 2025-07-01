// src/App.tsx
import { useState } from 'react';
import { UserIcon, ProjectIcon, BlogIcon } from './components/Icons';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'about':
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans flex">
      <aside className="w-64 bg-[#161b22] p-6 border-r border-gray-700 flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-12">BrandPage</h1>
        <nav className="flex flex-col space-y-4">
          <button onClick={() => setActiveSection('about')} className={`flex items-center px-4 py-2 rounded-md text-lg ${activeSection === 'about' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
            <UserIcon /> About
          </button>
          <button onClick={() => setActiveSection('projects')} className={`flex items-center px-4 py-2 rounded-md text-lg ${activeSection === 'projects' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
            <ProjectIcon /> Projects
          </button>
          <button onClick={() => setActiveSection('blog')} className={`flex items-center px-4 py-2 rounded-md text-lg ${activeSection === 'blog' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
            <BlogIcon /> Blog
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;