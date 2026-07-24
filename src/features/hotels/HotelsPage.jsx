import React, { useState } from "react";
import { PageLayout } from "@/components/layout";
import SharedHotelSearchBar from "@/components/SharedHotelSearchBar/SharedHotelSearchBar";
import { HotelSidebar } from "./components/HotelSidebar";
import { HotelCard } from "./components/HotelCard";
import { HotelMap } from "./components/HotelMap";
import { HorizontalFilters } from "./components/HorizontalFilters";
import { MOCK_HOTELS } from "./constants/hotelResults";
import { Star, IndianRupee, Diamond, SlidersHorizontal, ChevronDown, X, Map } from 'lucide-react';
import styles from './HotelsPage.module.css';

/**
 * Reusable Sort Button component for the hotels page toolbar.
 */
const SortButton = ({ id, label, Icon, currentSort, onClick }) => {
  const isActive = currentSort === id;
  
  return (
    <button 
      className={isActive ? styles.sortBtnActive : styles.sortBtnInactive}
      onClick={() => onClick(id)}
      aria-pressed={isActive}
    >
      <Icon size={16} color={isActive ? "#F97211" : "#888888"} />
      <span className={isActive ? styles.sortTextActive : styles.sortTextInactive}>
        {label}
      </span>
    </button>
  );
};

/**
 * HotelsPage - Main page component for displaying hotel search results.
 */
export default function HotelsPage() {
  const [sortBy, setSortBy] = useState('recommended');
  const [isMapView, setIsMapView] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <PageLayout>
      <div className={styles.hotelsContainer}>
        <div className={`${styles.mainLayout} ${isMapView ? styles.mainLayoutMapView : ''}`}>
          
          {/* Header section with search bar */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Find Your Perfect Stay</h1>
            <SharedHotelSearchBar />
          </div>
          
          {/* Main content area: Sidebar + Results */}
          <div className={`${styles.contentRow} ${isMapView ? styles.contentRowMapView : ''}`}>
            
            {/* Sidebar Filters - always in DOM, animated via CSS */}
            <aside className={`${styles.sidebarColumn} ${isMapView ? styles.sidebarColumnHidden : ''}`}>
              <HotelSidebar />
            </aside>

            {/* Main Content Area */}
            <main className={`${styles.resultsList} ${isMapView ? styles.resultsListMapView : ''}`}>
              
              {/* Horizontal Filters - always in DOM, animated via CSS */}
              <div className={`${styles.horizontalFiltersWrapper} ${isMapView ? styles.horizontalFiltersVisible : ''}`}>
                <HorizontalFilters />
              </div>
              
              {/* Sort Toolbar - shown above cards in normal view */}
              {!isMapView && (
                <header className={styles.sortToolbar}>
                  <span className={styles.resultsCount}>
                    1,207 Stays Found
                  </span>
                  
                  <div className={styles.spacer} aria-hidden="true" />
                  
                  <SortButton 
                    id="recommended" 
                    label="Recommended" 
                    Icon={Star} 
                    currentSort={sortBy} 
                    onClick={setSortBy} 
                  />
                  
                  <SortButton 
                    id="top-reviewed" 
                    label="Top Reviewed" 
                    Icon={Star} 
                    currentSort={sortBy} 
                    onClick={setSortBy} 
                  />

                  <SortButton 
                    id="lowest-price" 
                    label="Lowest Price" 
                    Icon={IndianRupee} 
                    currentSort={sortBy} 
                    onClick={setSortBy} 
                  />

                  <SortButton 
                    id="luxury" 
                    label="Luxury stays" 
                    Icon={Diamond} 
                    currentSort={sortBy} 
                    onClick={setSortBy} 
                  />

                  <div className={styles.sortSpacer}></div>

                  <button 
                    className={styles.mapButton}
                    onClick={() => setIsMapView(true)}
                  >
                    <Map size={16} color="#000" />
                    <span className={styles.mapButtonText}>Show on Map</span>
                  </button>

                  {/* Mobile Filters Button */}
                  <button 
                    className={styles.mobileFilterBtn}
                    onClick={() => setIsFilterDrawerOpen(true)}
                  >
                    <SlidersHorizontal size={16} />
                    <span>Filters</span>
                  </button>
                </header>
              )}
              
              {/* Hotel Cards List & Map Split View */}
              <div className={`${styles.contentSplitter} ${isMapView ? styles.contentSplitterMap : ''}`}>
                <div className={`${styles.hotelCardsContainer} ${isMapView ? styles.hotelCardsContainerMap : ''}`}>
                  
                  {/* Map view compact sort toolbar - inside hotel list column */}
                  {isMapView && (
                    <header className={styles.sortToolbarCompact}>
                      <span className={styles.resultsCount}>
                        406 Stays Found
                      </span>
                      <div className={styles.spacer} aria-hidden="true" />
                      <span className={styles.sortByLabel}>Sort by</span>
                      <button className={styles.sortDropdown}>
                        Recommended
                        <ChevronDown size={14} />
                      </button>
                      
                      <button 
                        className={styles.hideMapBtn}
                        onClick={() => setIsMapView(false)}
                      >
                        <X size={14} />
                        <span>Hide Map</span>
                      </button>
                    </header>
                  )}
                  
                  {MOCK_HOTELS.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
                
                {/* Map Panel - always in DOM, animated via CSS */}
                <div className={`${styles.mapViewMap} ${isMapView ? styles.mapViewMapVisible : ''}`}>
                  <HotelMap hotels={MOCK_HOTELS} />
                </div>
              </div>
            </main>
            
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {/* Reusing overlay styles from existing global styles if necessary, but for now we'll rely on sidebar styles on desktop and simple conditional rendering here if we had mobile specific drawer css */}
      {isFilterDrawerOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000,
          display: 'flex', flexDirection: 'column',
          padding: '20px', overflowY: 'auto'
        }} onClick={() => setIsFilterDrawerOpen(false)}>
          <div style={{
            backgroundColor: '#fff', borderRadius: '15px', padding: '20px', marginTop: 'auto', marginBottom: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
              <h3 style={{margin: 0, fontSize: '24px', fontFamily: 'Outfit'}}>Filters</h3>
              <button onClick={() => setIsFilterDrawerOpen(false)} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                <X size={24} />
              </button>
            </div>
            <HotelSidebar />
          </div>
        </div>
      )}
    </PageLayout>
  );
}
