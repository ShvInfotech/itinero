import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import styles from './FlightsPage.module.css';

const data = [
  { date: '18 Jul', price: 7000 },
  { date: '19 Jul', price: 6500 },
  { date: '20 Jul', price: 5000 },
  { date: '21 Jul', price: 3000 },
  { date: '22 Jul', price: 2000 },
  { date: '23 Jul', price: 2500 },
  { date: '24 Jul', price: 4000 },
];

export default function SidebarPriceGraph() {
  const [trackPrices, setTrackPrices] = useState(false);

  return (
    <div className={styles["sidebar-card"]} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <div style={{ padding: 6, background: '#E8F5E9', borderRadius: 8, display: 'flex' }}>
          <TrendingUp size={20} color="#22C55E" />
        </div>
        <h3 style={{ margin: 0, fontSize: 16, color: '#22C55E', fontWeight: 700 }}>Book Now</h3>
      </div>
      
      <p style={{ margin: '0 0 20px 0', fontSize: 12, color: '#666', lineHeight: 1.4 }}>
        Prices are unlikely to drop before your departure.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingTop: 15, borderTop: '1px solid #EBEBEB' }}>
        <span style={{ fontWeight: 600, color: '#666', fontSize: 13 }}>Track prices</span>
        <div 
          className={`${styles["toggle-switch"]} ${trackPrices ? styles["toggle-on"] : ""}`}
          onClick={() => setTrackPrices(!trackPrices)}
        >
          <div className={styles["toggle-thumb"]} />
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', height: 120, paddingBottom: 16 }}>
          <span style={{ fontSize: 9, color: '#000', fontWeight: 600 }}>₹ 2k</span>
          <span style={{ fontSize: 9, color: '#000', fontWeight: 600 }}>₹ 3k</span>
          <span style={{ fontSize: 9, color: '#000', fontWeight: 600 }}>₹ 5k</span>
          <span style={{ fontSize: 9, color: '#000', fontWeight: 600 }}>₹ 7k</span>
        </div>

        <div style={{ width: '100%', height: 120, position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity={0}/>
                  <stop offset="60%" stopColor="#22C55E" stopOpacity={0}/>
                  <stop offset="100%" stopColor="#F97211" stopOpacity={0.15}/>
                </linearGradient>
                <linearGradient id="strokePrice" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22C55E"/>
                  <stop offset="60%" stopColor="#22C55E"/>
                  <stop offset="100%" stopColor="#F97211"/>
                </linearGradient>
              </defs>
              <Tooltip 
                formatter={(value) => [`₹${value}`, "Price"]}
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="price" stroke="url(#strokePrice)" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 30, marginTop: 5 }}>
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: 9, color: '#000', fontWeight: 600 }}>{d.date.split(' ')[0]}</span>
        ))}
      </div>
    </div>
  );
}
