import React from 'react';

const Profile = () => {
  return (
      <div className="pt-[30px] pb-[30px]">
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
                      src="https://placehold.co/120x120"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* User Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 px-[24px]">
                    <span className="text-[28px] font-semibold text-[rgb(51,51,51)] leading-[33.6px] font-['Inter']">
                      Clientin Numelescu
                    </span>
                    <div className="px-3 py-1 border border-[rgb(227,130,46)] rounded-full">
                      <span className="text-[14px] text-[rgb(227,130,46)] leading-[19.6px] font-['Inter']">
                        Client
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-2 px-[24px] min-h-[56px]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6"></div>
                      <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Inter']">
                        johnD@email.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6"></div>
                      <span className="text-[16px] font-bold text-[rgb(51,51,51)] leading-[22.4px] font-['Inter']">
                        +(44) 0771 234 567
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-3 bg-[rgb(227,130,46)] text-white font-bold text-[14px] rounded-lg font-['Inter']">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-5 h-5"></div>
                      <span className="leading-[19.6px]">Change Picture</span>
                      <div className="w-5 h-5"></div>
                    </div>
                  </button>
                  <button className="px-4 py-3 border border-[rgb(227,130,46)] text-[rgb(227,130,46)] font-bold text-[14px] rounded-lg font-['Inter']">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-5 h-5"></div>
                      <span className="leading-[19.6px]">Remove Picture</span>
                      <div className="w-5 h-5"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs and Personal Data Section */}
          <div className="flex">
            <div className="w-[877px]">
              {/* Tabs */}
              <div className="flex px-[30px] h-[60px] bg-white border border-[rgb(235,235,235)]">
                <div className="w-[117px] h-full border-[rgb(227,130,46)] flex items-center justify-center py-2 px-4">
                  <div className="w-[85px] px-2">
                    <span className="text-[16px] font-bold text-[rgb(227,130,46)] leading-[22.4px] font-['Inter']">
                      Personal
                    </span>
                  </div>
                </div>
                <div className="w-[120px] h-full border-b border-[rgb(235,235,235)] flex items-center justify-center py-2 px-4">
                  <div className="w-[88px] px-2">
                    <span className="text-[16px] text-[rgb(71,71,71)] leading-[22.4px] font-['Inter']">
                      Company
                    </span>
                  </div>
                </div>
                <div className="w-[111px] h-full border-b border-[rgb(235,235,235)] flex items-center justify-center py-2 px-4">
                  <div className="w-[79px] px-2">
                    <span className="text-[16px] text-[rgb(71,71,71)] leading-[22.4px] font-['Inter']">
                      Security
                    </span>
                  </div>
                </div>
              </div>

              {/* Personal Data Header */}
              <div className="w-[877px] h-[60px] bg-[rgb(227,130,46)] flex items-center px-[30px]">
                <span className="text-[20px] font-bold text-white leading-[28px] font-['Inter']">
                  Personal data
                </span>
              </div>

              {/* Personal Data Fields */}
              <div className="p-[24px_0] h-[312px] bg-white">
                <div className="p-[16px_30px]">
                  <div className="flex gap-6">
                    <div className="flex-1 min-h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0]">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              Name
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            Pană
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0]">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              First Name
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            Bogdan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 mt-4">
                    <div className="flex-1 min-h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0]">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              Email
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            panabogdan@thecon.ro
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0]">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              Phone Number
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            0770 123 456
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 mt-4">
                    <div className="w-[396.5px] h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0] flex items-center justify-between">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              Country
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            Romania
                          </span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center p-2">
                          <div className="w-6 h-6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[396.5px] h-[56px]">
                      <div className="border border-[rgb(51,51,51)] rounded p-[4px_16px_4px_0] flex items-center justify-between">
                        <div className="flex-1 min-h-[48px] p-1">
                          <div className="px-1 bg-white">
                            <span className="text-[12px] text-[rgb(51,51,51)] leading-[16px] font-['Roboto']">
                              City
                            </span>
                          </div>
                          <span className="text-[16px] text-[rgb(51,51,51)] leading-[24px] font-['Roboto'] tracking-[0.5px]">
                            Galați
                          </span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center p-2">
                          <div className="w-6 h-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attachments Section */}
            <div className="w-[418px] border border-[rgb(235,235,235)]">
              <div className="p-6 flex flex-col gap-3 min-h-[510px]">
                <div className="flex flex-col gap-3 min-h-[462px]">
                  <div className="flex items-center gap-2 min-h-[40px] py-1">
                    <span className="text-[16px] text-[rgb(71,71,71)] font-['Font_Awesome_6_Free']">
                      folder-open
                    </span>
                    <span className="text-[16px] font-bold text-[rgb(71,71,71)] leading-[22.4px] font-['Inter']">
                      Attachments
                    </span>
                  </div>
                  <div className="bg-[rgb(240,240,240)] p-4 rounded-lg border border-[rgb(235,235,235)] h-[354px] flex items-center justify-center">
                    <div className="text-center space-y-[17px]">
                      <span className="text-[48px] text-[rgb(227,130,46)] font-['Font_Awesome_6_Free'] font-black">
                        photo-video
                      </span>
                      <p className="text-[12px] text-[rgb(71,71,71)] leading-[16.8px] font-['Inter']">
                        No files uploaded...
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="w-[134px] py-3 bg-[rgb(71,71,71)] text-white font-bold text-[14px] rounded-lg border border-[rgb(235,235,235)] font-['Inter']">
                      <div className="flex items-center justify-between gap-2 px-4">
                        <div className="w-5 h-5"></div>
                        <span className="leading-[19.6px]">Import</span>
                        <div className="w-5 h-5"></div>
                      </div>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-[rgb(227,130,46)] rounded-lg p-[6px]">
                      <span className="text-[14px] text-[rgb(227,130,46)] font-['Font_Awesome_6_Free'] font-black">
                        trash
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
                <div className="flex items-center justify-between gap-2">
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