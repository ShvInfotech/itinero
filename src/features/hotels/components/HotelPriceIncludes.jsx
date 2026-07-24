import React from 'react';
import { Check } from 'lucide-react';
import styles from './HotelPriceIncludes.module.css';

export default function HotelPriceIncludes() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Price Includes</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Check size={14} className={styles.checkIcon} strokeWidth={3} />
          <span>Free Breakfast</span>
        </li>
        <li className={styles.item}>
          <Check size={14} className={styles.checkIcon} strokeWidth={3} />
          <span>Free Wi-Fi</span>
        </li>
        <li className={styles.item}>
          <Check size={14} className={styles.checkIcon} strokeWidth={3} />
          <span>Airport Transfer</span>
        </li>
        <li className={styles.item}>
          <Check size={14} className={styles.checkIcon} strokeWidth={3} />
          <span>All taxes & service charges</span>
        </li>
      </ul>
    </div>
  );
}
