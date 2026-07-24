import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShieldCheck, Calendar, Users, ChevronDown } from 'lucide-react';
import styles from './HotelBookingCard.module.css';

export default function HotelBookingCard() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBookRoom = () => {
    navigate(`/hotel/${id || '123'}/booking`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.bestPrice}>
        <ShieldCheck size={18} className={styles.shieldIcon} />
        <span className={styles.bestPriceText}>Best Price Guaranteed</span>
      </div>

      <div className={styles.dateInputs}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Check In</label>
          <div className={styles.inputBox}>
            <span className={styles.dateText}>12 May, 2026</span>
            <Calendar size={14} className={styles.calendarIcon} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Check Out</label>
          <div className={styles.inputBox}>
            <span className={styles.dateText}>15 May, 2026</span>
            <Calendar size={14} className={styles.calendarIcon} />
          </div>
        </div>
      </div>

      <div className={styles.guestsInput}>
        <label className={styles.label}>Guests & Rooms</label>
        <div className={styles.inputBox}>
          <span className={styles.guestsText}>2 Guests, 1 Room</span>
          <ChevronDown size={14} className={styles.chevronIcon} />
        </div>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceRow}>
          <span className={styles.price}>$265</span>
          <span className={styles.perNight}>per night</span>
        </div>
        <div className={styles.totalPrice}>
          $797 total<br/>
          Includes taxes & Fees
        </div>
      </div>

      <button className={styles.bookBtn} onClick={handleBookRoom}>Book Room</button>
      
      <div className={styles.freeCancellation}>
        Free cancellation
      </div>
    </div>
  );
}
