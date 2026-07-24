import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './HotelAbout.module.css';

export default function HotelAbout() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.sectionTitle}>About This Hotel</h2>
      <p className={styles.description}>
        Experience luxury like never before at Address Downtown Dubai. Enjoy breathtaking views of Burj Khalifa, world-class dining and unmatched hospitality in the heart of the city.
      </p>
      <button className={styles.readMoreBtn}>
        Read More <ChevronDown size={14} />
      </button>
    </div>
  );
}
