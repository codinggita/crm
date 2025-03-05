import React from 'react';

const Inbox = ({ setMainContent }) => {
  const handleChat = () => {
    setMainContent("Chat");
  };

  return (
    <div className="w-[1295px] h-[885px] bg-white rounded-lg shadow-[0_12px_24px_0_rgba(0,0,0,0.08)] overflow-hidden mt-[155px] ml-[155px]"
      style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex flex-col items-start justify-start">
        <div className="w-full">
          <div className="flex flex-row items-start justify-start">
            <div className="flex-1">
              <div className="h-[54px] px-6 py-4 bg-[#F0F0F0]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex-1">
                    <div className="h-[22px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex-1">
                          <div className="h-[22px]">
                            <div className="flex flex-row items-center justify-start">
                              <p
                                className="text-[#333333] text-base font-bold"
                                style={{ lineHeight: '1.4' }}>
                                Clients
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10px]"></div>
                  <div className="h-full">
                    <div className="flex flex-col items-end justify-center">
                      <div className="w-8 h-5 px-2 bg-[#E4822F] rounded">
                        <div className="flex flex-col items-center justify-center">
                          <p
                            className="text-white text-xs font-normal"
                            style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
                            0
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-[54px] px-6 py-4 bg-[#F0F0F0] border border-[#EBEBEB]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex-1">
                    <div className="h-[22px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex-1">
                          <div className="h-[22px]">
                            <div className="flex flex-row items-center justify-start">
                              <p
                                className="text-[#333333] text-base font-bold"
                                style={{ lineHeight: '1.4' }}>
                                Suppliers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10px]"></div>
                  <div className="h-full">
                    <div className="flex flex-col items-end justify-center">
                      <div className="w-8 h-5 px-2 bg-[#E4822F] rounded">
                        <div className="flex flex-col items-center justify-center">
                          <p
                            className="text-white text-xs font-normal"
                            style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
                            0
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-[54px] px-6 py-4 bg-white border border-[#EBEBEB]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex-1">
                    <div className="h-[22px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex-1">
                          <div className="h-[22px]">
                            <div className="flex flex-row items-center justify-start">
                              <p
                                className="text-[#333333] text-base font-bold"
                                style={{ lineHeight: '1.4' }}>
                                Administration
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10px]"></div>
                  <div className="h-full">
                    <div className="flex flex-col items-end justify-center">
                      <div className="w-8 h-5 px-2 bg-[#E4822F] rounded">
                        <div className="flex flex-col items-center justify-center">
                          <p
                            className="text-white text-xs font-normal"
                            style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10px]"></div>
        <div className="w-full h-[147px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-full overflow-hidden">
              <div className="flex flex-row items-start justify-start">
                <div className="flex-1">
                  <div className="py-4">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-full h-[115px] px-5">
                        <div
                          className="w-full h-[115px] rounded-[32px]"
                          style={{ boxShadow: '0 4px 4px 0 rgba(36,57,138,0.08)' }}>
                          <div className="flex flex-col items-start justify-start">
                            <div className="w-full py-2">
                              <div className="flex flex-row items-start justify-start">
                                <p
                                  className="text-[#333333] text-xs font-medium"
                                  style={{ lineHeight: '1.4' }}>
                                  Message
                                </p>
                              </div>
                            </div>
                            <div 
                              className="w-full pt-2 pl-2 pr-4 pb-2 bg-gradient-to-l from-white to-[#EBEBEB] border border-[#EBEBEB] rounded-lg cursor-pointer"
                              onClick={handleChat}>
                              <div className="flex flex-row items-center justify-start">
                                <div className="w-[58px] h-[58px] border-2 border-[#E4822F] rounded">
                                  <img
                                    src="Adminstart.jpg"
                                    className="w-full h-full object-cover"
                                    alt="Placeholder"/>
                                </div>
                                <div className="w-[8px]"></div>
                                <div className="flex-1">
                                  <div className="flex flex-col items-start justify-center">
                                    <div className="w-full">
                                      <div className="flex flex-row items-center justify-start">
                                        <div className="flex-1">
                                          <div className="h-[24px]">
                                            <div className="flex flex-row items-center justify-start">
                                              <p
                                                className="text-[#333333] text-base font-bold"
                                                style={{ lineHeight: '1.4' }}>
                                                UserName
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-[24px]"></div>
                                        <div className="w-[90px]">
                                          <div className="flex flex-row items-center justify-start">
                                            <p
                                              className="text-[#333333] text-xs font-normal"
                                              style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
                                              Today2 6:24 PM
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="w-full">
                                      <div className="flex flex-row items-center justify-start">
                                        <div className="flex-1">
                                          <div className="h-[20px]">
                                            <div className="flex flex-row items-center justify-start">
                                              <div className="flex-1">
                                                <div className="h-[20px]">
                                                  <div className="flex-1">
                                                    <div className="h-[20px]">
                                                      <p
                                                        className="text-[#333333] text-sm font-normal opacity-50"
                                                        style={{ lineHeight: '1.4', letterSpacing: '-0.28px' }}>
                                                        The invoice has been issued!
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-[24px]"></div>
                                        <div className="w-8 h-5 bg-[#E4822F] rounded">
                                          <div className="flex flex-col items-center justify-center">
                                            <p
                                              className="text-white text-xs font-normal"
                                              style={{ lineHeight: '1.4', letterSpacing: '-0.24px' }}>
                                              4
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-2 pl-[68px]">
                              <div className="flex flex-col items-start justify-center"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox ;