import React from 'react';
import { ShieldAlert, MessageCircle, Phone, Mail } from 'lucide-react';
import styles from './HotelHelpCard.module.css';

export default function HotelHelpCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <ShieldAlert size={20} className={styles.shieldIcon} />
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.title}>Need Help?</h3>
          <p className={styles.subtitle}>We are here for you 24/7</p>
        </div>
      </div>

      <div className={styles.contactLinks}>
        <button className={styles.linkBtn}>
          <MessageCircle size={14} />
          Live Chat
        </button>
        <div className={styles.divider}></div>
        <button className={styles.linkBtn}>
          <Phone size={14} />
          Call Us
        </button>
        <div className={styles.divider}></div>
        <button className={styles.linkBtn}>
          <Mail size={14} />
          Email Us
        </button>
      </div>
    </div>
  );
}
