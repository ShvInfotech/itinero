import React, { useState } from "react";
import { PageLayout } from "@/components/layout";
import SharedFlightSearchBar from "@/components/SharedFlightSearchBar";
import { MOCK_FLIGHTS } from "./constants/flightResults";
import FlightCardDesign from "./FlightCardDesign";
import DateSlider from "./DateSlider";
import SidebarLetVeroFilter from "./SidebarLetVeroFilter";
import SidebarPriceGraph from "./SidebarPriceGraph";
import SidebarFilters from "./SidebarFilters";
import { Star, IndianRupee, Clock, ChevronDown } from 'lucide-react';
import styles from './FlightsPage.module.css';

/**
 * Reusable Sort Button component for the flights page toolbar.
 * @param {Object} props
 * @param {string} props.id - The sort identifier (e.g., 'recommended')
 * @param {string} props.label - The display text
 * @param {React.ElementType} props.Icon - The Lucide icon component
 * @param {string} props.currentSort - The currently active sort id
 * @param {Function} props.onClick - Callback when clicked
 */
const SortButton = ({ id, label, Icon, currentSort, onClick }) => {
  const isActive = currentSort === id;
  
  return (
    <button 
      className={isActive ? styles["fl-btn-row3"] : styles["fl-btn-row4"]}
      onClick={() => onClick(id)}
      aria-pressed={isActive}
    >
      <Icon size={16} color={isActive ? "#F97211" : "#888888"} />
      <span className={isActive ? styles["fl-text46"] : styles["fl-text47"]}>
        {label}
      </span>
    </button>
  );
};

/**
 * FlightsPage - Main page component for displaying flight search results.
 * Orchestrates the search bar, date slider, sidebar filters, and flight results list.
 */
export default function FlightsPage() {
  const [sortBy, setSortBy] = useState('recommended');

  return (
    <PageLayout>
      <div className={styles["fl-container"]}>
        <div className={styles["fl-main-layout"]}>
          
          {/* Header section with title and search bar */}
          <div className={styles["fl-hero-section"]}>
            <h1 className={styles["fl-hero-title"]}>
              Beyond The Clouds
            </h1>
            <SharedFlightSearchBar />
          </div>
          
          {/* Top date and price slider */}
          <DateSlider />
          
          {/* Main content area: Sidebar + Results */}
          <div className={styles["fl-row12"]}>
            
            {/* Sidebar Columns */}
            <aside className={styles["fl-sidebar-column"]}>
              <SidebarLetVeroFilter />
              <SidebarPriceGraph />
              <SidebarFilters />
            </aside>
            
            {/* Results Column */}
            <main className={styles["fl-results-list"]}>
              
              {/* Sort Toolbar */}
              <header className={styles["fl-row24"]}>
                <span className={styles["fl-text45"]}>
                  326 Flights Found
                </span>
                <div className={styles["fl-spacer"]} aria-hidden="true" />
                
                <SortButton 
                  id="recommended" 
                  label="Recommended" 
                  Icon={Star} 
                  currentSort={sortBy} 
                  onClick={setSortBy} 
                />
                
                <SortButton 
                  id="cheapest" 
                  label="Cheapest" 
                  Icon={IndianRupee} 
                  currentSort={sortBy} 
                  onClick={setSortBy} 
                />
                
                <SortButton 
                  id="fastest" 
                  label="Fastest" 
                  Icon={Clock} 
                  currentSort={sortBy} 
                  onClick={setSortBy} 
                />
                
                <button 
                  className={styles["fl-btn-row6"]}
                  onClick={() => alert("Sorting options...")}
                >
                  <span className={styles["fl-text47"]}>Sort by</span>
                  <ChevronDown size={16} color="#888888" />
                </button>
              </header>
              
              {/* Flight Cards List */}
              <div className={styles["fl-flight-cards-container"]}>
                {MOCK_FLIGHTS.map(flight => (
                  <FlightCardDesign key={flight.id} flight={flight} styles={styles} />
                ))}
              </div>
            </main>
            
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
