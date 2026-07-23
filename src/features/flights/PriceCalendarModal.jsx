import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, Calendar } from 'lucide-react';
import styles from './PriceCalendarModal.module.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function PriceCalendarModal({ isOpen, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1)); // Default to July 2025
  const [selectedDateStr, setSelectedDateStr] = useState("2025-6-21"); // Default selected date

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get day of week for the 1st of the month (0 = Sun, 1 = Mon, etc.)
    let startDay = new Date(year, month, 1).getDay();
    // Convert to Monday = 0, Sunday = 6 index for our grid
    startDay = startDay === 0 ? 6 : startDay - 1;

    const mockDays = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const dateStr = `${year}-${month}-${day}`;
      let price = `₹ ${5000 + Math.floor(Math.random() * 2000)}`;
      let status = 'normal';
      
      // Let's hardcode some patterns so it looks like the screenshot
      if (day % 7 === 4 || day % 7 === 5) { status = 'green'; }
      if (day % 7 === 6) { status = 'red'; }
      if (day === 17) { status = 'cheapest'; }

      // Some explicit ones for July 2025 matching the screenshot
      if (month === 6 && year === 2025) {
        if (day === 1) price = '₹ 6,245';
        if (day === 2) price = '₹ 6,180';
        if (day === 3) price = '₹ 5912';
        if (day === 4) { price = '₹ 5648'; status = 'green'; }
        if (day === 5) price = '₹ 6389';
        if (day === 6) { price = '₹ 6742'; status = 'red'; }
        if (day === 17) { price = '₹ 3982'; status = 'cheapest'; }
        if (day === 21) { price = '₹ 5762'; } // Selection handled via state now
      }

      return { day, dateStr, price, status };
    });

    return { daysInMonth, startDay, mockDays };
  }, [currentDate]);

  if (!isOpen) return null;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    setCurrentDate(new Date(currentDate.getFullYear(), newMonth, 1));
  };

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div className={styles["modal-container"]} onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className={styles["modal-header"]}>
          <button className={styles["modal-close"]} onClick={onClose}>
            <X size={18} />
          </button>
          
          <div className={styles["header-top"]}>
            <div className={styles["header-icon"]}>
              <Calendar size={20} color="#FFF" />
            </div>
            <div>
              <h2 className={styles["header-title"]}>Price Calendar</h2>
              <p className={styles["header-subtitle"]}>Price are per person for Economy class</p>
            </div>
          </div>

          <div className={styles["header-route-bar"]}>
            <div className={styles["route-info"]}>
              <div className={styles["route-cities"]}>
                STV <span style={{color: '#888', fontWeight: '400'}}>→</span> BOM
              </div>
              <div className={styles["route-details"]}>
                One Way &nbsp;•&nbsp; 1 Traveler &nbsp;•&nbsp; Economy
              </div>
            </div>

            <div className={styles["month-selector"]}>
              <div className={styles["month-dropdown"]}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                <ChevronDown size={16} color="#888" />
                <select 
                  className={styles["month-select"]} 
                  value={currentDate.getMonth()}
                  onChange={handleMonthChange}
                >
                  {MONTHS.map((m, idx) => (
                    <option key={m} value={idx}>{m} {currentDate.getFullYear()}</option>
                  ))}
                </select>
              </div>
              <button className={styles["month-nav-btn"]} onClick={handlePrevMonth}><ChevronLeft size={20} /></button>
              <button className={styles["month-nav-btn"]} onClick={handleNextMonth}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        {/* Calendar Body */}
        <div className={styles["modal-body"]}>
          <div className={styles["calendar-wrapper"]}>
            {/* Days Header */}
            <div className={styles["calendar-header"]}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
                <div key={d} className={styles["day-name"]}>{d}</div>
              ))}
            </div>

            {/* Grid */}
            <div className={styles["calendar-grid"]}>
              {Array.from({ length: calendarData.startDay }).map((_, i) => (
                <div key={`empty-${i}`} className={`${styles["calendar-cell"]} ${styles["empty"]}`} />
              ))}
              
              {calendarData.mockDays.map((data, i) => {
                const { day, dateStr, price, status } = data;
                const isSelected = selectedDateStr === dateStr;
                const finalStatus = isSelected ? 'active' : status;
                
                return (
                  <div 
                    key={day} 
                    className={`${styles["calendar-cell"]} ${styles[finalStatus]}`}
                    onClick={() => setSelectedDateStr(dateStr)}
                  >
                    {status === 'cheapest' && (
                      <span className={`${styles["badge"]} ${isSelected ? styles["badge-orange"] : styles["badge-green"]}`}>
                        Cheapest
                      </span>
                    )}
                    <div className={styles["day-number"]}>{day}</div>
                    <div className={`${styles["price-text"]} ${isSelected ? '' : (styles[finalStatus] || '')}`}>{price}</div>
                  </div>
                );
              })}
              
              {/* Fill remaining cells if any to complete the grid */}
              {Array.from({ length: 42 - (calendarData.startDay + calendarData.daysInMonth) }).map((_, i) => (
                <div key={`empty-end-${i}`} className={`${styles["calendar-cell"]} ${styles["empty"]}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles["modal-footer"]}>
          <div className={styles["legend"]}>
            <div className={styles["legend-item"]}>
              <div className={styles["legend-dot"]} style={{background: '#22C55E'}}></div>
              ₹ 0 - ₹ 4,500
            </div>
            <div className={styles["legend-item"]}>
              <div className={styles["legend-dot"]} style={{background: '#86EFAC'}}></div>
              ₹ 4,501 - ₹ 6,000
            </div>
            <div className={styles["legend-item"]}>
              <div className={styles["legend-dot"]} style={{background: '#F97211'}}></div>
              ₹ 6,001 - ₹ 8,000
            </div>
            <div className={styles["legend-item"]}>
              <div className={styles["legend-dot"]} style={{background: '#EF4444'}}></div>
              ₹ 8,001 +
            </div>
          </div>
          
          <button className={styles["apply-btn"]} onClick={onClose}>Apply</button>
        </div>

      </div>
    </div>
  );
}
