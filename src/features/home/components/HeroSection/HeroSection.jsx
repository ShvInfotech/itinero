import React, { useState, useRef, useEffect } from "react";
import { AIRPORTS } from "../../../../constants";
import ScrollReveal from "../../../../components/ScrollReveal";

export default function HeroSection() {
  const [from, setFrom] = useState(AIRPORTS.find(a => a.code === 'JFK') || AIRPORTS[0]);
  const [to, setTo] = useState(AIRPORTS.find(a => a.code === 'LHR') || AIRPORTS[1]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date()); // real current month
  
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  
  const [tripType, setTripType] = useState("Return");
  const [specialFare, setSpecialFare] = useState("");
  
  const dropdownRef = useRef(null);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAirports = AIRPORTS.filter(
    (airport) =>
      airport.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (airport.state && airport.state.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSwap = (e) => {
    e.stopPropagation();
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const renderCalendar = (monthOffset) => {
    const targetDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, 1);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const monthName = targetDate.toLocaleDateString("en-US", { month: "long" });
    const today = new Date();
    today.setHours(0,0,0,0);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const isPast = dateObj < today;
      let isSelected = false;
      let isBetween = false;
      
      if (departDate && dateObj.getTime() === departDate.getTime()) isSelected = true;
      if (returnDate && dateObj.getTime() === returnDate.getTime()) isSelected = true;
      
      if (departDate && returnDate && dateObj > departDate && dateObj < returnDate) {
        isBetween = true;
      }
      
      const isDisabled = isPast || (activeDropdown === 'return' && departDate && dateObj < departDate);

      days.push(
        <div 
          key={d} 
          onClick={(e) => {
             e.stopPropagation();
             if (isDisabled) return;
             if (activeDropdown === 'depart') {
               setDepartDate(dateObj);
               if (returnDate && dateObj > returnDate) setReturnDate(null);
               setActiveDropdown('return');
             } else if (activeDropdown === 'return') {
               setReturnDate(dateObj);
               setActiveDropdown('travelers');
             }
          }}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-[15px] font-bold transition-colors select-none
            ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 cursor-pointer hover:bg-gray-100'}
            ${isSelected ? 'bg-gray-900 text-white hover:bg-gray-800' : ''}
            ${isBetween && !isSelected ? 'bg-gray-100' : ''}
          `}
        >
          {d}
        </div>
      );
    }

    return (
      <div className="flex-1 px-4">
        <div className="flex items-center justify-between mb-6">
          {monthOffset === 0 ? (
            <button onClick={(e) => { e.stopPropagation(); setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)); }} className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
          ) : <div className="w-7"></div>}
          
          <span className="font-bold text-[17px] text-gray-900">{monthName} {year}</span>
          
          {monthOffset === 1 ? (
             <button onClick={(e) => { e.stopPropagation(); setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)); }} className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          ) : <div className="w-7"></div>}
        </div>
        
        <div className="grid grid-cols-7 gap-y-2 mb-2">
          {['S','M','T','W','T','F','S'].map((day, i) => (
            <div key={i} className="w-10 h-10 flex items-center justify-center font-bold text-gray-900 text-[15px]">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2">
          {days}
        </div>
      </div>
    );
  };

  const datePickerUI = (
    <div className="absolute top-[65px] left-0 md:left-[-30px] w-[calc(100vw-32px)] md:w-[780px] bg-white rounded-[24px] shadow-2xl z-50 p-4 md:p-6 cursor-default max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 pb-4 border-b border-gray-100 gap-3 md:gap-0">
        <div className="flex items-center gap-6">
          <span className="text-[13px] font-bold text-gray-900 border-b-[3px] border-gray-900 pb-1 cursor-pointer">DATES</span>
          <span className="text-[13px] font-bold text-gray-500 pb-1 cursor-pointer hover:text-gray-900 transition-colors">WEEKEND</span>
          <span className="text-[13px] font-bold text-gray-500 pb-1 cursor-pointer hover:text-gray-900 transition-colors">MONTH</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1 cursor-pointer group/dep">
            <span className="text-[13px] font-bold text-gray-900 group-hover/dep:text-blue-600 transition-colors">Departure</span>
            <span className="text-[13px] text-blue-500">exact</span>
            <svg className="w-4 h-4 text-gray-900 group-hover/dep:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group/ret">
            <span className="text-[13px] font-bold text-gray-900 group-hover/ret:text-blue-600 transition-colors">Return</span>
            <span className="text-[13px] text-blue-500">exact</span>
            <svg className="w-4 h-4 text-gray-900 group-hover/ret:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {renderCalendar(0)}
        <div className="hidden md:block">{renderCalendar(1)}</div>
      </div>
    </div>
  );

  const travelersUI = (
    <div className="absolute top-[65px] right-0 w-[calc(100vw-32px)] md:w-[380px] bg-white rounded-[24px] shadow-2xl z-50 p-4 md:p-6 cursor-default" onClick={e => e.stopPropagation()}>
      <div className="mb-2">
        <h3 className="text-[17px] font-bold text-gray-900 mb-4">Travellers</h3>
        
        {/* Adults */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[15px] font-medium text-gray-900">Adults <span className="text-gray-400 font-normal">18+</span></div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setAdults(Math.max(1, adults - 1))} className={`w-8 h-8 rounded-lg border flex items-center justify-center cursor-pointer ${adults <= 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>-</button>
            <span className="w-4 text-center font-bold text-[15px] text-gray-900">{adults}</span>
            <button onClick={() => setAdults(Math.min(9, adults + 1))} className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 flex items-center justify-center cursor-pointer hover:border-gray-400">+</button>
          </div>
        </div>
        
        {/* Children */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[15px] font-medium text-gray-900">Children <span className="text-gray-400 font-normal">0-17</span></div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setChildren(Math.max(0, children - 1))} className={`w-8 h-8 rounded-lg border flex items-center justify-center cursor-pointer ${children <= 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>-</button>
            <span className="w-4 text-center font-bold text-[15px] text-gray-900">{children}</span>
            <button onClick={() => setChildren(Math.min(9, children + 1))} className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 flex items-center justify-center cursor-pointer hover:border-gray-400">+</button>
          </div>
        </div>
        
        {/* Infants */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-[15px] font-medium text-gray-900">Infants on lap <span className="text-gray-400 font-normal">under 2</span></div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setInfants(Math.max(0, infants - 1))} className={`w-8 h-8 rounded-lg border flex items-center justify-center cursor-pointer ${infants <= 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>-</button>
            <span className="w-4 text-center font-bold text-[15px] text-gray-900">{infants}</span>
            <button onClick={() => setInfants(Math.min(adults, infants + 1))} className={`w-8 h-8 rounded-lg border flex items-center justify-center cursor-pointer ${infants >= adults ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>+</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-[17px] font-bold text-gray-900 mb-4">Cabin class</h3>
        <div className="flex flex-wrap gap-2">
          {["Economy", "Premium Economy", "Business", "First"].map(c => (
            <button 
              key={c}
              onClick={() => setCabinClass(c)}
              className={`px-4 py-2 rounded-xl border text-[15px] transition-colors cursor-pointer ${cabinClass === c ? 'border-gray-900 text-gray-900 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-start self-stretch bg-cover bg-center pt-[40px] md:pt-[84px] mx-[8px] md:mx-[15px] rounded-[24px] overflow-hidden"
      style={{ backgroundImage: "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/6pn63j0i_expires_30_days.png)" }}
    >
      <ScrollReveal delay={0.1} className="w-full">
        <div className="flex flex-col items-center justify-center self-stretch mb-[20px] md:mb-[45px] text-center w-full px-4 md:px-0">
          <span className="text-white text-[32px] sm:text-[44px] lg:text-[50px] xl:text-[70px] font-bold leading-tight">Discover more <span className="text-orange-500">everywhere</span></span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="w-full">
        <div className="flex flex-col items-center self-stretch mb-[60px] md:mb-[120px] xl:mb-[220px]">
          <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-0 px-4 md:px-0">
          <button className="flex shrink-0 items-center bg-[#FFFFFF1A] text-left py-2 xl:py-3 px-4 xl:px-[26px] mr-0 xl:mr-[70px] gap-2 xl:gap-[13px] rounded-[80px] border-0">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/wwpevqpz_expires_30_days.png" className="w-8 h-8 xl:w-11 xl:h-11 object-fill" alt="" />
            <span className="text-white text-[18px] lg:text-[24px] xl:text-[29px]">Flights</span>
          </button>
          <div className="flex items-center mr-0 xl:mr-[73px]">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/ey7f1g0t_expires_30_days.png" className="w-8 h-8 xl:w-[45px] xl:h-11 mr-2 xl:mr-[13px] object-fill" alt="" />
            <span className="text-white text-[18px] lg:text-[24px] xl:text-[29px]">Hotels</span>
          </div>
          <div className="flex shrink-0 items-center gap-2 xl:gap-[13px]">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/d4zzs6iu_expires_30_days.png" className="w-8 h-8 xl:w-[45px] xl:h-11 object-fill" alt="" />
            <span className="text-white text-[18px] lg:text-[24px] xl:text-[29px]">Packages</span>
          </div>
        </div>
        </div>
      </ScrollReveal>

      {/* Filter pills */}
      <ScrollReveal delay={0.3} className="w-full">
        <div className="flex items-center mb-4 max-w-[1600px] w-full mx-auto gap-3 px-4 md:px-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="relative">
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'tripType' ? null : 'tripType'); }}
            className="flex items-center bg-[#FFFFFF1A] backdrop-blur-sm py-[7px] px-4 gap-2 rounded-full border border-white/10 cursor-pointer hover:bg-[#FFFFFF26] transition-colors"
          >
            <span className="text-white text-sm font-medium">{tripType}</span>
            <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          {activeDropdown === 'tripType' && (
            <div className="absolute top-[110%] left-0 w-[160px] bg-white rounded-xl shadow-2xl z-50 py-2 cursor-default" onClick={e => e.stopPropagation()}>
              {['Return', 'One way', 'Multi-way'].map(type => (
                <div 
                  key={type} 
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${tripType === type ? 'text-orange-500 font-bold bg-orange-50/50' : 'text-gray-700'}`}
                  onClick={() => { setTripType(type); setActiveDropdown(null); }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'specialFare' ? null : 'specialFare'); }}
            className="flex items-center bg-[#FFFFFF1A] backdrop-blur-sm py-[7px] px-4 gap-2 rounded-full border border-white/10 cursor-pointer hover:bg-[#FFFFFF26] transition-colors"
          >
            <span className="text-white text-sm font-medium">{specialFare || "Special Fares"}</span>
            <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>

          {activeDropdown === 'specialFare' && (
            <div className="absolute top-[110%] left-0 w-[180px] bg-white rounded-xl shadow-2xl z-50 py-2 cursor-default" onClick={e => e.stopPropagation()}>
              {['Student', 'Senior Citizen', 'Armed Forces'].map(fare => (
                <div 
                  key={fare} 
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${specialFare === fare ? 'text-orange-500 font-bold bg-orange-50/50' : 'text-gray-700'}`}
                  onClick={() => { 
                     // Toggle off if clicking the same one again
                     setSpecialFare(specialFare === fare ? "" : fare); 
                     setActiveDropdown(null); 
                  }}
                >
                  {fare}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </ScrollReveal>

      {/* Search bar */}
      <ScrollReveal delay={0.4} className="w-full">
        <div ref={dropdownRef} className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between px-4 xl:px-8 max-w-[1600px] w-full xl:h-[98px] mb-[40px] xl:mb-[90px] mx-auto rounded-[20px] xl:rounded-[25px] border border-[#525252] py-4 xl:py-0 gap-4 xl:gap-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)' }}>

        {/* From */}
        <div className="relative flex items-center gap-3 xl:gap-[20px] cursor-pointer group" onClick={() => { if (activeDropdown !== 'from') { setActiveDropdown('from'); setSearchQuery(""); } }}>
          <svg className="w-6 h-6 xl:w-[35px] xl:h-[35px] text-white shrink-0 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"/>
          </svg>
          <div className="flex-1 xl:w-[180px]">
            <span className="block text-white text-[17px] pb-[5px] font-medium leading-tight">From</span>
            {activeDropdown === 'from' ? (
              <input
                autoFocus
                type="text"
                className="block text-white text-[16px] font-medium leading-tight mt-0.5 bg-transparent border-none outline-none w-full placeholder:text-white/30"
                placeholder="Search airport..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            ) : (
              <span className="block text-white text-[16px] font-medium leading-tight mt-0.5 truncate">{from ? `${from.city} (${from.code})` : "Select Origin"}</span>
            )}
          </div>
          
          {/* Dropdown UI */}
          {activeDropdown === 'from' && (
            <div className="absolute top-[65px] left-0 md:-left-6 w-[calc(100vw-32px)] md:w-[420px] bg-white rounded-[24px] shadow-2xl z-50 max-h-[380px] overflow-y-auto py-2 border border-gray-100 cursor-default [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" onClick={e => e.stopPropagation()}>
              {filteredAirports.length > 0 ? (
                filteredAirports.map(airport => (
                  <div
                    key={airport.id}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                    onClick={() => {
                      setFrom(airport);
                      setActiveDropdown('to');
                      setSearchQuery("");
                    }}
                  >
                    <div className="w-[44px] h-[44px] shrink-0 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-bold text-[15px]">{airport.city}, {airport.state}</span>
                        <span className="text-gray-400 text-[14px]">{airport.code}</span>
                      </div>
                      <div className="text-gray-500 text-[13px]">{airport.name}</div>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${from?.id === airport.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}>
                      {from?.id === airport.id && (
                        <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-5 py-6 text-gray-500 text-sm text-center">No airports found</div>
              )}
            </div>
          )}
        </div>

        {/* Swap */}
        <button onClick={handleSwap} className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 cursor-pointer hover:bg-white/[0.12] transition-colors shrink-0 self-center xl:self-auto rotate-90 xl:rotate-0">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Going To */}
        <div className="relative flex items-center gap-3 xl:gap-[20px] cursor-pointer group" onClick={() => { if (activeDropdown !== 'to') { setActiveDropdown('to'); setSearchQuery(""); } }}>
          <svg className="w-6 h-6 xl:w-[35px] xl:h-[35px] text-white shrink-0 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.5 19h19v2h-19v-2zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l6.91 1.86z"/>
          </svg>
          <div className="flex-1 xl:w-[180px]">
            <span className="block text-white text-[17px] pb-[5px] font-medium leading-tight">Going To</span>
            {activeDropdown === 'to' ? (
              <input
                autoFocus
                type="text"
                className="block text-white text-[16px] font-medium leading-tight mt-0.5 bg-transparent border-none outline-none w-full placeholder:text-white/30"
                placeholder="Search airport..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            ) : (
              <span className="block text-white text-[16px] font-medium leading-tight mt-0.5 truncate">{to ? `${to.city} (${to.code})` : "Select Destination"}</span>
            )}
          </div>

          {/* Dropdown UI */}
          {activeDropdown === 'to' && (
            <div className="absolute top-[65px] left-0 md:-left-6 w-[calc(100vw-32px)] md:w-[420px] bg-white rounded-[24px] shadow-2xl z-50 max-h-[380px] overflow-y-auto py-2 border border-gray-100 cursor-default [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" onClick={e => e.stopPropagation()}>
              {filteredAirports.length > 0 ? (
                filteredAirports.map(airport => (
                  <div
                    key={airport.id}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                    onClick={() => {
                      setTo(airport);
                      setActiveDropdown('depart');
                      setSearchQuery("");
                    }}
                  >
                    <div className="w-[44px] h-[44px] shrink-0 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.5 19h19v2h-19v-2zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l6.91 1.86z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-bold text-[15px]">{airport.city}, {airport.state}</span>
                        <span className="text-gray-400 text-[14px]">{airport.code}</span>
                      </div>
                      <div className="text-gray-500 text-[13px]">{airport.name}</div>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${to?.id === airport.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}>
                      {to?.id === airport.id && (
                        <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-5 py-6 text-gray-500 text-sm text-center">No airports found</div>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden xl:block w-px h-10 bg-white/[0.12] shrink-0" />

        {/* Depart */}
        <div className="flex items-center gap-4 xl:hidden w-full">
          <div className="relative flex-1 flex items-center gap-3 cursor-pointer group rounded-xl bg-white/[0.06] p-3" onClick={() => setActiveDropdown('depart')}>
            <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" /></svg>
            <div><span className="block text-white text-[14px] font-medium">Depart</span><span className="block text-white/70 text-[13px]">{formatDate(departDate) || "Add Date"}</span></div>
            {(activeDropdown === 'depart' || activeDropdown === 'return') && datePickerUI}
          </div>
          <div className="relative flex-1 flex items-center gap-3 cursor-pointer group rounded-xl bg-white/[0.06] p-3" onClick={() => setActiveDropdown('return')}>
            <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" /></svg>
            <div><span className="block text-white text-[14px] font-medium">Return</span><span className="block text-white/70 text-[13px]">{formatDate(returnDate) || "Add Date"}</span></div>
          </div>
        </div>

        {/* Desktop Depart */}
        <div className="hidden xl:relative xl:flex items-center gap-[20px] cursor-pointer group" onClick={() => setActiveDropdown('depart')}>
          <svg className="w-[35px] h-[35px] text-white shrink-0 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
          </svg>
          <div className="w-[120px]">
            <span className="block text-white text-[17px] pb-[5px] font-medium leading-tight">Depart</span>
            <span className="block text-white text-[16px] font-medium leading-tight mt-0.5 truncate">{formatDate(departDate) || "Add Date"}</span>
          </div>
          {(activeDropdown === 'depart' || activeDropdown === 'return') && datePickerUI}
        </div>

        {/* Divider */}
        <div className="hidden xl:block w-px h-10 bg-white/[0.12] shrink-0" />

        {/* Return - Desktop only */}
        <div className="hidden xl:flex items-center gap-[20px] cursor-pointer group" onClick={() => setActiveDropdown('return')}>
          <svg className="w-[35px] h-[35px] text-white shrink-0 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
          </svg>
          <div className="w-[120px]">
            <span className="block text-white text-[17px] pb-[5px] font-medium leading-tight">Return</span>
            <span className="block text-white text-[16px] font-medium leading-tight mt-0.5 truncate">{formatDate(returnDate) || "Add Date"}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden xl:block w-px h-10 bg-white/[0.12] shrink-0" />

        {/* Travelers & Class */}
        <div className="relative flex items-center gap-3 xl:gap-[20px] cursor-pointer group" onClick={() => setActiveDropdown('travelers')}>
          <svg className="w-6 h-6 xl:w-[35px] xl:h-[35px] text-white shrink-0 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
          </svg>
          <div>
            <span className="block text-white text-[14px] xl:text-[17px] pb-[5px] font-medium leading-tight">Travelers &amp; Class</span>
            <span className="block text-white text-[13px] xl:text-[16px] font-medium leading-tight mt-0.5">{adults + children + infants} Pax, {cabinClass}</span>
          </div>
          
          {activeDropdown === 'travelers' && travelersUI}
        </div>

        {/* Search button */}
        <button className="flex items-center justify-center w-full xl:w-auto bg-gradient-to-r from-[#F97316] to-[#EA580C] py-3 px-6 gap-2 rounded-[18px] border-0 cursor-pointer hover:from-[#FB923C] hover:to-[#F97316] transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.6)]">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-[16px] xl:text-[19px] font-semibold">Search</span>
        </button>

      </div>
      </ScrollReveal>
    </div>
  );
}
