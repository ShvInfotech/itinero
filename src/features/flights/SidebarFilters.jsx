import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FlightsPage.module.css';

const AIRLINES = [
  { name: 'Emirates', count: 45 },
  { name: 'Qatar Airways', count: 38 },
  { name: 'Lufthansa', count: 32 },
  { name: 'Air India', count: 28 },
  { name: 'British Airways', count: 24 }
];

function FilterAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles["filter-section"]}>
      <div className={styles["filter-header"]} onClick={() => setIsOpen(!isOpen)}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#001439' }}>{title}</span>
        {isOpen ? <ChevronUp size={16} color="#888" /> : <ChevronDown size={16} color="#888" />}
      </div>
      {isOpen && <div style={{ marginTop: 15 }}>{children}</div>}
    </div>
  );
}

export default function SidebarFilters() {
  const [minPrice, setMinPrice] = useState(280);
  const [maxPrice, setMaxPrice] = useState(1250);
  const [airlineSearch, setAirlineSearch] = useState('');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState(['Direct']); // Default checked
  const [selectedDepartureTimes, setSelectedDepartureTimes] = useState([]);
  const [selectedArrivalTimes, setSelectedArrivalTimes] = useState([]);
  const [duration, setDuration] = useState(15);
  const [refundableOnly, setRefundableOnly] = useState(false);

  const handleClearAll = () => {
    setMinPrice(200);
    setMaxPrice(1500);
    setAirlineSearch('');
    setSelectedAirlines([]);
    setSelectedStops([]);
    setSelectedDepartureTimes([]);
    setSelectedArrivalTimes([]);
    setDuration(24);
    setRefundableOnly(false);
  };

  const handleMinChange = (val) => {
    setMinPrice(Math.min(val, maxPrice - 50));
  };

  const handleMaxChange = (val) => {
    setMaxPrice(Math.max(val, minPrice + 50));
  };

  const toggleAirline = (name) => {
    setSelectedAirlines(prev => 
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    );
  };

  const toggleStop = (stop) => {
    setSelectedStops(prev => 
      prev.includes(stop) ? prev.filter(s => s !== stop) : [...prev, stop]
    );
  };

  const toggleDepartureTime = (time) => {
    setSelectedDepartureTimes(prev => 
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const toggleArrivalTime = (time) => {
    setSelectedArrivalTimes(prev => 
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const minPercent = ((minPrice - 200) / 1300) * 100;
  const maxPercent = ((maxPrice - 200) / 1300) * 100;

  return (
    <div className={styles["sidebar-card"]} style={{ marginBottom: 20 }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 18, color: '#001439', fontWeight: 700 }}>Filters</h2>
        <span 
          className={styles["filter-header-clear"]} 
          onClick={handleClearAll}
          style={{ cursor: 'pointer', transition: 'color 0.2s' }}
        >
          Clear All
        </span>
      </div>
      
      {/* Price Range */}
      <div className={styles["filter-section"]} style={{ borderTop: '1px solid #EBEBEB', paddingTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#001439' }}>Price Range</span>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#001439' }}>${minPrice} - ${maxPrice}</span>
        </div>
        
        {/* Dual Inputs for exact numbers */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 15 }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 11, color: '#888', fontWeight: 600, display: 'block', marginBottom: 4 }}>Min</label>
            <input 
              type="number" 
              min="200" 
              max="1500" 
              value={minPrice} 
              onChange={(e) => handleMinChange(Number(e.target.value))}
              style={{ width: '100%', padding: '6px 10px', borderRadius: 8, border: '1px solid #EBEBEB', fontSize: 13, fontWeight: 600, color: '#001439' }} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 11, color: '#888', fontWeight: 600, display: 'block', marginBottom: 4 }}>Max</label>
            <input 
              type="number" 
              min="200" 
              max="1500" 
              value={maxPrice} 
              onChange={(e) => handleMaxChange(Number(e.target.value))}
              style={{ width: '100%', padding: '6px 10px', borderRadius: 8, border: '1px solid #EBEBEB', fontSize: 13, fontWeight: 600, color: '#001439' }} 
            />
          </div>
        </div>

        <div className={styles["custom-slider-container"]} style={{ height: 20 }}>
          <div className={styles["custom-slider-track"]}></div>
          <div 
            className={styles["custom-slider-fill"]} 
            style={{ 
              left: `${minPercent}%`, 
              width: `${maxPercent - minPercent}%` 
            }}
          ></div>
          <div className={styles["custom-slider-thumb"]} style={{ left: `${minPercent}%` }}></div>
          <div className={styles["custom-slider-thumb"]} style={{ left: `${maxPercent}%` }}></div>
          
          <input 
            type="range" 
            min="200" 
            max="1500" 
            value={minPrice}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className={`${styles["custom-slider-input"]} ${styles["dual-slider-input"]}`}
            style={{ zIndex: minPrice > 850 ? 5 : 4 }}
          />
          <input 
            type="range" 
            min="200" 
            max="1500" 
            value={maxPrice}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className={`${styles["custom-slider-input"]} ${styles["dual-slider-input"]}`}
            style={{ zIndex: minPrice <= 850 ? 5 : 4 }}
          />
        </div>
      </div>

      {/* Airlines */}
      <FilterAccordion title="Airlines" defaultOpen={true}>
        <div className={styles["filter-input-wrap"]}>
          <input 
            type="text" 
            placeholder="Search Airline" 
            className={styles["filter-input"]}
            value={airlineSearch}
            onChange={(e) => setAirlineSearch(e.target.value)}
          />
        </div>
        
        {AIRLINES.filter(a => a.name.toLowerCase().includes(airlineSearch.toLowerCase())).map((airline, idx) => (
          <div key={idx} className={styles["filter-checkbox-item"]}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                className={styles["filter-checkbox"]} 
                checked={selectedAirlines.includes(airline.name)}
                onChange={() => toggleAirline(airline.name)}
              />
              <span className={styles["filter-checkbox-label"]}>{airline.name}</span>
            </label>
            <span className={styles["filter-checkbox-count"]}>{airline.count}</span>
          </div>
        ))}
      </FilterAccordion>

      {/* Other Accordions */}
      <FilterAccordion title="Stops">
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedStops.includes('Direct')} 
              onChange={() => toggleStop('Direct')}
            />
            <span className={styles["filter-checkbox-label"]}>Direct</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>14</span>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedStops.includes('1 Stop')}
              onChange={() => toggleStop('1 Stop')}
            />
            <span className={styles["filter-checkbox-label"]}>1 Stop</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>42</span>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedStops.includes('2+ Stops')}
              onChange={() => toggleStop('2+ Stops')}
            />
            <span className={styles["filter-checkbox-label"]}>2+ Stops</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>8</span>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Departure Time">
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedDepartureTimes.includes('morning')}
              onChange={() => toggleDepartureTime('morning')}
            />
            <span className={styles["filter-checkbox-label"]}>Morning (06:00 - 11:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedDepartureTimes.includes('afternoon')}
              onChange={() => toggleDepartureTime('afternoon')}
            />
            <span className={styles["filter-checkbox-label"]}>Afternoon (12:00 - 17:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedDepartureTimes.includes('evening')}
              onChange={() => toggleDepartureTime('evening')}
            />
            <span className={styles["filter-checkbox-label"]}>Evening (18:00 - 23:59)</span>
          </label>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Arrival Time">
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedArrivalTimes.includes('morning')}
              onChange={() => toggleArrivalTime('morning')}
            />
            <span className={styles["filter-checkbox-label"]}>Morning (06:00 - 11:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedArrivalTimes.includes('afternoon')}
              onChange={() => toggleArrivalTime('afternoon')}
            />
            <span className={styles["filter-checkbox-label"]}>Afternoon (12:00 - 17:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={selectedArrivalTimes.includes('evening')}
              onChange={() => toggleArrivalTime('evening')}
            />
            <span className={styles["filter-checkbox-label"]}>Evening (18:00 - 23:59)</span>
          </label>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Duration">
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: '#666', fontWeight: 600 }}>Up to {duration} hours</span>
          </div>
          <div className={styles["custom-slider-container"]}>
            <div className={styles["custom-slider-track"]}></div>
            <div className={styles["custom-slider-fill"]} style={{ width: `${(duration / 24) * 100}%` }}></div>
            <div className={styles["custom-slider-thumb"]} style={{ left: '0%' }}></div>
            <div className={styles["custom-slider-thumb"]} style={{ left: `${(duration / 24) * 100}%` }}></div>
            <input 
              type="range" 
              min="1" 
              max="24" 
              value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))}
              className={styles["custom-slider-input"]} 
            />
          </div>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Refundable Flights">
        <div className={styles["filter-checkbox-item"]}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className={styles["filter-checkbox"]} 
              checked={refundableOnly}
              onChange={() => setRefundableOnly(!refundableOnly)}
            />
            <span className={styles["filter-checkbox-label"]}>Refundable Fares Only</span>
          </label>
        </div>
      </FilterAccordion>
      
    </div>
  );
}
