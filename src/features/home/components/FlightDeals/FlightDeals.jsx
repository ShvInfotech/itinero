import React, { useRef, useState, useEffect } from "react";
import ScrollReveal from "../../../../components/ScrollReveal";

const deals = [
  {
    id: 1,
    discount: "-20%",
    discountBg: "#7925C8",
    cardBg: "#FAF8FE",
    cardBorder: "#EFE7FF",
    lineBg: "#DDCCFF",
    btnBg: "#E9DFFD",
    btnText: "#7925C8",
    planeColor: "#7925C8",
    city: "Ahmedabad",
    from: "AMD",
    to: "DXB",
    destination: "Dubai",
    price: "₹12,450",
    originalPrice: "₹20,000",
    dates: "12 May - 20 May",
  },
  {
    id: 2,
    discount: "-20%",
    discountBg: "#08A082",
    cardBg: "#F9FCFD",
    cardBorder: "#B7DAC4",
    lineBg: "#DFF3F2",
    btnBg: "#DFF3F2",
    btnText: "#08A082",
    planeColor: "#08A082",
    city: "Ahmedabad",
    from: "AMD",
    to: "DXB",
    destination: "Dubai",
    price: "₹12,450",
    originalPrice: "₹20,000",
    dates: "12 May - 20 May",
  },
  {
    id: 3,
    discount: "-20%",
    discountBg: "#135DF3",
    cardBg: "#F8FAFD",
    cardBorder: "#B5CDFF",
    lineBg: "#E0E9FC",
    btnBg: "#E0E9FC",
    btnText: "#135DF3",
    planeColor: "#135DF3",
    city: "Ahmedabad",
    from: "AMD",
    to: "DXB",
    destination: "Dubai",
    price: "₹12,450",
    originalPrice: "₹20,000",
    dates: "12 May - 20 May",
  },
  {
    id: 4,
    discount: "-20%",
    discountBg: "#FB6D13",
    cardBg: "#FDFAF5",
    cardBorder: "#FDE5D3",
    lineBg: "#FDE5D3",
    btnBg: "#FB6D1326",
    btnText: "#FB6D13",
    planeColor: "#FB6D13",
    city: "Ahmedabad",
    from: "AMD",
    to: "DXB",
    destination: "Dubai",
    price: "₹12,450",
    originalPrice: "₹20,000",
    dates: "12 May - 20 May",
  },
  {
    id: 5,
    discount: "-20%",
    discountBg: "#135DF3",
    cardBg: "#F8FAFD",
    cardBorder: "#B5CDFF",
    lineBg: "#E0E9FC",
    btnBg: "#E0E9FC",
    btnText: "#135DF3",
    planeColor: "#135DF3",
    city: "Ahmedabad",
    from: "AMD",
    to: "DXB",
    destination: "Dubai",
    price: "₹12,450",
    originalPrice: "₹20,000",
    dates: "12 May - 20 May",
  },
  {
    id: 6,
    discount: "-15%",
    discountBg: "#7925C8",
    cardBg: "#FAF8FE",
    cardBorder: "#EFE7FF",
    lineBg: "#DDCCFF",
    btnBg: "#E9DFFD",
    btnText: "#7925C8",
    planeColor: "#7925C8",
    city: "Mumbai",
    from: "BOM",
    to: "LHR",
    destination: "London",
    price: "₹45,200",
    originalPrice: "₹55,000",
    dates: "15 Jun - 30 Jun",
  },
  {
    id: 7,
    discount: "-10%",
    discountBg: "#08A082",
    cardBg: "#F9FCFD",
    cardBorder: "#B7DAC4",
    lineBg: "#DFF3F2",
    btnBg: "#DFF3F2",
    btnText: "#08A082",
    planeColor: "#08A082",
    city: "Delhi",
    from: "DEL",
    to: "JFK",
    destination: "New York",
    price: "₹58,999",
    originalPrice: "₹65,000",
    dates: "20 Jul - 5 Aug",
  },
];

