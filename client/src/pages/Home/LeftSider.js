import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="himanshu.ajwani96@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-mail-line text-gray-400 hover:text-white cursor-pointer"></i>
          </a>
          <a href="https://www.linkedin.com/in/himanshuajwani" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-line text-gray-400 hover:text-white cursor-pointer"></i>
          </a>
          <a href="https://github.com/himanshu1-2" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line text-gray-400 hover:text-white cursor-pointer"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
