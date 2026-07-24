import React from 'react';
import { Wifi, Waves, Sparkles, Dumbbell, Utensils, Car, Pill, ConciergeBell, Briefcase } from 'lucide-react';
import styles from './HotelAmenitiesGrid.module.css';

const AMENITIES = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Sparkles, label: 'Spa & Wellness' },
  { icon: Dumbbell, label: 'Fitness Center' },
  { icon: Utensils, label: 'Restaurant' },
  { icon: Utensils, label: 'Free Breakfast' },
  { icon: Car, label: 'Airport Transfer' },
  { icon: Pill, label: 'Pharmacy' },
  { icon: ConciergeBell, label: 'Room Service' },
  { icon: Briefcase, label: 'Business Center' },
];

export default function HotelAmenitiesGrid() {
  const visibleAmenities = AMENITIES.slice(0, 10);

  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={styles.sectionTitle}>Amenities</h2>
        <button className={styles.viewAllBtn}>View All</button>
      </div>
      <div className={styles.grid}>
        {visibleAmenities.map((amenity, index) => {
          const Icon = amenity.icon;
          return (
            <div key={index} className={styles.amenityCard}>
              <div className={styles.iconCircle}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <span className={styles.label}>{amenity.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
