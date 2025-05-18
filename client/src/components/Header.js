import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>
        <div className="space-x-4">
          {['about', 'experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="border border-white text-white font-medium py-2 px-4 rounded transition duration-300 hover:bg-blue-300 hover:text-black"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
