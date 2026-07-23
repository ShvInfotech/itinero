import React from 'react';
import { 
  Plane, Clock, Wifi, Coffee, Shield, Check, FileText, ChevronDown, MoveRight, HelpCircle 
} from 'lucide-react';
import styles from './FlightOverviewPage.module.css';

export default function FlightOverviewPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Beyond The Clouds</h1>
          
          <div className={styles.searchSummaryBar}>
            <div className={styles.summaryItem}>
              <div className={styles.summaryIcon}><Plane size={20} /></div>
              <div className={styles.summaryText}>
                <div className={styles.summaryLabel}>From</div>
                <div className={styles.summaryValue}>New York (NYC)</div>
              </div>
            </div>
            
            <div className={styles.summaryArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3l4 4-4 4"></path><path d="M3 7h18"></path><path d="M7 21l-4-4 4-4"></path><path d="M21 17H3"></path></svg>
            </div>

            <div className={styles.summaryItem}>
              <div className={styles.summaryIcon}><Plane size={20} style={{transform: 'rotate(90deg)'}}/></div>
              <div className={styles.summaryText}>
                <div className={styles.summaryLabel}>Going To</div>
                <div className={styles.summaryValue}>New York (NYC)</div>
              </div>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.summaryItem}>
              <div className={styles.summaryIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <div className={styles.summaryText}>
                <div className={styles.summaryLabel}>Depart</div>
                <div className={styles.summaryValue}>12 May, 2026</div>
              </div>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.summaryItem}>
              <div className={styles.summaryIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <div className={styles.summaryText}>
                <div className={styles.summaryLabel}>Return</div>
                <div className={styles.summaryValue}>20 May, 2026</div>
              </div>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.summaryItem}>
              <div className={styles.summaryIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <div className={styles.summaryText}>
                <div className={styles.summaryLabel}>Travelers & Class</div>
                <div className={styles.summaryValue}>2 Pax, Economy</div>
              </div>
            </div>

            <button className={styles.changeSearchBtn}>Change Search</button>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          <div className={styles.pageHeader}>
            <h2 className={styles.pageTitle}>Flight Overview</h2>
            <div className={styles.headerBadges}>
              <span className={styles.badgeRefundable}>REFUNDABLE</span>
              <span className={styles.badgeBaggage}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> 7 kg Cabin</span>
              <span className={styles.badgeBaggage}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> 30 kg Checked</span>
            </div>
          </div>

          <div className={styles.flightCard}>
            <div className={styles.fcTopRow}>
              <div className={styles.airlineInfo}>
                <div className={styles.airlineLogoBox}>
                  {/* Fake Emirates Logo */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#E81932"><path d="M2 12C2 12 5 13.5 12 13.5C19 13.5 22 12 22 12C22 12 18 20 12 20C6 20 2 12 2 12Z"/></svg>
                </div>
                <div>
                  <div className={styles.airlineName}>Emirates</div>
                  <div className={styles.flightCode}>EK 203 • Boeing 777-300ER</div>
                </div>
              </div>

              <div className={styles.flightTimeBlock}>
                <div className={styles.timeLabel}>08:45</div>
                <div className={styles.airportCode}>JFK</div>
                <div className={styles.airportName}>John F. Kennedy Intl.<br/>New York, USA</div>
              </div>

              <div className={styles.flightGraphic}>
                <div className={styles.fgDuration}>7h 20m</div>
                <div className={styles.fgLineWrap}>
                  <div className={styles.fgDot}></div>
                  <div className={styles.fgLine}></div>
                  <div className={styles.fgPlaneIcon}><Plane size={16} color="#6C5CE7" fill="#6C5CE7" /></div>
                  <div className={styles.fgLine}></div>
                  <div className={styles.fgDot}></div>
                </div>
                <div className={styles.fgDirect}>Direct</div>
              </div>

              <div className={styles.flightTimeBlock}>
                <div className={styles.timeLabel}>20:05</div>
                <div className={styles.airportCode}>LHR</div>
                <div className={styles.airportName}>Heathrow Airport<br/>London, UK</div>
              </div>
            </div>
          </div>

          {/* Widgets Grid */}
          <div className={styles.widgetsGrid}>
            <div className={styles.widgetCard}>
              <div className={styles.widgetTitle}>Route Timeline</div>
              <div className={styles.timelineContainer}>
                <div className={styles.tlItem}>
                  <div className={styles.tlTime}>08:45</div>
                  <div className={styles.tlDotWrap}><div className={styles.tlDotTop}></div></div>
                  <div className={styles.tlContent}>
                    <div className={styles.tlCode}>JFK <span className={styles.tlCity}>New York</span></div>
                    <div className={styles.tlDesc}>John F. Kennedy International Airport<br/>Terminal 4</div>
                  </div>
                </div>
                <div className={styles.tlItemMiddle}>
                  <div className={styles.tlEmpty}></div>
                  <div className={styles.tlLineWrap}>
                     <div className={styles.tlLine}></div>
                     <Plane size={14} className={styles.tlPlane} />
                  </div>
                  <div className={styles.tlDuration}>
                    <div className={styles.tlDurText}>7h 20m</div>
                    <div className={styles.tlDurSub}>Direct Flight</div>
                  </div>
                </div>
                <div className={styles.tlItem}>
                  <div className={styles.tlTime}>20:05</div>
                  <div className={styles.tlDotWrap}><div className={styles.tlDotBottom}></div></div>
                  <div className={styles.tlContent}>
                    <div className={styles.tlCode}>LHR <span className={styles.tlCity}>London</span></div>
                    <div className={styles.tlDesc}>Heathrow Airport<br/>Terminal 3</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.widgetCard}>
              <div className={styles.widgetTitle}>Layover Details</div>
              <div className={styles.layoverContent}>
                <div className={styles.layoverImagePlaceholder}>
                  <div className={styles.layoverCircle}></div>
                  <svg width="100" height="60" viewBox="0 0 100 60">
                    <rect x="20" y="30" width="20" height="20" fill="#E8A375" rx="2" />
                    <rect x="60" y="30" width="20" height="20" fill="#E8A375" rx="2" />
                    <circle cx="50" cy="40" r="15" fill="#A8DADC" />
                  </svg>
                </div>
                <div className={styles.layoverTitle}>No Layovers</div>
                <div className={styles.layoverSub}>This is a direct flight</div>
              </div>
            </div>

            <div className={styles.widgetStack}>
              <div className={styles.widgetCardMini}>
                <div className={styles.wmHeader}>
                  <Plane size={16} color="#F97211" fill="#F97211" style={{transform: 'rotate(-45deg)'}} />
                  <div>
                    <div className={styles.wmTitle}>Departure Airport</div>
                    <div className={styles.wmSub}>JFK • John F. Kennedy Intl. Airport</div>
                  </div>
                </div>
                <div className={styles.wmDataRow}>
                  <div><div className={styles.wmLabel}>TERMINAL</div><div className={styles.wmValue}>4</div></div>
                  <div><div className={styles.wmLabel}>GATE</div><div className={styles.wmValue}>B12</div></div>
                  <div><div className={styles.wmLabel}>CHECK-IN-CLOSES</div><div className={styles.wmValue}>07:45, 12 May</div></div>
                </div>
              </div>
              <div className={styles.widgetCardMini}>
                <div className={styles.wmHeader}>
                  <Plane size={16} color="#F97211" fill="#F97211" style={{transform: 'rotate(45deg)'}} />
                  <div>
                    <div className={styles.wmTitle}>Arrival Airport</div>
                    <div className={styles.wmSub}>LHR • Heathrow Airport</div>
                  </div>
                </div>
                <div className={styles.wmDataRow}>
                  <div><div className={styles.wmLabel}>TERMINAL</div><div className={styles.wmValue}>3</div></div>
                  <div><div className={styles.wmLabel}>GATE</div><div className={styles.wmValue}>A18</div></div>
                  <div><div className={styles.wmLabel}>CHECK-IN-CLOSES</div><div className={styles.wmValue}>20:05, 12 May</div></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.featuresBar}>
            <div className={styles.fbItem}>
              <div className={styles.fbIconWrap}><Clock size={16} color="#F97211" /></div>
              <div>
                <div className={styles.fbLabel}>FLIGHT DURATION</div>
                <div className={styles.fbValue}>7h 20m</div>
              </div>
            </div>
            <div className={styles.fbItem}>
              <div className={styles.fbIconWrap}><Shield size={16} color="#F97211" /></div>
              <div>
                <div className={styles.fbLabel}>TRAVEL CLASS</div>
                <div className={styles.fbValue}>Economy</div>
              </div>
            </div>
            <div className={styles.fbItem}>
              <div className={styles.fbIconWrap}><Plane size={16} color="#F97211" /></div>
              <div>
                <div className={styles.fbLabel}>AIRCRAFT</div>
                <div className={styles.fbValue}>Boeing 777 - 300ER</div>
              </div>
            </div>
            <div className={styles.fbItem}>
              <div className={styles.fbIconWrap}><Check size={16} color="#F97211" /></div>
              <div>
                <div className={styles.fbLabel}>ON-TIME PERFORMANCE</div>
                <div className={styles.fbValue}>92%</div>
              </div>
            </div>
            <div className={styles.fbItem}>
              <div className={styles.fbIconWrap}><Wifi size={16} color="#F97211" /></div>
              <div>
                <div className={styles.fbLabel}>IN-FLIGHT WI-FI</div>
                <div className={styles.fbValue}>Available</div>
              </div>
            </div>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsHeader}>
              <div className={`${styles.tabItem} ${styles.tabActive}`}>Baggage</div>
              <div className={styles.tabItem}>Refund Policy</div>
              <div className={styles.tabItem}>Cancellation Policy</div>
            </div>
            <div className={styles.tabsContent}>
              <div className={styles.baggageGrid}>
                <div className={styles.bagItem}>
                  <div className={styles.bagIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2"><rect x="6" y="6" width="12" height="14" rx="2"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="10" x2="10" y2="16"/><line x1="14" y1="10" x2="14" y2="16"/></svg>
                  </div>
                  <div>
                    <div className={styles.bagTitle}>Cabin Baggage</div>
                    <div className={styles.bagPiece}>1 Piece</div>
                    <div className={styles.bagWeight}>Up to 7 kg</div>
                  </div>
                </div>
                <div className={styles.bagItem}>
                  <div className={styles.bagIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2"><rect x="6" y="6" width="12" height="14" rx="2"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="10" x2="10" y2="16"/><line x1="14" y1="10" x2="14" y2="16"/></svg>
                  </div>
                  <div>
                    <div className={styles.bagTitle}>Checked Baggage</div>
                    <div className={styles.bagPiece}>1 Piece</div>
                    <div className={styles.bagWeight}>Up to 30 kg</div>
                  </div>
                </div>
                <div className={styles.bagItem}>
                  <div className={styles.bagIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2"><rect x="6" y="6" width="12" height="14" rx="2"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="10" x2="10" y2="16"/><line x1="14" y1="10" x2="14" y2="16"/></svg>
                  </div>
                  <div>
                    <div className={styles.bagTitle}>Excess Baggage</div>
                    <div className={styles.bagPiece}>$100</div>
                    <div className={styles.bagWeight}>Per additional 10kg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.addonsGrid}>
            <div className={styles.addonCard}>
              <div className={styles.addonHeader}>
                <Coffee size={18} color="#F97211" /> Meal Selection
              </div>
              <div className={styles.addonContent}>
                <div className={styles.addonImage}>
                  <img src="https://images.unsplash.com/photo-1577902195047-9755f1f9a2fc?w=120&h=80&fit=crop" alt="Meal" style={{borderRadius: 8, width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div className={styles.addonDetails}>
                  <div className={styles.addonLabel}>MEAL PREFERENCE</div>
                  <div className={styles.addonSelect}>
                    Standard Vegetarian Meal <ChevronDown size={16} color="#888" />
                  </div>
                  <div className={styles.addonSub}>Complimentary meal included</div>
                </div>
              </div>
            </div>
            
            <div className={styles.addonCard}>
              <div className={styles.addonHeader}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2"><path d="M19 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/><path d="M7 12V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"/><path d="M12 20v2"/></svg> Seat Selection
              </div>
              <div className={styles.addonContentSeat}>
                <div className={styles.seatIconWrap}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2"><path d="M19 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/><path d="M7 12V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"/><path d="M12 20v2"/></svg>
                </div>
                <div className={styles.addonDetails}>
                  <div className={styles.addonLabel}>SEAT</div>
                  <div className={styles.addonSeatVal}>24A</div>
                  <div className={styles.addonSub}>Window Seat</div>
                </div>
                <button className={styles.btnOutline}>Change Seat</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightColumn}>
          <div className={styles.stickySidebar}>
            
            <div className={styles.fareSummaryCard}>
              <div className={styles.fsHeader}>
                <span className={styles.fsTitle}>Fare Summary</span>
                <div className={styles.fsSelect}>
                  1 Adult <ChevronDown size={14} />
                </div>
              </div>
              
              <div className={styles.fsBody}>
                <h3 className={styles.fsSectionTitle}>Price Breakdown</h3>
                <div className={styles.fsRow}>
                  <span>Base Fare</span>
                  <span>₹520.00</span>
                </div>
                <div className={styles.fsRow}>
                  <span>Airline Charges</span>
                  <span>₹80.00</span>
                </div>
                <div className={styles.fsRow}>
                  <span>Taxes & Fees</span>
                  <span>₹120.00</span>
                </div>

                <div className={styles.fsDivider}></div>

                <div className={styles.fsTotalRow}>
                  <span>Total Fare</span>
                  <span className={styles.fsPriceBold}>₹720.00</span>
                </div>

                <div className={styles.insuranceBox}>
                  <div className={styles.insHeader}>
                    <Shield size={16} color="#F97211" fill="#F97211" />
                    <div>
                      <div className={styles.insTitle}>Add Travel Insurance</div>
                      <div className={styles.insSub}>Get trip protection for cancellation, delay, medical emergencies & more.</div>
                    </div>
                    <div className={styles.insShieldIcon}>
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                  </div>
                  <div className={styles.insAddBtn}>
                    + Add
                  </div>
                </div>

                <div className={styles.fsDivider}></div>

                <div className={styles.fsGrandTotalRow}>
                  <span>Grand Total</span>
                  <span className={styles.fsPriceBold}>₹720.00</span>
                </div>

                <button className={styles.bookNowBtn}>
                  Book Now <MoveRight size={18} />
                </button>
                <div className={styles.secureBooking}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Secure Booking
                </div>
              </div>
            </div>

            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"/></svg></div>
                <div className={styles.trustTitle}>Best Price</div>
                <div className={styles.trustSub}>Guarantee</div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}><Shield size={24} color="#333" /></div>
                <div className={styles.trustTitle}>Secure & Easy</div>
                <div className={styles.trustSub}>Payments</div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}><HelpCircle size={24} color="#333" /></div>
                <div className={styles.trustTitle}>24/7 Travel</div>
                <div className={styles.trustSub}>Support</div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}><FileText size={24} color="#333" /></div>
                <div className={styles.trustTitle}>Flexible</div>
                <div className={styles.trustSub}>Booking</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
