import { React, useState } from "react";
import { FaTachometerAlt, FaChevronUp, FaSquare } from "react-icons/fa";
import Navbar from "./Topbar";
import Profile from "./RightComponents/MyProfile";
import Inbox from "./RightComponents/Inbox";
import Chat from "./RightComponents/Chat";
import Notification from "./RightComponents/Notification";
import VoucherManagement from "./DrawerCompo/Tickets";

// SidebarItem Component (unchanged)
const SidebarItem = ({ icon, text, onClick, isSelected }) => (
  <div
    className={`w-full h-[38px] flex flex-row items-center justify-start px-[24px] box-border gap-[6px] hover:bg-gray-100 transition-colors ${
      isSelected ? "bg-gray-200" : ""
    }`}
    onClick={onClick}
  >
    <div className="w-[22px] h-[22px] flex items-center justify-center">
      {icon}
    </div>
    <div className="self-stretch flex-1 flex flex-row items-center justify-start text-left font-inter">
      <div className="relative tracking-[-0.02em] leading-[1.4] opacity-[0.72]">
        {text}
      </div>
    </div>
  </div>
);

// SidebarSection Component (unchanged)
const SidebarSection = ({ title, items, selectedComponent, handleItemClick }) => (
  <div className="flex flex-col w-full">
    <div className="w-full flex flex-col">
      <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
        <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
          <div className="relative tracking-[0.04em]">{title}</div>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
          <FaChevronUp className="relative tracking-[0.05em]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-center text-[#333] cursor-pointer">
        {items.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.text)}
            isSelected={selectedComponent === item.text}
          />
        ))}
      </div>
    </div>
    <div className="self-stretch relative h-[16px]" />
  </div>
);

// Dashboard Component
const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedComponent(item);
  };

  const sections = [
    {
      title: "Start-Up",
      items: [
        {
          text: "Dashboard",
          icon: (
            <FaTachometerAlt className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Sale",
      items: [
        {
          text: "Bidder",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Contract",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          text: "Tickets",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
  ];

  // Render the appropriate component based on the selected item
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <div>Dashboard Content</div>; 
      case "Bidder":
        return <div>Bidder Content</div>; 
      case "Contract":
        return <div>Contract Content</div>; 
      case "Tickets":
        return <VoucherManagement/>; 
      case "MyProfile":
        return <Profile />; 
      case "Notification":
        return <Notification />;
        case "Inbox":
          return <Inbox setMainContent={setSelectedComponent} />;
      case "Chat":
        return <Chat />;
      default:
        return <div>Blank Screen</div>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-full md:w-[265px] bg-white text-[14px] text-[#e4822f] font-poppins z-40">
        <Navbar setMainContent={setSelectedComponent} />
        <div className="relative flex flex-col items-center w-full">
          <img
            className="z-0 w-[150px] h-[75px] mx-auto my-4"
            alt="Logo"
            src="Logo_Variation.jpg"
          />
          <div className="absolute inset-x-0 top-[12.5%] bottom-0 bg-white z-[1]" />
          <div className="w-[265px] h-[945px] overflow-y-auto flex-shrink-0 flex flex-col items-start z-[2]">
            {sections.map((section) => (
              <SidebarSection
                key={section.title}
                title={section.title}
                items={section.items}
                selectedComponent={selectedComponent}
                handleItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-[265px] w-full">
        <div className="w-full h-screen overflow-auto bg-[#ebebeb] relative shadow-[0px_12px_24px_rgba(0,0,0,0.08)]">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;