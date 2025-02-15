import React from 'react';
import {
  FaTimes,
  FaUserAlt,
  FaEdit,
  FaRegCalendarAlt,
  FaShoppingCart,
  FaEnvelopeOpen,
  FaBell,
  FaPaperclip,
  FaCogs,
  FaSignOutAlt,
} from 'react-icons/fa';

const UserProfile = ({ onClose }) => {
  return (
    // Outer container: fixed on the right as a sliding drawer.
    // Toggle the translate-x value (e.g. translate-x-full to hide, translate-x-0 to show)
    <div className="fixed top-0 right-0 h-full w-full sm:w-72 md:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0 rounded-tl-4xl rounded-bl-4xl">
      {/* Body */}
      <div className="absolute inset-0 flex flex-col items-end justify-start">
        {/* Header */}
        <div className="self-stretch border-b border-[#ebebeb] h-[85px] flex flex-row items-center justify-start py-5 px-7 text-[20px] text-[#e4822f]">
          <div className="flex-1 flex flex-row items-start justify-start">
            <b className="relative leading-[140%]">User Profile</b>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-white flex items-center justify-center text-[16px] text-[#333] hover:bg-gray-100 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        {/* User Type Section */}
        <div
          className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start text-center text-[#474747]"
          style={{
            background:
              "linear-gradient(90.03deg, rgba(255,255,255,0.48), rgba(235,235,235,0.48)), #fff",
          }}
        >
          <div className="self-stretch h-[85px] flex flex-row items-center justify-end pr-7">
            <div className="flex flex-row items-center justify-end gap-2">
              <div className="w-[220px] h-[50px] flex flex-col items-end justify-center gap-1">
                <b className="relative leading-[140%]">User.Admin</b>
                <div className="relative text-[12px] tracking-[-0.02em] leading-[140%] text-[#333] opacity-70">
                  chad_dennis98@domain.com
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#080808] border border-white flex items-center justify-center">
                <FaUserAlt className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Main Options Group 1 */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start py-6 text-[#080808]">
          {/* Edit Profile */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Edit Profile</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaEdit className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
          {/* Reservations */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Reservations</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaRegCalendarAlt className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
          {/* Orders */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Orders</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaShoppingCart className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
          {/* Inbox */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Inbox</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaEnvelopeOpen className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
          {/* Notifications */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Notifications</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaBell className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
        </div>
        {/* Main Options Group 2 */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start py-6 text-[#080808]">
          {/* Integration Settings */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">Integration Settings</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaPaperclip className="w-[23.5px] h-[23.5px] object-cover" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
          {/* System Settings */}
          <div className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
            <b className="relative leading-[140%]">System Settings</b>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="w-3 h-3" />
              <div className="w-6 h-6 flex items-center justify-center">
                <FaCogs className="w-6 h-6" />
              </div>
              <div className="w-3 h-3" />
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="self-stretch flex flex-col items-end justify-center p-6 text-center text-sm text-white">
          <button className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-3 px-4 gap-2 hover:opacity-90 transition-opacity cursor-pointer">
            <b className="relative leading-[140%]">Sign out</b>
            <FaSignOutAlt className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
