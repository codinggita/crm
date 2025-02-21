import { React, useState } from "react";
import { FaTachometerAlt, FaChevronUp, FaSquare } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Events from "../../Drawer_Component/Hub/Events/Event";

// **SidebarItem Component**
// Renders a single clickable item in the sidebar with an icon and text.
// Props:
// - icon: The icon to display for the item.
// - text: The text label for the item.
// - onClick: Handler function for click events.
// - isSelected: Boolean to determine if the item is currently selected.
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

// **SidebarSection Component**
// Renders a section of the sidebar, including the title and a list of items.
// Props:
// - title: The title of the section (e.g., "Start-Up", "Hub", "Administrative").
// - items: Array of items to display in the section.
// - selectedComponent: The currently selected component to highlight the active item.
// - handleItemClick: Handler function to update the selected component.
const SidebarSection = ({ title, items, selectedComponent, handleItemClick }) => (
  <div className="flex flex-col w-full">
    <div className="w-full flex flex-col">
      {/* Section Title */}
      <div className="self-stretch h-[48px] flex flex-row items-center justify-start px-[15px] box-border">
        <div className="flex-1 flex flex-row items-center justify-start px-[15px] z-[1]">
          <div className="relative tracking-[0.04em]">{title}</div>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center z-0 text-[12px]">
          <FaChevronUp className="relative tracking-[0.1em]" />
        </div>
      </div>
      {/* Section Items */}
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
    {/* Spacer between sections */}
    <div className="self-stretch relative h-[16px]" />
  </div>
);

// **Drawer Component**
// Main component that renders the sidebar and main content area.
// Manages the state for the selected component and handles navigation.
const Drawer = () => {
  // State to track the selected component, defaulting to "Dashboard".
  // This ensures the main content area is blank on initial load.
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  // Handler function to update the selected component based on user click.
  const handleItemClick = (item) => {
    setSelectedComponent(item);
  };

  // Define the sections and their items for the sidebar navigation.
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
      title: "Hub",
      items: [
        {
          text: "Events",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Services",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Hub Spaces",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
    {
      title: "Administrative",
      items: [
        {
          text: "Users",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Integration settings",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "System settings",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
        {
          text: "Reports",
          icon: (
            <FaSquare className="relative tracking-[-0.05em] opacity-[0.72]" />
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* 
        Sidebar (Drawer) Section
        - Fixed on the left side.
        - Contains Navbar, Logo, and all navigation items.
        - Responsive: Full width on mobile, 265px on medium screens and above.
      */}
      <div className="fixed left-0 top-0 h-full w-full md:w-[265px] bg-white text-[14px] text-[#e4822f] font-poppins z-40">
        {/* Navbar Component */}
        <Navbar />
        <div className="relative flex flex-col items-center w-full">
          {/* Logo Image */}
          <img
            className="z-0 w-[150px] h-[75px] mx-auto my-4"
            alt="Logo"
            src="Logo_Variation.jpg"
          />
          {/* Background overlay for styling (structure preserved) */}
          <div className="absolute inset-x-0 top-[12.5%] bottom-0 bg-white z-[1]" />
          {/* Drawer List - Contains all navigation sections */}
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

      {/* 
        Main Content Area (Dashboard Content)
        - Positioned to the right of the fixed sidebar.
        - Uses flexbox to center the rendered component horizontally and vertically.
        - Responsive: Adjusts margin-left based on screen size.
      */}
      <div className="ml-0 md:ml-[265px] w-full">
  <div
    className="w-full h-screen overflow-auto bg-[#ebebeb] relative shadow-[0px_12px_24px_rgba(0,0,0,0.08)]"
  >
    {selectedComponent === "Dashboard" && <></>} {/* Blank for Dashboard */}
    {selectedComponent === "Events" && <Events />}
    {selectedComponent === "Services" && (
      <div className="text-center text-[#333] text-[18px]">
        Services Component
      </div>
    )}
    {selectedComponent === "Hub Spaces" && (
      <div className="text-center text-[#333] text-[18px]">
        Hub Spaces Component
      </div>
    )}
  </div>
</div>
    </div>
  );
};

export default Drawer;