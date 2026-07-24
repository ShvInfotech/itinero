import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Wifi, Waves, Coffee, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HotelDetailHero.module.css';

export default function HotelDetailHero() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const base = import.meta.env.BASE_URL;

  const images = [
    `${base}hotel_bg.png`,
    `${base}hotel_room.png`,
    `${base}hotel_lounge.png`,
    `${base}hotel_pool.png`,
    `${base}hotel_balcony.png`
  ];

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.heroContainer}>
      {/* Title & Info Section */}
      <div className={styles.headerInfo}>
        <h1 className={styles.hotelName}>Address Downtown Dubai</h1>
        
        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>
          <div className={styles.ratingBadge}>4.8</div>
          <span className={styles.ratingText}>Excellent</span>
          <span className={styles.reviewsText}>(2456 reviews)</span>
        </div>

        <div className={styles.locationRow}>
          <MapPin size={16} className={styles.icon} />
          <span>Downtown Dubai, Dubai</span>
          <span className={styles.dot}>•</span>
          <span>0.5 Km to city center</span>
          <span className={styles.dot}>•</span>
          <span className={styles.excellentLocation}>Excellent Location</span>
        </div>

        <div className={styles.quickAmenities}>
          <div className={styles.amenityItem}>
            <Wifi size={14} />
            <span>Free Wi-Fi</span>
          </div>
          <div className={styles.amenityItem}>
            <Waves size={14} />
            <span>Swimming Pool</span>
          </div>
          <div className={styles.amenityItem}>
            <Coffee size={14} />
            <span>Free Breakfast</span>
          </div>
          <span className={styles.moreAmenities}>+6 more</span>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallery}>
        <div className={styles.galleryImageWrapper} onClick={() => setSelectedIndex(0)} style={{ cursor: 'pointer' }}>
          <img src={images[0]} alt="Hotel View" className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper} onClick={() => setSelectedIndex(1)} style={{ cursor: 'pointer' }}>
          <img src={images[1]} alt="Hotel Room" className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper} onClick={() => setSelectedIndex(2)} style={{ cursor: 'pointer' }}>
          <img src={images[2]} alt="Hotel Lounge" className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper} onClick={() => setSelectedIndex(3)} style={{ cursor: 'pointer' }}>
          <img src={images[3]} alt="Hotel Pool" className={styles.galleryImage} />
        </div>
        <div className={`${styles.galleryImageWrapper} ${styles.viewMoreOverlay}`} onClick={() => setSelectedIndex(4)} style={{ cursor: 'pointer' }}>
          <img src={images[4]} alt="Hotel Balcony" className={styles.galleryImage} />
          <div className={styles.viewMoreContent}>
            <span className={styles.viewMoreNumber}>+28</span>
            <span className={styles.viewMoreText}>View all photos</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal — rendered via Portal to avoid z-index stacking issues */}
      {selectedIndex !== null && createPortal(
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className={styles.lightboxPrev} onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          
          <img
            src={images[selectedIndex]}
            alt="Fullscreen View"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          
          <button className={styles.lightboxNext} onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
