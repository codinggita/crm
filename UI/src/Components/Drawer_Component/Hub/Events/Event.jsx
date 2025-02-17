import { React, useCallback, useState } from 'react';
import { FaSearch, FaArrowRight, FaSync, FaCalendarAlt, FaSort, FaEllipsisH, FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Events = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [statusText, setStatusText] = useState("");

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onActionsContainerClick = useCallback(() => {
    // Add your code here
  }, []);
  
  return (
    <div className="w-full relative drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] flex flex-row items-start justify-center py-[30px] box-border text-left text-[14px] text-[#333] font-Inter">
      <div className="rounded-lg bg-white flex flex-col items-center justify-start">
        {/* Head Section */}
        <div className="w-[1295px] border-b border-[#ebebeb] box-border h-20 flex flex-row items-center justify-center px-[30px] gap-5">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative tracking-tight leading-[1.4]">
              Events
            </div>
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer text-center text-white"
            onClick={onActionsContainerClick}
          >
            <div className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-3 px-4 gap-2">
              {/* Component icon replaced by an icon element */}
              <div className="w-5 h-5" />
              <div className="flex flex-row items-center justify-start">
                <b className="relative leading-[1.4]">New event</b>
              </div>
              <div className="w-5 h-5" />
            </div>
          </div>
        </div>
        {/* Filters Section */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-start justify-center py-4 text-[16px] font-Roboto">
          <div className="self-stretch flex flex-col items-start justify-end px-[30px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-4">
              {/* Search Filter */}
              <div className="flex-1 rounded-sm border border-[#333] flex flex-col items-start justify-start">
                <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pr-4">
                  <div className="w-12 h-12 flex flex-col items-center justify-center">
                    <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
                      <div className="flex flex-row items-center justify-center p-2">
                         <FaSearch/>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-12 flex flex-col items-start justify-center py-1">
                    <div className="flex flex-row items-center justify-start">
                      <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)} 
                      placeholder="Search...."
                      className="w-full h-full border-none outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* All/Status Filter */}
              <div className="flex-1 relative rounded-t-sm h-[56px]">
                <div className="absolute w-full top-0 left-0 rounded-sm border border-[#333] h-[56px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pl-4">
                    <div className="flex-1 h-12 flex flex-col items-start justify-center py-1 relative">
                      <div className="flex flex-row items-center justify-start z-0">
                        <input
                          type="text"
                          value={statusText}
                          onChange={(e) => setStatusText(e.target.value)}
                          placeholder="All"
                          className="w-full h-full border-none outline-none" 
                          />
                      </div>
                      <div className="m-0 absolute -top-3 -left-1 bg-white flex items-center px-1 z-10 text-xs">
                        <div className="relative leading-4">Status</div>
                      </div>
                    </div>
                    <div className="w-12 h-12 flex flex-col items-center justify-center">
                      <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center p-2">
                          <i className="w-6 h-6 relative overflow-hidden flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Date Interval Filter */}
              <div className="flex-1 relative rounded-t-sm h-[56px]">
                <div className="absolute w-full top-0 left-0 rounded-sm border border-[#333] h-[56px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 rounded-t-sm flex flex-row items-start justify-start py-1 pl-4">
                    <div className="flex-1 h-12 flex flex-col items-start justify-center py-1 relative">
                      <div className="flex flex-row items-center justify-start z-0">
                        <div className="relative tracking-normal leading-6">
                          {startDate && endDate
                          ?`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                          :"MM/DD/YYYY - MM/DD/YYYY"} 
                        </div>
                        <DatePicker
                          selected={startDate}
                          onChange={handleDateChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          inline
                          customInput={<FaCalendarAlt className="cursor-pointer"/>}
                        />
                        <FaCalendarAlt/>
                      </div>
                      <div className="m-0 absolute -top-3 -left-1 bg-white flex items-center px-1 z-10 text-xs">
                        <div className="relative leading-4">Interval</div>
                      </div>
                    </div>
                    <div className="w-12 h-12 flex flex-col items-center justify-center">
                      <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center p-2">
                          <i className="w-6 h-6 relative" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sync Button */}
              <div className="w-[56px] h-[56px] rounded-lg border border-[#e4822f] flex flex-col items-center justify-center text-center text-[14px] text-[#e4822f] font-[FontAwesome6Free] cursor-pointer">
                <div className="relative"><FaSync/></div>
              </div>
              {/* Filtering Action */}
              <div className="h-[56px] flex flex-row items-start justify-start text-center text-[14px] text-white font-Inter">
                <div className="rounded-lg bg-[#e4822f] border border-[#e4822f] flex flex-row items-center justify-center py-[18px] px-[28px] gap-2 cursor-pointer">
                  <div className="w-5 h-5" />
                  <div className="flex flex-row items-center justify-start">
                    <b className="relative leading-[1.4]">Filtering</b>
                  </div>
                  <div className="w-5 h-5 flex flex-col items-center justify-center font-[FontAwesome6Free]">
                    <div className="relative"><FaArrowRight/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Filter Headers */}
        <div className="self-stretch bg-[#f0f0f0] flex flex-row items-start justify-start text-center text-[#474747]">
          <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
            <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
              <b className="relative leading-[1.4]">ID</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]"><FaSort/></div>
            </div>
            <div className="flex-1 h-10 flex flex-row items-center justify-start py-[10px] px-[24px] gap-4">
              <b className="relative leading-[1.4]">Designation</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]"><FaSort/></div>
            </div>
            <div className="w-[160px] h-10 flex flex-row items-center justify-start px-4 gap-4">
              <b className="w-[69px] relative leading-[1.4] flex items-center justify-center flex-shrink-0">
                Start date
              </b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]"><FaSort/></div>
            </div>
            <div className="w-[160px] h-10 flex flex-row items-center justify-start px-4 gap-4">
              <b className="w-[69px] relative leading-[1.4] flex items-center justify-center flex-shrink-0">
                End date.
              </b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]"><FaSort/></div>
            </div>
            <div className="w-[160px] h-10 flex flex-row items-center justify-center px-4 gap-4">
              <b className="relative leading-[1.4]">Status</b>
              <div className="relative tracking-tighter font-[FontAwesome5Free]"><FaSort/></div>
            </div>
            <div className="w-[80px] h-10 flex flex-row items-center justify-end py-[10px]">
              <b className="relative leading-[1.4]">Actions</b>
            </div>
          </div>
        </div>
        {/* Items */}
        <div className="self-stretch flex flex-col items-center justify-center">
          {/* Item 1 */}
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
            <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
              <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
                <b className="relative leading-[1.4]">#012999</b>
              </div>
              <div
                className="flex-1 h-[60px] flex flex-row items-center justify-center px-6 cursor-pointer"
                onClick={onActionsContainerClick}
              >
                <div className="flex-1 relative tracking-tight leading-[1.4] inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5">
                  Continuous Entrepreneurial Development: "Playground for Entrepreneurs" Workshop on October 26th.
                </div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">2/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">3/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center px-4 text-[12px] text-[#f0f0f0]">
                <div className="w-[96px] h-[28px] rounded-lg bg-[#e4822f] border-[2px] border-white/50 flex flex-row items-center justify-center p-[6px]">
                  <div className="relative tracking-tight leading-[1.4]">Sketch</div>
                </div>
              </div>
              <div className="w-[80px] h-[60px] flex flex-row items-center justify-end gap-1 text-center text-[#e4822f] font-[FontAwesome6Free]">
                <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center p-[6px]">
                  <div className="w-5 h-5 flex flex-col items-center justify-center">
                    <div className="relative"><FaEllipsisH /></div>
                  </div>
                </div>
                {/* superadminEdit elements remain hidden */}
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
            <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
              <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
                <b className="relative leading-[1.4]">#012999</b>
              </div>
              <div className="flex-1 h-[60px] flex flex-row items-center justify-center px-6">
                <a
                  className="flex-1 relative tracking-tight leading-[1.4] text-inherit inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5 no-underline"
                  href="https://openhub.ro/en/2023/09/16/workshop-innovative-practices-to-approach-entrepreneurship-through-business-simulators/"
                  target="_blank"
                >
                  Workshop – Innovative practices to approach entrepreneurship through Business Simulators
                </a>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">2/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">3/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center px-4 text-[12px]">
                <div className="w-[96px] h-[28px] rounded-lg bg-[rgba(47,157,244,0.2)] border-[2px] border-white/50 flex flex-row items-center justify-center p-[6px]">
                  <div className="relative tracking-tight leading-[1.4]">In progress</div>
                </div>
              </div>
              <div className="w-[80px] h-[60px] flex flex-row items-center justify-end gap-1 text-center text-[#e4822f] font-[FontAwesome6Free]">
                <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center p-[6px]">
                  <div className="w-5 h-5 flex flex-col items-center justify-center">
                    <div className="relative"><FaEllipsisH /></div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
            <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
              <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
                <b className="relative leading-[1.4]">#012999</b>
              </div>
              <div className="flex-1 h-[60px] flex flex-row items-center justify-center px-6">
                <a
                  className="flex-1 relative tracking-tight leading-[1.4] text-inherit inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5 no-underline"
                  href="https://openhub.ro/en/2023/09/11/value-town-informatii-cu-tva-2/"
                  target="_blank"
                >
                  Value Town – Informatii cu TVA
                </a>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">2/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">3/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center px-4 text-[12px] text-[#e4822f]">
                <div className="w-[96px] h-[28px] rounded-lg bg-[rgba(255,203,20,0.2)] border-[2px] border-white/50 flex flex-row items-center justify-center p-[6px]">
                  <div className="relative tracking-tight leading-[1.4]">Pending</div>
                </div>
              </div>
              <div className="w-[80px] h-[60px] flex flex-row items-center justify-end gap-1 text-center text-[#e4822f] font-[FontAwesome6Free]">
                <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center p-[6px]">
                  <div className="w-5 h-5 flex flex-col items-center justify-center">
                    <div className="relative"><FaEllipsisH /></div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
            <div className="flex-1 border-b border-[#ebebeb] flex flex-row items-start justify-start px-[30px]">
              <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-center">
                <b className="relative leading-[1.4]">#012999</b>
              </div>
              <div className="flex-1 h-[60px] flex flex-row items-center justify-center px-6">
                <a
                  className="flex-1 relative tracking-tight leading-[1.4] text-inherit inline-block overflow-hidden overflow-<FaEllipsisH /> whitespace-nowrap h-5 no-underline"
                  href="https://openhub.ro/en/2023/07/30/workshop-online-marketing-and-resources-for-influencers/"
                  target="_blank"
                >
                  WorkShop – Online Marketing and resources for influencers
                </a>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">2/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-start px-4">
                <div className="flex-1 relative tracking-tight leading-[1.4]">3/11/2023</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center px-4 text-[12px] text-[#a4a4a4]">
                <div className="w-[96px] h-[28px] rounded-lg bg-[#ebebeb] border-[2px] border-white/50 flex flex-row items-center justify-center p-[6px]">
                  <div className="relative tracking-tight leading-[1.4]">Archived</div>
                </div>
              </div>
              <div className="w-[80px] h-[60px] flex flex-row items-center justify-end gap-1 text-center text-[#e4822f] font-[FontAwesome6Free]">
                <div className="rounded-lg border border-[#e4822f] flex flex-row items-center justify-center p-[6px]">
                  <div className="w-5 h-5 flex flex-col items-center justify-center">
                    <div className="relative"><FaEllipsisH /></div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
                <div className="w-8 h-8 rounded-lg border border-[#e4822f] hidden" />
              </div>
            </div>
          </div>
          {/* Item 6 – User Information (hidden in original) */}
          <div className="w-[1290px] h-[60px] hidden flex-row items-start justify-start px-[30px] box-border text-center">
            <div className="w-[100px] h-[60px] flex flex-row items-center justify-start text-left text-[18px] text-[#f6f9fc] font-[FontAwesome5Free]">
              <div className="w-10 h-10 relative rounded-lg bg-[#40a1d3] border border-[#236bb4] flex flex-row items-center justify-center">
                <div className="relative">user</div>
                {/* Replacing image with an icon */}
                <i className="w-10 h-10 relative rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex-1 relative tracking-tight leading-[1.4] flex items-center h-[31px]">
              <b>Wade Warren</b>
            </div>
            <div className="flex-1 h-[60px] flex flex-row items-center justify-center">
              <div className="flex-1 relative tracking-tight leading-[1.4]">
                delaney.west@gorczany.com
              </div>
            </div>
            <div className="flex-[0.868] h-[60px] flex flex-row items-center justify-center px-4">
              <div className="flex-1 relative tracking-tight leading-[1.4]">@wwarren</div>
            </div>
            <div className="flex-[0.868] h-[60px] flex flex-row items-center justify-center px-4 text-[#ed3237] font-[FontAwesome6Brands]">
              <div className="w-8 h-8 rounded-lg flex flex-col items-center justify-center">
                instagram
              </div>
            </div>
            <div className="w-[160px] h-[60px] flex flex-row items-center justify-end gap-1 text-white font-[FontAwesome6Free]">
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                eye
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                heart
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#ed3237] border border-[rgba(237,50,55,0.72)] flex flex-col items-center justify-center">
                envelope
              </div>
            </div>
          </div>
          {/* (Additional user items can be repeated with the same structure) */}
        </div>
        {/* Footer */}
        <div className="self-stretch flex flex-row items-center justify-between py-5 px-[30px] text-center">
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <div className="relative tracking-tight leading-[1.4]">
              Elements per page
            </div>
            <div className="rounded-lg bg-white border border-[#ebebeb] h-10 flex flex-row items-center justify-center px-3 gap-1.5">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[67px] relative tracking-tight leading-[1.4] inline-block flex-shrink-0">
                  5
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-[12px] font-[FontAwesome5Free]">
                <div className="relative"><FaSort/></div>
              </div>
            </div>
            <div className="relative tracking-tight leading-[1.4] hidden">
              înregistrări pe pagină.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px] text-[12px] text-[#e4822f] font-[FontAwesome6Free]">
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center text-[#ebebeb]">
              <div className="relative"><FaAngleDoubleLeft/></div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative"><FaAngleLeft/></div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-[#e4822f] border border-[#ebebeb] flex flex-col items-center justify-center text-white font-Roboto">
              <div className="relative font-medium">1</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center font-Roboto">
              <div className="relative font-medium">2</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center font-Roboto">
              <div className="relative font-medium">3</div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative"><FaAngleRight/></div>
            </div>
            <div className="w-[33px] h-[33px] rounded-lg bg-white border border-[#ebebeb] flex flex-col items-center justify-center">
              <div className="relative"><FaAngleDoubleRight/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
