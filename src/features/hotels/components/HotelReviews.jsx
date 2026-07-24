import React from 'react';
import styles from './HotelReviews.module.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    date: '2 days ago',
    rating: 5,
    text: 'Amazing stay! perfect location with stunning Burj Khalifa View. The Service was exceptional and the rooms were faultless.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    name: 'Michael Brown',
    date: '3 days ago',
    rating: 5,
    text: 'Everything was perfect from check-in to check-out. Highly recommend this hotel for anyone visiting Dubai.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
  }
];

export default function HotelReviews() {
  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={styles.sectionTitle}>Guest Reviews</h2>
        <button className={styles.viewAllBtn}>View All Reviews</button>
      </div>

      <div className={styles.reviewsGrid}>
        {/* Left Side: Rating Breakdown */}
        <div className={styles.ratingBreakdown}>
          <div className={styles.overallRating}>
            <div className={styles.ratingScore}>4.8</div>
            <div className={styles.ratingInfo}>
              <div className={styles.ratingText}>Excellent</div>
              <div className={styles.stars}>
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <div className={styles.reviewsCount}>2,456 reviews</div>
            </div>
          </div>

          <div className={styles.barsContainer}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>5 Excellent</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{width: '75%'}}></div></div>
              <span className={styles.barPercent}>75%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>4 Very Good</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{width: '20%'}}></div></div>
              <span className={styles.barPercent}>20%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>3 Average</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{width: '6%'}}></div></div>
              <span className={styles.barPercent}>6%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>2 Poor</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{width: '1%'}}></div></div>
              <span className={styles.barPercent}>1%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>1 Terrible</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{width: '1%'}}></div></div>
              <span className={styles.barPercent}>1%</span>
            </div>
          </div>
        </div>

        {/* Right Side: Review Comments */}
        <div className={styles.reviewsList}>
          {REVIEWS.map(review => (
            <div key={review.id} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <div className={styles.reviewerInfo}>
                  <h4 className={styles.reviewerName}>{review.name}</h4>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <div className={styles.reviewStars}>
                  {Array(review.rating).fill(0).map((_, i) => (
                    <span key={i} className={styles.starSmall}>★</span>
                  ))}
                </div>
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
