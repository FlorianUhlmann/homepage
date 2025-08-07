// src/App.tsx
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { UserIcon, ProjectIcon, BlogIcon } from './components/Icons';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  const location = useLocation();
  const getLinkClass = (path: string) => {
    return location.pathname === path || (path === '/' && location.pathname === '/homepage/')
      ? 'bg-blue-600 text-white'
      : 'text-gray-400 hover:bg-gray-700';
  };

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans flex">
      <aside className="w-64 bg-[#161b22] p-6 border-r border-gray-700 flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-12">BrandPage</h1>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className={`flex items-center px-4 py-2 rounded-md text-lg ${getLinkClass('/homepage/')}`}>
            <UserIcon /> About
          </Link>
          <Link to="/projects" className={`flex items-center px-4 py-2 rounded-md text-lg ${getLinkClass('/projects')}`}>
            <ProjectIcon /> Projects
          </Link>
          <Link to="/blog" className={`flex items-center px-4 py-2 rounded-md text-lg ${getLinkClass('/blog')}`}>
            <BlogIcon /> Blog
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;