export default function FlightDeals() {
  const scrollRef = useRef(null);
  const wrapperRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isLaptop = window.innerWidth >= 1024 && window.innerWidth < 1280;
        const isDesktop = window.innerWidth >= 1280 && window.innerWidth < 1536;
        
        const CARDS = isMobile ? 1.2 : isTablet ? 2.5 : isLaptop ? 3 : isDesktop ? 4 : 5;
        const PADDING = isMobile ? 16 * 2 : 53 * 2;
        const GAP = 20;

        const w = wrapperRef.current.clientWidth;
        const width = (w - PADDING - GAP * (Math.ceil(CARDS) - 1)) / CARDS;
        setCardWidth(Math.floor(width));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col self-stretch max-w-[1604px] mb-16 md:mb-[120px] mx-auto gap-6 md:gap-7">
      {/* Header */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center self-stretch px-4 md:px-[53px]">
        <div className="flex flex-col shrink-0 items-start gap-1 md:gap-[7px] mb-4 md:mb-0">
          <span className="text-[#001438] text-[28px] md:text-[50px] font-bold leading-tight">
            Flight Deals Today
          </span>
          <span className="text-[#F97211] text-[16px] md:text-2xl font-medium">
            Grab the best flight deals before they're gone!
          </span>
        </div>
        <div className="flex w-full md:w-auto shrink-0 items-center justify-between md:justify-end gap-2 md:gap-3">
          <span className="text-black text-[16px] md:text-xl font-medium cursor-pointer hover:underline mr-1 md:mr-2">
            View All Deals
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </ScrollReveal>

      {/* Carousel */}
      <ScrollReveal delay={0.2}>
        <div className="overflow-hidden" ref={wrapperRef}>
          <div
          ref={scrollRef}
          className="flex items-stretch overflow-x-auto gap-5 pb-4 px-4 md:px-[53px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="flex flex-col shrink-0 py-4 rounded-[23px] border border-solid"
              style={{
                width: cardWidth || "calc(20% - 16px)",
                backgroundColor: deal.cardBg,
                borderColor: deal.cardBorder,
              }}
            >
              {/* Top row: badge + plane icon */}
              <div className="flex justify-between items-start mb-1 px-4">
                <div className="flex flex-col items-start gap-[9px]">
                  {/* Discount badge */}
                  <span
                    className="text-white text-[13px] font-bold py-0.5 px-2 rounded-[5px]"
                    style={{ backgroundColor: deal.discountBg }}
                  >
                    {deal.discount}
                  </span>
                  {/* City name */}
                  <span className="text-black text-[18px] md:text-[22px] font-bold">{deal.city}</span>
                </div>
                {/* Plane SVG */}
                <svg
                  className="w-[40px] h-[40px] mt-1 opacity-20"
                  fill={deal.planeColor}
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>

              {/* Route: AMD → DXB */}
              <div className="flex items-center mb-[5px] px-4 gap-2">
                <span className="text-[#666666] text-[14px] font-medium">{deal.from}</span>
                <svg className="w-4 h-4" fill="none" stroke={deal.planeColor} strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="text-[#666666] text-[14px] font-medium">{deal.to}</span>
              </div>

              {/* Destination */}
              <span className="text-[#666666] text-[14px] font-normal mb-2 px-4">{deal.destination}</span>

              {/* Divider line */}
              <div className="flex items-center mb-3 px-4">
                <div className="h-px w-[80%]" style={{ backgroundColor: deal.lineBg }} />
                <svg
                  className="w-4 h-4 rotate-90 -ml-2"
                  fill={deal.planeColor}
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>

              {/* Price */}
              <div className="flex flex-col items-start mb-4 px-4 gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-black text-[22px] md:text-[26px] font-bold">{deal.price}</span>
                  <span className="text-[#999] text-[12px] md:text-[13px] font-normal line-through">{deal.originalPrice}</span>
                </div>
                <span className="text-[#666666] text-[12px] md:text-[13px] font-normal">{deal.dates}</span>
              </div>

              {/* View Deal button */}
              <button
                className="flex items-center justify-center mx-4 py-[9px] rounded-[11px] border-0 font-semibold text-[14px] transition-opacity hover:opacity-80"
                style={{ backgroundColor: deal.btnBg, color: deal.btnText }}
                onClick={() => alert("View Deal clicked!")}
              >
                View Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);
}
