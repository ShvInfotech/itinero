import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import styles from "./FlightsPage.module.css";
import PriceCalendarModal from "./PriceCalendarModal";

const DATES_MOCK = [
  { dateStr: "Fri, 18 Jul", price: "₹5,812" },
  { dateStr: "Sat, 19 Jul", price: "₹5,290" },
  { dateStr: "Sun, 20 Jul", price: "₹5,925" },
  { dateStr: "Mon, 21 Jul", price: "₹5,762" },
  { dateStr: "Tue, 22 Jul", price: "₹6,349" },
  { dateStr: "Wed, 23 Jul", price: "₹4,290", isGreen: true },
  { dateStr: "Thu, 24 Jul", price: "₹6,227" },
  { dateStr: "Fri, 25 Jul", price: "₹5,500" },
  { dateStr: "Sat, 26 Jul", price: "₹5,100", isGreen: true },
  { dateStr: "Sun, 27 Jul", price: "₹6,000" },
  { dateStr: "Mon, 28 Jul", price: "₹4,900", isGreen: true },
  { dateStr: "Tue, 29 Jul", price: "₹6,500" },
];

export default function DateSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(3); // Mon, 21 Jul as default
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
              className={styles["fl-icon12"]}
              onClick={handlePrev}
              style={{ 
                cursor: startIndex === 0 ? 'default' : 'pointer', 
                opacity: startIndex === 0 ? 0.5 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid #E5E5E5', borderRadius: '50%',
                width: '38px', height: '38px', marginRight: '30px'
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
              className={styles["fl-icon13"]}
              onClick={handleNext}
              style={{ 
                cursor: startIndex >= maxIndex ? 'default' : 'pointer', 
                opacity: startIndex >= maxIndex ? 0.5 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid #E5E5E5', borderRadius: '50%',
                width: '38px', height: '38px', marginLeft: '30px'
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
