import { React, useState, useCallback } from 'react';
import { FaSearch, FaBell, FaUserAlt } from 'react-icons/fa';
import UserProfile from '../Profile/UserProfile';

const Navbar = () => {
  const [isUserProfileOpen, setUserProfileOpen] = useState(false);

  const openUserProfile = useCallback(() => {
    setUserProfileOpen(true);
  }, []);

  const closeUserProfile = useCallback(() => {
    setUserProfileOpen(false);
  }, []);

  return (
    <>
      {/* 
        The header is fixed at the top. On mobile (sm:) it spans full width,
        but on medium screens and above (md:) it is offset from the left by 265px
        to “attach” to your drawer (which remains 265px wide).
      */}
      <header className="fixed top-0 left-0 md:left-[265px] right-0 h-[85px] bg-white shadow-md z-30">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* --- Search Section --- */}
          <div className="flex items-center">
            <div className="w-[245px] h-12 flex flex-row items-center justify-start gap-2 py-[10px] px-[12px] border border-[#ebebeb] rounded-[9px] hover:bg-gray-100 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <FaSearch className='text-black'/>
              </div>
              <input
                type="text"
                placeholder="Quick search"
                className="bg-transparent outline-none tracking-[-0.02em] leading-[1.4] text-black placeholder-black"/>
            </div>
          </div>
          {/* --- User Profile Section --- */}
          <div className="flex items-center gap-4">
            <div className="w-12 flex flex-col items-center justify-start">
            <div className="w-6 h-6 flex flex-row items-center justify-center cursor-pointer">
                <FaBell className="text-black" />
              </div>
              <div className="w-3 h-3" />
            </div>
            <div
              className="flex flex-row items-center justify-end gap-[10px] cursor-pointer text-center text-base text-[#474747] font-inter"
              onClick={openUserProfile}>
              <div className="w-[220px] h-[50px] flex flex-col items-end justify-center gap-1">
                <b className="relative leading-[1.4] z-10">User.Admin</b>
                <div className="relative text-xs tracking-[-0.02em] leading-[1.4] text-[#333] opacity-70 z-0">
                  chad_dennis98@domain.com
                </div>
              </div>
              <div 
              className="w-12 h-12 rounded-[8px] bg-[#080808] border border-white flex items-center justify-center">
                <FaUserAlt className="text-white text-xl" />
              </div>            
              </div>
          </div>
        </div>
        <div className="w-full relative bg-gradient-to-r from-white to-[#f0f0f0] h-[50px] flex flex-row items-center justify-start px-[30px] py-[20px] text-left text-base text-[#e4822f] font-inter">
          {/* Breadcrumbs */}
          <div className="h-[27px] flex flex-row items-center justify-center pr-[30px]">
            <div className="flex flex-row items-center justify-start">
              <b className="relative leading-[140%]">Dashboard</b>
            </div>
          </div>
          {/* Right Section: Work Tracker & Status */}
          <div className="flex-1 flex flex-row items-center justify-end gap-[10px] text-center text-[18px] text-white">
            {/* Work Tracker (hidden as per original code) */}
            <div className="w-[344px] hidden flex-row items-center justify-end pr-[12px] gap-[12px]">
              <div className="rounded-[20px] flex flex-row items-center justify-end gap-[6px]">
                <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
                  <div className="relative">laptop-house</div>
                </div>
                <div className="w-[42px] h-[22px] flex flex-row items-center justify-start px-[3px] rounded-[6px] bg-[rgba(250,249,255,0.12)] border border-[#40a1d3]">
                  <div className="w-[16px] h-[16px] relative rounded-[4px] bg-[rgba(255,255,255,0.72)] border border-[rgba(250,249,255,0.24)]" />
                </div>
                <div className="w-[30px] h-[30px] flex flex-col items-center justify-center text-[rgba(255,255,255,0.36)]">
                  <div className="relative">building</div>
                </div>
              </div>
              <div className="rounded-[4px] bg-[#69c98c] h-[24px] flex flex-row items-center justify-center px-[12px] text-[12px] font-roboto">
                <div className="w-[58px] h-[14px] relative">
                  <b className="absolute top-0 left-0">Start Work</b>
                </div>
              </div>
              <div className="w-[1px] h-[16px] relative border-r border-white" />
            </div>
            {/* Status */}
            <div className="flex flex-row items-center justify-end text-right text-[16px] text-[#333] font-inter">
              <div className="w-[255px] relative h-[22px]">
                <b className="absolute top-0 left-0 leading-[140%]">
                  Monday, 30/10/2023 - 10:28 AM
                </b>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Directly render UserProfile */}
      {isUserProfileOpen && (
        <UserProfile onClose={closeUserProfile} />
      )}
    </>
  );
};

export default Navbar;
