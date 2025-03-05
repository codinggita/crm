import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsis, 
  faAngleRight, 
  faAngleLeft, 
  faAngleDoubleRight, 
  faAngleDoubleLeft, 
  faSort, 
  faPaperPlane,
  faCalendar,   
  faList,
  faFile
} from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  return (
    <div className="w-[1655px] h-[555px] p-[30px_180px] mt-[155px]">
      <div className="w-full h-[495px] min-h-[495px] max-h-[495px] shadow-[0_4px_48px_rgba(0,0,0,0.12)]">
        <div className="w-full min-h-[495px] max-h-[495px] bg-white rounded-lg">
        <div className="w-[1295px] h-[80px] pt-[0px] pl-[30px] pb-[0px] pr-[30px] border-[0.5px] border-[#EBEBEB] flex items-center justify-between">
            <div className="flex-1 flex justify-start">
                <div className="text-[#474747] font-['Inter'] text-[20px] font-bold leading-[28px]">
                  Notifications
                </div>
            </div>
            <div className="p-[6px] rounded-lg border-[0.5px] border-[#E3832E] flex items-center justify-center">
              <div className="w-[20px] h-[20px] text-[#E3832E] flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsis} className="text-[14px]" />
              </div>
            </div>
          </div>

          <div className="w-full min-h-[335px] max-h-[335px] bg-white">
            {/* Notification 1 */}
            <div className="w-full border-[0.5px] border-[#EBEBEB]">
              <div className="p-[8px_16px] min-h-[75px] max-h-[75px] bg-gradient-to-l from-white to-[rgba(255,255,255,0.88)] border-[2px] border-[#E3832E] flex items-center gap-4">
                <div className="p-[4px_4px_4.84px_4px] w-[24px] h-[24px]"></div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon 
                      icon={faPaperPlane} 
                      className="text-[#E3832E] text-[16px] mr-1" 
                    />
                    <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                      You were invited to a new campaign by
                    </span>
                    <span className="text-[#E3832E] font-['Inter'] text-[14px] font-bold leading-[19.6px]">
                      Dimity Vegas
                    </span>
                  </div>
                  <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
                    Today at 13:32
                  </div>
                </div>
                <div className="w-[24px] h-[24px] text-[#EBEBEB] font-['Font_Awesome_5_Free'] text-[14px] font-black">
                  check
                </div>
              </div>
            </div>

            {/* Notification 2 */}
            <div className="w-full border-[0.5px] border-[#EBEBEB]">
              <div className="p-[8px_16px] bg-white min-h-[55px] max-h-[55px] flex items-center gap-4">
                <div className="p-[3.5px] w-[24px] h-[24px]">
                  <div className="w-[17px] h-[17px]"></div>
                </div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon 
                      icon={faFile} 
                      className="text-[#E3832E] text-[16px] mr-1" 
                    />
                    <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                      A new deliverable was checked as completed. Check it out!
                    </span>
                  </div>
                  <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
                    Today at 13:32
                  </div>
                </div>
                <div className="w-[24px] h-[24px] text-white font-['Font_Awesome_5_Free'] text-[14px] font-black">
                  check
                </div>
              </div>
            </div>

            {/* Notification 3 */}
            <div className="w-full border-[0.5px] border-[#EBEBEB]">
              <div className="p-[8px_16px] bg-white min-h-[55px] max-h-[55px] flex items-center gap-4">
                <div className="p-[3.5px] w-[24px] h-[24px]">
                  <div className="w-[17px] h-[17px]"></div>
                </div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon 
                      icon={faCalendar} 
                      className="text-[#E3832E] text-[16px] mr-1" 
                    />
                    <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                      Your Campaign.name campaign was updated.
                    </span>
                  </div>
                  <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
                    Today at 13:32
                  </div>
                </div>
                <div className="w-[24px] h-[24px] text-white font-['Font_Awesome_5_Free'] text-[14px] font-black">
                  check
                </div>
              </div>
            </div>

            {/* Notification 4 */}
            <div className="w-full border-[0.5px] border-[#EBEBEB]">
              <div className="p-[8px_16px] bg-white min-h-[75px] max-h-[75px] flex items-center gap-4">
                <div className="p-[3.5px_4.56px] w-[24px] h-[24px]">
                  <div className="w-[14.88px] h-[17px]"></div>
                </div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon 
                      icon={faList} 
                      className="text-[#E3832E] text-[16px] mr-1" 
                    />
                    <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                      You’ve received a new offer from<br/>Mark Jester
                    </span>
                  </div>
                  <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
                    Today at 13:32
                  </div>
                </div>
                <div className="w-[24px] h-[24px] text-white font-['Font_Awesome_5_Free'] text-[14px] font-black">
                  check
                </div>
              </div>
            </div>

            {/* Notification 5 */}
            <div className="w-full border-[0.5px] border-[#EBEBEB]">
              <div className="p-[8px_16px] bg-white min-h-[75px] max-h-[75px] flex items-center gap-4">
                <div className="p-[3.5px_4.56px] w-[24px] h-[24px]">
                  <div className="w-[14.88px] h-[17px]"></div>
                </div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon 
                      icon={faList} 
                      className="text-[#E3832E] text-[16px] mr-1" 
                    />
                    <span className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                      You’ve received a new offer from<br/>Johnny Cage
                    </span>
                  </div>
                  <div className="text-[#333333] font-['Inter'] text-[12px] leading-[16.8px] opacity-72">
                    Today at 13:32
                  </div>
                </div>
                <div className="w-[24px] h-[24px] text-white font-['Font_Awesome_5_Free'] text-[14px] font-black">
                  check
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="p-[20px_30px] flex justify-between items-center w-full">
            <div className="flex gap-[15px] items-center">
              <div className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                Elements per page
              </div>
              <div className="p-[0px_12px] w-[105px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center gap-[6px]">
                <div className="text-[#333333] font-['Inter'] text-[14px] leading-[19.6px]">
                  5
                </div>
                <div className="text-[#333333]">
                  <FontAwesomeIcon icon={faSort} className="text-[12px]" />
                </div>
              </div>
            </div>
            <div className="flex gap-[5px] items-start">
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#EBEBEB]">
                  <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#EBEBEB]">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-[#E3832E] rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-white font-['Roboto'] text-[12px] font-medium">
                  1
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E] font-['Roboto'] text-[12px] font-medium">
                  2
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E] font-['Roboto'] text-[12px] font-medium">
                  3
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E]">
                  <FontAwesomeIcon icon={faAngleRight} className="text-[12px]" />
                </div>
              </div>
              <div className="w-[33px] h-[33px] bg-white rounded-lg border-[0.5px] border-[#EBEBEB] flex items-center justify-center">
                <div className="text-[#E3832E]">
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="text-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;