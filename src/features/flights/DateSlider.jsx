import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import styles from "./FlightsPage.module.css";
import PriceCalendarModal from "./PriceCalendarModal";

const getDynamicDates = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const dates = [];
  const today = new Date();
  
  // Generate starting from 2 days ago (-2) to 12 days in the future (total 15 days)
  for (let i = -2; i < 13; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    const dayName = daysOfWeek[d.getDay()];
    const dayVal = d.getDate();
    const monthName = months[d.getMonth()];
    
    // Deterministic price based on the date so it doesn't change every render
    const priceNum = 4200 + ((dayVal * 73) % 2500);
    const isGreen = priceNum < 5200;
    
    dates.push({
      dateStr: `${dayName}, ${dayVal} ${monthName}`,
      price: `₹${priceNum.toLocaleString('en-IN')}`,
      isGreen,
      isPastDate: i < 0
    });
  }
  return dates;
};

const DATES_MOCK = getDynamicDates();

export default function DateSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2); // Today (index 2) as default
  const [visibleCount, setVisibleCount] = useState(7);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleCount(3);
      } else if (width < 992) {
        setVisibleCount(5);
      } else {
        setVisibleCount(7);
      }
    };
    
    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, DATES_MOCK.length - visibleCount);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  const visibleDates = DATES_MOCK.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      <div className={styles["fl-content-wrapper"]}>
        <div className={styles["fl-sidebar-filters"]}>
          <div className={styles["fl-row11"]}>
            <div
              className={`${styles["fl-icon12"]} ${styles["date-nav-prev"]}`}
              onClick={handlePrev}
              style={{ 
                cursor: startIndex === 0 ? 'default' : 'pointer', 
                opacity: startIndex === 0 ? 0.5 : 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#001439" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
            
            {visibleDates.map((item, index) => {
              const actualIndex = startIndex + index;
              const isActive = actualIndex === activeIndex;
              
              return (
                <React.Fragment key={actualIndex}>
                  <div 
                    className={`${styles["fl-col7"]} ${styles["date-item"]}`} 
                    onClick={() => setActiveIndex(actualIndex)}
                  >
                    <span className={isActive ? styles["fl-text14"] : styles["fl-text12"]}>
                      {item.dateStr}
                    </span>
                    <span 
                      className={
                        isActive ? styles["fl-text15"] : 
                        item.isGreen ? styles["fl-text16"] : 
                        styles["fl-text13"]
                      }
                    >
                      {item.price}
                    </span>
                    {isActive && <div className={styles["active-date-border"]} />}
                  </div>
                  {index < visibleDates.length - 1 && (
                    <div className={styles["date-spacer"]}></div>
                  )}
                </React.Fragment>
              );
            })}

            <div
              className={`${styles["fl-icon13"]} ${styles["date-nav-next"]}`}
              onClick={handleNext}
              style={{ 
                cursor: startIndex >= maxIndex ? 'default' : 'pointer', 
                opacity: startIndex >= maxIndex ? 0.5 : 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#001439" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
        
        <button className={styles["fl-btn-row2"]} onClick={() => setIsCalendarOpen(true)}>
          <Calendar className={styles["fl-icon14"]} size={24} color="#000000" />
          <span className={styles["fl-text17"]}>
            {"View Price\nCalendar"}
          </span>
        </button>
      </div>

      <PriceCalendarModal 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
    </>
  );
}
