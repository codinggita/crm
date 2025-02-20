import React from 'react';

const EventView = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full rounded-lg bg-white border-b border-gray-200">
        <div className="w-full flex flex-row items-center justify-between border-b border-gray-200 px-8 py-5">
          <div className="flex flex-row items-start">
            <b className="relative leading-tight">View Event</b>
          </div>
          <div className="flex flex-row gap-2 text-center text-sm text-gray-600">
            <div className="rounded-lg border border-gray-600 flex flex-row items-center justify-center px-4 py-3 gap-2">
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
              <div className="flex flex-row items-center">
                <b className="relative leading-tight">Modification</b>
              </div>
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
            </div>
            <div className="rounded-lg border border-orange-500 flex flex-row items-center justify-center px-4 py-3 gap-2 text-orange-500">
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
              <div className="flex flex-row items-center">
                <b className="relative leading-tight">Back</b>
              </div>
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
            </div>
          </div>
        </div>
        
        <div className="w-full rounded-xl overflow-hidden flex flex-col items-start justify-center p-8 gap-4 text-2xl">
          <img className="w-full max-w-full overflow-hidden h-[400px] object-cover" alt="" src="Image.png" />
          <div className="w-full flex flex-row items-start justify-between border-b border-gray-200 py-5 gap-8">
            <div className="w-[1046px] flex flex-col items-start justify-center gap-2 text-left">
              <div className="w-full flex flex-row items-start">
                <div className="flex-1 relative leading-tight font-semibold">Playground for Entrepreneurs</div>
              </div>
              <div className="w-full h-8 flex flex-row items-center opacity-50 text-base font-['Font_Awesome_6_Free']">
                <div className="flex-1 flex flex-row items-center gap-6 pr-6">
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-6 h-6 flex flex-col items-center justify-center">
                      <div className="relative leading-tight">calendar</div>
                    </div>
                    <div className="flex flex-row items-center font-inter">
                      <b className="relative leading-tight">November 2, 2023</b>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-6 h-6 flex flex-col items-center justify-center">
                      <div className="relative leading-tight">clock</div>
                    </div>
                    <div className="flex flex-row items-center font-inter">
                      <b className="relative leading-tight">14:00</b>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-6 h-6 flex flex-col items-center justify-center">
                      <div className="relative leading-tight">door-open</div>
                    </div>
                    <div className="flex flex-row items-center font-inter">
                      <b className="relative leading-tight">20:00</b>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1 font-inter">
                    <div className="w-6 h-6 flex flex-col items-center justify-center font-['Font_Awesome_6_Free']">
                      <div className="relative leading-tight">user</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <b className="relative leading-tight">48</b>
                    </div>
                    <div className="flex flex-row items-center">
                      <b className="relative leading-tight">Slots</b>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center gap-1">
                    <div className="w-6 h-6 flex flex-col items-center justify-center">
                      <div className="relative leading-tight">map-pin</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center font-inter">
                      <b className="w-full relative leading-tight">Thecon Headquarters, Lalelelor Street, No. 10, Galați.</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-11 hidden flex-row items-start text-sm text-white">
              <div className="rounded-lg bg-orange-500 flex flex-row items-center justify-center px-4 py-3 gap-2">
                <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
                <div className="flex flex-row items-center">
                  <b className="relative leading-tight">Află mai multe</b>
                </div>
                <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-end justify-start text-base text-green-500">
              <div className="w-28 relative rounded-lg border border-green-500 h-[30px] overflow-hidden">
                <div className="absolute h-full w-[100.9%] top-0 right-0 bottom-0 left-[-0.9%] bg-green-500 opacity-20"></div>
                <b className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_35.5px)] leading-tight">Available</b>
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col items-start justify-center text-left text-base">
            <div className="w-[1235px] relative leading-tight inline-block">
              <p className="mt-0 mb-2">Just one week after the success of our previous workshop, the OpenHub community was delighted to host the 7th workshop in our entrepreneurial series. "Playground for Entrepreneurs" on October 26th continued to explore the themes of entrepreneurship and innovation, providing participants with valuable opportunities for learning and networking..</p>
              <p className="mt-0 mb-2">&nbsp;</p>
              <p className="mt-0 mb-2">
                <b>Event Proceedings:</b>
              </p>
              <p className="mt-0 mb-2">{`The workshop began with an inspirational speech from a successful local entrepreneur who shared experiences and lessons learned throughout their entrepreneurial journey. Participants had the opportunity to ask questions and interact directly with the speaker, creating a dynamic and interactive environment. After the Q&A session, working groups were formed to discuss and develop innovative business ideas. Mentors were present to provide guidance and advice, ensuring that all participants were engaged and benefited from the experience.`}</p>
              <p className="mt-0 mb-2">&nbsp;</p>
              <p className="mt-0 mb-2">
                <b>Workshop Results:</b>
              </p>
              <p className="mt-0 mb-2">At the end of the workshop, each group presented the business idea they had developed, receiving constructive feedback. It was an excellent opportunity for participants to improve their presentation skills and validate their ideas in a friendly and supportive environment.</p>
              <p className="mt-0 mb-2">&nbsp;</p>
              <p className="mt-0 mb-2">
                <b>Conclusion:</b>
              </p>
              <p className="mt-0 mb-2">Workshop number 7 in the entrepreneurial series was another important step in the development of our community. Participants left with new knowledge, valuable connections, and an extra dose of inspiration to pursue their entrepreneurial dreams. We look forward to the next event and hope to see even more enthusiastic entrepreneurs joining our community.</p>
              <p className="mt-0 mb-2">&nbsp;</p>
              <p className="mt-0 mb-2">
                <b>OpenInnoHub:</b>
              </p>
              <p className="m-0 whitespace-pre-wrap">The project is co-financed by the European Union (EU) from the European Regional Development Fund through the Operational Program Competitiveness 2014-2020. Project title: Creation of an Open Innovation Hub in the South-East Region (OpenInnoHub) code SMIS 153386. The content of this material does not necessarily represent the official position of the European Union or the Romanian Government. For detailed information about other programs co-financed by the European Union, we invite you to visit...</p>
            </div>
          </div>
        </div>
        
        <div className="w-full rounded-xl bg-white border-t border-gray-200 flex flex-col items-end justify-start p-8 text-sm text-orange-500">
          <div className="flex flex-row items-start">
            <div className="rounded-lg border border-orange-500 flex flex-row items-center justify-center px-4 py-3 gap-2">
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
              <div className="flex flex-row items-center">
                <b className="relative leading-tight">Back</b>
              </div>
              <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full rounded-lg">
        <div className="w-full flex flex-row items-center justify-start border-b border-gray-200 p-8 text-xl">
          <div className="flex flex-row items-start">
            <b className="relative leading-tight">Participanți</b>
          </div>
          <div className="w-32 h-11 flex flex-row items-start">
            <div className="w-[135px] rounded-lg border border-orange-500 h-11 hidden"></div>
          </div>
        </div>
        
        <div className="w-full flex flex-col items-start justify-center">
          <div className="w-full border-b border-gray-200 flex flex-col items-start justify-center py-4 text-base font-roboto">
            <div className="w-full flex flex-col items-start justify-end px-8">
              <div className="w-full flex flex-row items-end justify-start gap-4">
                <div className="flex-1 rounded-md h-14 flex flex-col items-start justify-start">
                  <div className="w-full flex-1 rounded-t-md flex flex-col items-start justify-start">
                    <div className="w-full flex-1 rounded border border-gray-800 flex flex-row items-start justify-start">
                      <div className="w-12 h-12 flex flex-col items-center justify-center">
                        <div className="rounded-full overflow-hidden flex flex-row items-center justify-center">
                          <div className="flex flex-row items-center justify-center p-2">
                            <img className="w-6 relative h-6" alt="" src="Icon.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 h-12 flex flex-col items-start justify-center py-1">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[0.5px] leading-6">Căutare</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-14 flex flex-row items-start text-center text-sm text-white font-inter">
                  <div className="rounded-lg bg-orange-500 flex flex-row items-center justify-center py-[18px] px-7 gap-2">
                    <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
                    <div className="flex flex-row items-center">
                      <b className="relative leading-tight">Caută</b>
                    </div>
                    <div className="w-5 h-5 min-w-[10px] max-w-5 min-h-[20px] max-h-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-[1295px] bg-gray-200 border-b border-gray-200 h-10 flex flex-row items-start justify-start px-8 text-center text-gray-600">
            <div className="w-[60px] h-10 flex flex-row items-center justify-start gap-4">
              <b className="relative leading-tight">Nr.</b>
              <div className="relative tracking-tighter font-['Font_Awesome_5_Free']">sort</div>
            </div>
            <div className="w-[320px] h-10 flex flex-row items-center justify-start py-[10px] px-6 gap-4">
              <b className="relative leading-tight">Name</b>
              <div className="relative tracking-tighter font-['Font_Awesome_5_Free']">sort</div>
            </div>
            <div className="flex-1 h-10 flex flex-row items-center justify-start py-[10px] px-4 gap-4">
              <b className="relative leading-tight">Email</b>
              <div className="relative tracking-tighter font-['Font_Awesome_5_Free']">sort</div>
            </div>
            <div className="w-[160px] h-10 flex flex-row items-center justify-center py-[10px] px-4 gap-4">
              <b className="relative leading-tight">Dată înscriere</b>
              <div className="relative tracking-tighter font-['Font_Awesome_5_Free']">sort</div>
            </div>
            <div className="w-[160px] h-10 flex flex-row items-center justify-center py-[10px] px-4 gap-4">
              <b className="relative leading-tight">Status</b>
              <div className="relative tracking-tighter font-['Font_Awesome_5_Free']">sort</div>
            </div>
            <div className="w-20 h-10 flex flex-row items-center justify-end py-[10px]">
              <b className="relative leading-tight">Acțiuni</b>
            </div>
          </div>
          
          {/* Repeat this pattern for each participant */}
          <div className="w-full">
            <div className="w-full flex flex-row items-center">
              <div className="w-[60px] h-[60px] flex flex-row items-center justify-start p-2 text-center">
                <b className="relative leading-tight">1</b>
              </div>
              <div className="w-[320px] h-[60px] flex flex-row items-center justify-center py-0 px-6 gap-[10px] text-lg text-gray-50 font-['Font_Awesome_5_Free']">
                <div className="w-10 rounded-lg bg-gray-800 border border-gray-800 h-10 flex flex-row items-center justify-center">
                  <div className="relative hidden">user</div>
                  <img className="w-10 relative rounded-lg h-10 object-cover" alt="" src="Image Holder.png" />
                </div>
                <b className="flex-1 relative text-sm leading-tight flex items-center font-inter text-gray-600 h-[30.7px]">Jane Cooper</b>
              </div>
              <div className="flex-1 h-[60px] flex flex-row items-center justify-start">
                <div className="text-gray-600">lmcclure@hotmail.com</div>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center">
                <b className="relative leading-tight">3/11/2023</b>
              </div>
              <div className="w-[160px] h-[60px] flex flex-row items-center justify-center">
                <div className="flex flex-row items-center">
                  <div className="relative leading-tight">check</div>
                  <div className="text-gray-600">Disponibil</div>
                </div>
              </div>
              <div className="w-auto h-[60px] flex flex-row items-center justify-end">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="text-gray-600">ellipsis</div>
                  </div>
                </div>
                <div className="w-5 h-5"></div>
                <div className="w-5 h-5"></div>
                <div className="w-5 h-5"></div>
              </div>
            </div>
          </div>
          
          {/* You can add more participants by repeating the above structure */}
          
          {/* Pagination Footer */}
          <div className="w-full flex justify-between items-center p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="text-sm">Elements per page</div>
              <div className="flex items-center border rounded px-2 py-1">
                <div>5</div>
                <div className="ml-2">
                  <div className="text-gray-600">sort</div>
                </div>
              </div>
              <div className="text-sm">înregistrări pe pagină.</div>
            </div>
            
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div className="text-gray-600">angle-double-left</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div className="text-gray-600">angle-left</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-orange-500 text-white">
                <div>1</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div>2</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div>3</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div className="text-gray-600">angle-right</div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                <div className="text-gray-600">angle-double-right</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventView;