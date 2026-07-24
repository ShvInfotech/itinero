import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './HotelAttractions.module.css';

const ATTRACTIONS = [
  {
    id: 1,
    name: 'Burj Khalifa',
    distance: '0.3 Km',
    image: 'https://images.unsplash.com/photo-1597659840241-37aca114236f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Dubai Mall',
    distance: '0.6 Km',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Dubai Fountain',
    distance: '0.4 Km',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'City Walk',
    distance: '2.3 Km',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

export default function HotelAttractions() {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={styles.sectionTitle}>Nearby Attractions</h2>
        <button className={styles.viewAllBtn}>View All</button>
      </div>

      <div className={styles.attractionsGrid}>
        {ATTRACTIONS.map((attraction, index) => (
          <div key={attraction.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={attraction.image} alt={attraction.name} className={styles.image} />
              
              {/* Only show the circle arrow on the last visible card if we want to mimic a carousel arrow, 
                  but design has it inside the 4th card */}
              {index === 3 && (
                <button className={styles.carouselBtn}>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
            <div className={styles.info}>
              <h4 className={styles.name}>{attraction.name}</h4>
              <span className={styles.distance}>{attraction.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
