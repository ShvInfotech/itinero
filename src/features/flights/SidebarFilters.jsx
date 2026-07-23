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
  const [price, setPrice] = useState(50);
  const [airlineSearch, setAirlineSearch] = useState('');

  return (
    <div className={styles["sidebar-card"]} style={{ marginBottom: 20 }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 18, color: '#001439', fontWeight: 700 }}>Filters</h2>
        <span className={styles["filter-header-clear"]}>Clear All</span>
      </div>
      
      {/* Price Range */}
      <div className={styles["filter-section"]} style={{ borderTop: '1px solid #EBEBEB', paddingTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#001439' }}>Price Range</span>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#001439' }}>$280 - $1,250</span>
        </div>
        <div className={styles["custom-slider-container"]}>
          <div className={styles["custom-slider-track"]}></div>
          <div className={styles["custom-slider-fill"]} style={{ width: `${price}%` }}></div>
          <div className={styles["custom-slider-thumb"]} style={{ left: '0%' }}></div>
          <div className={styles["custom-slider-thumb"]} style={{ left: `${price}%` }}></div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles["custom-slider-input"]}
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
            <label>
              <input type="checkbox" className={styles["filter-checkbox"]} />
              <span className={styles["filter-checkbox-label"]}>{airline.name}</span>
            </label>
            <span className={styles["filter-checkbox-count"]}>{airline.count}</span>
          </div>
        ))}
        
        <div className={styles["filter-show-more"]}>Show more</div>
      </FilterAccordion>

      {/* Other Accordions */}
      <FilterAccordion title="Stops">
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} defaultChecked />
            <span className={styles["filter-checkbox-label"]}>Direct</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>14</span>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>1 Stop</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>42</span>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>2+ Stops</span>
          </label>
          <span className={styles["filter-checkbox-count"]}>8</span>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Departure Time">
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Morning (06:00 - 11:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Afternoon (12:00 - 17:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Evening (18:00 - 23:59)</span>
          </label>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Arrival Time">
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Morning (06:00 - 11:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Afternoon (12:00 - 17:59)</span>
          </label>
        </div>
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Evening (18:00 - 23:59)</span>
          </label>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Duration">
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: '#666' }}>Up to 15 hours</span>
          </div>
          <div className={styles["custom-slider-container"]}>
            <div className={styles["custom-slider-track"]}></div>
            <div className={styles["custom-slider-fill"]} style={{ width: '40%' }}></div>
            <div className={styles["custom-slider-thumb"]} style={{ left: '0%' }}></div>
            <div className={styles["custom-slider-thumb"]} style={{ left: '40%' }}></div>
            <input type="range" min="0" max="100" defaultValue="40" className={styles["custom-slider-input"]} />
          </div>
        </div>
      </FilterAccordion>
      
      <FilterAccordion title="Refundable Flights">
        <div className={styles["filter-checkbox-item"]}>
          <label>
            <input type="checkbox" className={styles["filter-checkbox"]} />
            <span className={styles["filter-checkbox-label"]}>Refundable Fares Only</span>
          </label>
        </div>
      </FilterAccordion>
      
    </div>
  );
}
