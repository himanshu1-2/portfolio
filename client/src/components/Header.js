import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Resume from './Resume'; // This will be the download button logic

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Portfolio Brand */}
        <div className="text-2xl font-bold tracking-wide">MyPortfolio</div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {['about', 'experience', 'projects', 'contact'].map((section) => (
            <Button
              key={section}
              type="default"
              ghost
              onClick={() => scrollToSection(section)}
              className="capitalize border-white text-white hover:bg-white hover:text-black"
            >
              {section}
            </Button>
          ))}

          {/* Resume Download Button */}
          <Resume />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
