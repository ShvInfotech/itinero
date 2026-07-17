import React, { useRef, useState, useEffect } from "react";

const travelTools = [
  {
    id: 1,
    title: "Plan with AI",
    desc: "Get instant answer to your travel questions and personalized recommendations.",
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/arl6e5az_expires_30_days.png",
    lineColor: "#32A4FF",
    imgClass: "w-[273px] h-[276px] mb-5 mx-auto",
  },
  {
    id: 2,
    title: "Best Time to Travel",
    desc: "Find the perfect time to travel and save more on flights and hotels.",
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/kvv72n7k_expires_30_days.png",
    lineColor: "#E27023",
    imgClass: "w-[342px] h-[307px] mb-[5px] mx-auto",
  },
  {
    id: 3,
    title: "Explore More",
    desc: "Discover amazing destinations that fit your budget and travel style.",
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/fqkmdlfs_expires_30_days.png",
    lineColor: "#3BB5A7",
    imgClass: "w-[298px] h-[302px] mb-[7px] mx-auto",
  },
  {
    id: 4,
    title: "Trips Made Easy",
    desc: "Keep all your bookings, itineraries and reminders in one place",
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/lb42rjkf_expires_30_days.png",
    lineColor: "#36337B",
    imgClass: "w-[302px] h-[275px] mb-[21px] mx-auto",
  },
  {
    id: 5,
    title: "Global Community",
    desc: "Connect with other travelers, share tips and plan trips together.",
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/arl6e5az_expires_30_days.png", // reusing image for demo
    lineColor: "#9C27B0",
    imgClass: "w-[273px] h-[276px] mb-5 mx-auto",
  }
];

export default function AiTravelBuddy() {
  const scrollRef = useRef(null);
  const wrapperRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0];
      const gap = window.innerWidth < 768 ? 16 : 30;
      const scrollAmount = card ? card.clientWidth + gap : 300;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0];
      const gap = window.innerWidth < 768 ? 16 : 30;
      const scrollAmount = card ? card.clientWidth + gap : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col self-stretch max-w-[1604px] mb-[100px] mx-auto gap-[30px] md:gap-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center self-stretch px-4 md:px-[53px] gap-6 md:gap-0">
        <div className="flex flex-col shrink-0 items-start gap-2.5 w-full md:w-auto">
          <span className="text-[#001438] text-[32px] md:text-[50px] font-bold leading-tight">
            Your Journey, Our Priority
          </span>
          <span className="text-[#F97211] text-[16px] md:text-2xl font-medium w-full max-w-[595px]">
            Experience smarter travel planning with powerful tools, curated options & expert support.
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-3 self-end md:self-auto">
          <button
            onClick={scrollLeft}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={wrapperRef}>
        <div
          ref={scrollRef}
          className="flex items-stretch overflow-x-auto gap-4 md:gap-[30px] pb-[40px] pt-4 px-4 md:px-[53px] scroll-pl-4 md:scroll-pl-[53px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth snap-x snap-mandatory"
        >
          {travelTools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col shrink-0 bg-white py-7 rounded-[40px] hover:-translate-y-2 transition-transform cursor-pointer snap-start w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-20px)] xl:w-[calc(25%-22.5px)]"
              style={{
                boxShadow: "0px 19px 36px #0000001F",
              }}
            >
              <div className="h-[250px] md:h-[310px] flex items-center justify-center overflow-hidden">
                <img
                  src={tool.img}
                  className={`${tool.imgClass} max-h-[100%] w-auto object-contain`}
                  alt={tool.title}
                />
              </div>
              <div className="flex flex-col px-5 md:px-7 mt-2">
                <span className="text-black text-[20px] md:text-[26px] font-bold mb-3">{tool.title}</span>
                <span className="text-[#666666] text-[14px] md:text-[18px] font-medium leading-snug mb-5 h-auto md:h-[84px]">
                  {tool.desc}
                </span>
                <div
                  className="w-[30px] h-1 mb-5 rounded-[50px]"
                  style={{ backgroundColor: tool.lineColor }}
                />
                <div className="flex items-center gap-2 group">
                  <span className="text-[#F97211] text-[16px] md:text-[18px] font-semibold group-hover:underline">Learn More</span>
                  <svg className="w-4 h-4 text-[#F97211]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
