import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FaTachometerAlt, FaChevronUp, FaSquare } from 'react-icons/fa';

const Drawer = () => {
  return (
    <div className="flex">
      {/* Sidebar (Drawer) with a high z-index so it stays on top */}
      <div className="fixed left-0 top-0 h-full w-full md:w-[265px] bg-white text-[14px] text-[#e4822f] font-poppins z-40">
        <Navbar />
        <div className="relative flex flex-col items-center w-full">
          {/* Logo */}
          <img
            className="z-0 w-[150px] h-[75px] mx-auto my-4"
            alt=""
            src="Logo_Variation.jpg"
          />
          {/* Background overlay (structure preserved) */}
          <div className="absolute inset-x-0 top-[12.5%] bottom-0 bg-white z-[1]" />
          {/* Drawer List */}
          <div className="w-[265px] h-[945px] overflow-y-auto flex-shrink-0 flex flex-col items-start z-[2]">
            {/* Dashboard Section */}
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-col">
                {/* Section Title */}
                <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
                  <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
                    <div className="relative tracking-[0.04em]">Start-Up</div>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
                    <FaChevronUp className="relative tracking-[0.1em]" />
                  </div>
                </div>
                {/* Section Items */}
                <div className="flex flex-col items-start justify-start text-center text-[#333]">
                  <div className="w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 transition-colors">
                    <div className="w-[22px] h-[22px] flex items-center justify-center">
                      <FaTachometerAlt className="relative tracking-[-0.05em] opacity-[0.72]" />
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter cursor-pointer">
                      <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
                        Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Spacer */}
              <div className="self-stretch relative h-[16px]" />
            </div>
            {/* Hub Section */}
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-col">
                {/* Section Title */}
                <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
                  <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
                    <div className="relative tracking-[0.04em]">Hub</div>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
                    <FaChevronUp className="relative tracking-[0.1em]" />
                  </div>
                </div>
                {/* Section Items */}
                <div className="flex flex-col items-start justify-start text-center text-[#333] cursor-pointer">
                  {["Events", "Services", "Hub Spaces"].map((item) => (
                    <div
                      key={item}
                      className="w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-[22px] h-[22px] flex items-center justify-center">
                        <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter">
                        <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
                          {item}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Spacer */}
              <div className="self-stretch relative h-[16px]" />
            </div>
            {/* Administrative Section */}
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-col">
                {/* Section Title */}
                <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
                  <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
                    <div className="relative tracking-[0.04em]">
                      Administrative
                    </div>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
                    <FaChevronUp className="relative tracking-[0.1em]" />
                  </div>
                </div>
                {/* Section Items */}
                <div className="flex flex-col items-start justify-start text-center text-[#333] cursor-pointer">
                  {[
                    "Users",
                    "Integration settings",
                    "System settings",
                    "Reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className="w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-[22px] h-[22px] flex items-center justify-center">
                        <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter">
                        <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
                          {item}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Area (Dashboard Content) */}
      <div className="ml-0 md:ml-[265px] w-full">
        <div className="w-full relative shadow-[0px_12px_24px_rgba(0,0,0,0.08)] bg-[#ebebeb] h-[945px]"></div>
      </div>
    </div>
  );
};

export default Drawer;
