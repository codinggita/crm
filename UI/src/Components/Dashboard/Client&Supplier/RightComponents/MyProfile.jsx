import React, { useState } from 'react';
import { MdCall, MdMail } from "react-icons/md";
import { FaFolderOpen, FaTrash, FaPhotoVideo, FaEye, FaEyeSlash, FaCopy } from "react-icons/fa";

const Profile = () => {
  // State for tab switching
  const [activeTab, setActiveTab] = useState("Personal");

  // State for Personal data
  const [personalData, setPersonalData] = useState({
    name: "Pană",
    firstName: "Bogdan",
    email: "panabogdan@thecon.ro",
    phone: "0770 123 456",
    country: "Romania",
    city: "Galați",
  });

  // State for Company data
  const [companyData, setCompanyData] = useState({
    name: "Company Name",
    urc: "URC12345",
    fieldOfActivity: "Technology",
    phone: "0770 987 654",
    country: "Romania",
    city: "Bucharest",
    address: "123 Business Street",
  });

  // State for Security data
  const [securityData, setSecurityData] = useState({
    name: "User",
    address: "secure123",
    confirmNewPassword: "",
    fieldOfActivity: "Security",
  });

  // State for password visibility
  const [showAddress, setShowAddress] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input change for Personal data
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input change for Company data
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input change for Security data
  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate random password
  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8); // Simple 8-char random password
    setSecurityData((prev) => ({ ...prev, confirmNewPassword: randomPassword }));
  };

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(securityData.confirmNewPassword);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="pt-[30px] pb-[30px] mt-30">
      <div className="w-[1295px] bg-white rounded-lg mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center h-[80px] px-[30px] border-b border-[rgb(235,235,235)]">
          <div className="flex items-start gap-[10px]">
            <span className="text-[20px] font-bold text-[rgb(71,71,71)] leading-[28px] font-['Inter']">
              My Profile
            </span>
          </div>
          <div className="flex gap-[8px]"></div>
        </div>

        {/* User Info Section */}
        <div
          style={{
            height: '168px',
            background: 'linear-gradient(to right, rgb(240,240,240), rgba(240,240,240,0))',
          }}
        >
          <div className="p-[24px_30px] border-b border-[rgb(235,235,235)]">
            <div className="flex gap-4 items-start">
              {/* Profile Image */}
              <div className="w-[120px] h-[120px] bg-[rgb(227,130,46)] rounded-lg overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src="Client.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* User Details */}
              <div className="flex-1">
                <div className="flex items-center gap-4 px-[24px]">
                  <span className="text-[28px] font-semibold text-[rgb(51,51,51)] leading-[33.6px] font-['Inter']">
                    Client Name
                  </span>
                  <div className="px-3 py-1 border border-[rgb(227,130,46)] rounded-full">
                    <span className="text-[14px] text-[rgb(227,130,46)] leading-[19.6px] font-['Inter']">
                      Client
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2 px-[24px] min-h-[56px]">
                  <div className="flex items-center gap-2">
                    <MdMail className="w-8 h-8 text-[rgb(51,51,51)]" />
                    <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Inter']">
                      johnD@email.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCall className="w-8 h-8 text-[rgb(51,51,51)]" />
                    <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Inter']">
                      +(44) 0771 234 567
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="px-4 py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter']">
                  <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <div className="w-5 h-5"></div>
                    <span className="leading-[19.6px]">Change Picture</span>
                    <div className="w-5 h-5"></div>
                  </div>
                </button>
                <button className="px-4 py-3 border border-[rgb(227,130,46)] text-[rgb(227,130,46)] font-bold text-[14px] rounded-lg font-['Inter']">
                  <div className="flex items-center justify-between gap-2 cursor-pointer">
                    <div className="w-5 h-5"></div>
                    <span className="leading-[19.6px]">Remove Picture</span>
                    <div className="w-5 h-5"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Personal/Company/Security Data Section */}
        <div className="flex">
          <div className="w-[877px]">
            {/* Tabs */}
            <div className="flex px-[30px] h-[60px] bg-white border border-[rgb(235,235,235)]">
              <div
                className={`w-[117px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Personal" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Personal")}
              >
                <div className="w-[85px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Personal" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Personal
                  </span>
                </div>
              </div>
              <div
                className={`w-[120px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Company" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Company")}
              >
                <div className="w-[88px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Company" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Company
                  </span>
                </div>
              </div>
              <div
                className={`w-[111px] h-full flex items-center justify-center py-2 px-4 cursor-pointer ${
                  activeTab === "Security" ? "border-b-2 border-[rgb(227,130,46)]" : "border-b border-[rgb(235,235,235)]"
                }`}
                onClick={() => setActiveTab("Security")}
              >
                <div className="w-[79px] px-2">
                  <span className={`text-[16px] font-bold leading-[22.4px] font-['Inter'] ${
                    activeTab === "Security" ? "text-[rgb(227,130,46)]" : "text-[rgb(71,71,71)]"
                  }`}>
                    Security
                  </span>
                </div>
              </div>
            </div>

            {/* Personal/Company/Security Data Header */}
            <div className="w-[877px] h-[60px] bg-[rgb(227,130,46)] flex items-center px-[30px]">
              <span className="text-[20px] font-bold text-white leading-[28px] font-['Inter']">
                {activeTab === "Personal" ? "Personal data" : activeTab === "Company" ? "Company data" : "Security data"}
              </span>
            </div>

            {/* Editable Personal, Company, or Security Data Fields */}
            <div className="p-[24px_0] h-[312px] bg-white">
              <div className="p-[16px_30px]">
                {activeTab === "Personal" ? (
                  <>
                    <div className="flex gap-6">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={personalData.name}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={personalData.firstName}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={personalData.email}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={personalData.phone}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="w-[396.5px] h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={personalData.country}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-[396.5px] h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={personalData.city}
                            onChange={handlePersonalChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : activeTab === "Company" ? (
                  <>
                    <div className="flex gap-6">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={companyData.name}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            URC
                          </label>
                          <input
                            type="text"
                            name="urc"
                            value={companyData.urc}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Field of Activity
                          </label>
                          <input
                            type="text"
                            name="fieldOfActivity"
                            value={companyData.fieldOfActivity}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={companyData.phone}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="w-[396.5px] h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={companyData.country}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-[396.5px] h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={companyData.city}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={companyData.address}
                            onChange={handleCompanyChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-6">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={securityData.name}
                            onChange={handleSecurityChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Address
                          </label>
                          <input
                            type={showAddress ? "text" : "password"}
                            name="address"
                            value={securityData.address}
                            onChange={handleSecurityChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none pr-10"
                          />
                          <button
                            onClick={() => setShowAddress(!showAddress)}
                            className="absolute right-2 text-[rgb(51,51,51)]"
                          >
                            {showAddress ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px] flex items-center">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Confirm New Password
                          </label>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmNewPassword"
                            value={securityData.confirmNewPassword}
                            onChange={handleSecurityChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none pr-10"
                          />
                          <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-2 text-[rgb(51,51,51)]"
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex-1 min-h-[56px] relative">
                        <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_8px] h-[56px]">
                          <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                            Field of Activity
                          </label>
                          <input
                            type="text"
                            name="fieldOfActivity"
                            value={securityData.fieldOfActivity}
                            onChange={handleSecurityChange}
                            className="w-full h-full text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px] bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-h-[56px] flex items-center gap-2">
                        <button
                          onClick={generatePassword}
                          className="px-4 py-2 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter']"
                        >
                          Generate Password
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className="p-2 border border-[rgb(227,130,46)] text-[rgb(227,130,46)] rounded-lg"
                        >
                          <FaCopy />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Attachments Section */}
          <div className="w-[418px] border border-[rgb(235,235,235)]">
            <div className="p-6 flex flex-col gap-3 min-h-[510px]">
              <div className="flex flex-col gap-3 min-h-[462px]">
                <div className="flex items-center gap-2 min-h-[40px] py-1">
                  <span className="text-[16px] text-[rgb(71,71,71)] font-['Font_Awesome_6_Free']">
                    <FaFolderOpen />
                  </span>
                  <span className="text-[16px] font-bold text-[rgb(71,71,71)] leading-[22.4px] font-['Inter']">
                    Attachments
                  </span>
                </div>
                <div className="bg-[rgb(240,240,240)] p-4 rounded-lg border border-[rgb(235,235,235)] h-[354px] flex items-center justify-center">
                  <div className="text-center space-y-[17px]">
                    <div className="flex justify-center">
                      <FaPhotoVideo className="w-16 h-16 text-[rgb(227,130,46)]" />
                    </div>
                    <p className="text-[12px] text-[rgb(71,71,71)] leading-[16.8px] font-['Inter']">
                      No files uploaded...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="w-[134px] py-3 bg-[rgb(71,71,71)] text-white font-bold text-[14px] rounded-lg border border-[rgb(235,235,235)] font-['Inter']">
                    <div className="flex items-center justify-between gap-2 px-4 cursor-pointer">
                      <div className="w-5 h-5"></div>
                      <span className="leading-[19.6px]">Import</span>
                      <div className="w-5 h-5"></div>
                    </div>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[rgb(227,130,46)] rounded-lg p-[6px]">
                    <span className="text-[14px] text-[rgb(227,130,46)] font-['Font_Awesome_6_Free'] font-black">
                      <FaTrash />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button Section */}
        <div className="p-[20px_30px] bg-white rounded-xl border border-[rgb(235,235,235)] flex justify-end min-h-[84px] space-y-[30px]">
          <div>
            <button className="px-4 py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter']">
              <div className="flex items-center justify-between gap-2 cursor-pointer">
                <div className="w-5 h-5"></div>
                <span className="leading-[19.6px]">Save</span>
                <div className="w-5 h-5"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;