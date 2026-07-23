import React, { useState } from 'react';
import styles from './FlightsPage.module.css';

export default function SidebarLetVeroFilter() {
  const [veroQuery, setVeroQuery] = useState('');

  return (
    <div className={`${styles["sidebar-card"]} ${styles["vero-filter-card"]}`} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: '#FFDDB3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, overflow: 'hidden' }}>
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Vero&backgroundColor=FFDDB3" alt="Vero" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#001439' }}>Let Vero Filter</span>
          <span style={{ fontSize: 11, color: '#888' }}>Vero can make mistakes.</span>
        </div>
      </div>
      
      <textarea
        className={styles["vero-textarea"]}
        placeholder="What are you looking for? Try something like: I want to see flights with no stopovers under ₹ 25,000."
        value={veroQuery}
        onChange={(e) => setVeroQuery(e.target.value)}
      />
      
      <button 
        className={styles["fl-btn-vero"]} 
        onClick={() => alert(`Filtering by: ${veroQuery}`)}
      >
        Filter flights
      </button>
    </div>
  );
}
