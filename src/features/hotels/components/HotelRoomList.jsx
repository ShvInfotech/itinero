import React from 'react';
import { Users, Bed, Maximize2, Bath, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HotelRoomList.module.css';

const ROOMS = [
  {
    id: 1,
    name: 'Deluxe Room',
    guests: '2 Guests',
    beds: '1 King Bed',
    size: '45 m²',
    bath: '1 Bathroom',
    price: '$265',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Deluxe Room',
    guests: '2 Guests',
    beds: '2 King Bed',
    size: '60 m²',
    bath: '1 Bathroom',
    price: '$265',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Deluxe Room',
    guests: '3 Guests',
    beds: '1 King Bed',
    size: '75 m²',
    bath: '2 Bathroom',
    price: '$265',
    image: 'https://images.unsplash.com/photo-1582719478250-c89fee4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

export default function HotelRoomList() {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={styles.sectionTitle}>Choose Your Room</h2>
        <div className={styles.navButtons}>
          <button className={styles.navBtn}><ChevronLeft size={18} /></button>
          <button className={styles.navBtn}><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className={styles.roomsGrid}>
        {ROOMS.map(room => (
          <div key={room.id} className={styles.roomCard}>
            <div className={styles.roomImageWrapper}>
              <img src={room.image} alt={room.name} className={styles.roomImage} />
            </div>
            <div className={styles.roomInfo}>
              <h3 className={styles.roomName}>{room.name}</h3>
              <div className={styles.roomMeta}>
                <span className={styles.metaItem}><Users size={12} /> {room.guests}</span>
                <span className={styles.metaItem}><Bed size={12} /> {room.beds}</span>
                <span className={styles.metaItem}><Maximize2 size={12} /> {room.size}</span>
                <span className={styles.metaItem}><Bath size={12} /> {room.bath}</span>
              </div>
              <div className={styles.roomFooter}>
                <span className={styles.roomPrice}>{room.price} <span className={styles.perNight}>/n</span></span>
                <button className={styles.selectBtn}>Select Room</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.infoNote}>
        <span className={styles.infoIcon}>ℹ️</span>
        All rooms include complimentary breakfast, free Wi-Fi and access to pool & gym.
      </div>
    </div>
  );
}
