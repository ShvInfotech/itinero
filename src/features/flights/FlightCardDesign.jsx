import React, { useState } from 'react';
import {
  Plane, Briefcase, Luggage, ChevronDown, ChevronUp, Heart,
  Wifi, Tv, Wine
} from 'lucide-react';

const AIRLINE_BRAND_COLORS = {
  emirates: { bg: '#D71921', text: 'E', font: 'serif' },
  etihad: { bg: '#7A6855', text: 'EY', font: 'sans-serif' },
  qatar: { bg: '#5A0B27', text: 'Q', font: 'sans-serif' },
  american: { bg: '#0078D2', text: 'AA', font: 'sans-serif' },
  indigo: { bg: '#002F6C', text: '6E', font: 'sans-serif' },
  default: { bg: '#F97211', text: 'FL', font: 'sans-serif' }
};

/**
 * Renders the airline logo or a colored fallback text logo.
 */
function AirlineLogo({ name, url, styles }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError || !url) {
    const normalizedName = name.toLowerCase();
    
    // Find matching brand colors or use default
    const brandKey = Object.keys(AIRLINE_BRAND_COLORS).find(key => normalizedName.includes(key));
    const brandConfig = AIRLINE_BRAND_COLORS[brandKey] || AIRLINE_BRAND_COLORS.default;
    
    return (
      <div 
        className={styles["fc-airline-logo-placeholder"]}
        style={{
          backgroundColor: brandConfig.bg,
          fontFamily: brandConfig.font
        }}
      >
        {brandConfig.text}
      </div>
    );
  }
  
  return (
    <img 
      src={url} 
      className={styles["fc-airline-logo"]} 
      alt={`${name} Logo`}
      onError={() => setHasError(true)}
    />
  );
}

/**
 * Renders a single flight segment (e.g., BOM -> DXB) inside the expanded details.
 */
function FlightSegment({ segment, defaultFlightNumber, styles }) {
  const flightNumber = segment.flightInfo?.flightNumber || defaultFlightNumber;
  const aircraft = segment.flightInfo?.aircraft || "Airbus A320";
  
  return (
    <React.Fragment>
      {/* Column 1: Flight Information */}
      <div className={styles["fc-segment-col"]}>
        <h4 className={styles["fc-details-section-title"]}>Flight Information</h4>
        <div className={styles["fc-details-route"]}>
          <div className={styles["fc-details-time-block"]}>
            <span className={styles["fc-details-time"]}>{segment.departure?.time}</span>
            <span className={styles["fc-details-airport"]}>{segment.departure?.airport}</span>
            <span className={styles["fc-details-date"]}>{segment.departure?.date || "20 Jul"}</span>
          </div>

          <div className={styles["fc-details-duration-wrap"]}>
            <span className={styles["fc-details-duration-text"]}>{segment.duration}</span>
            <div className={styles["fc-details-line"]}>
              <div className={styles["fc-details-line-bar"]}></div>
            </div>
            <span className={styles["fc-details-stops-text"]}>{segment.stops || "Direct"}</span>
          </div>

          <div className={styles["fc-details-time-block"]}>
            <span className={styles["fc-details-time"]}>{segment.arrival?.time}</span>
            <span className={styles["fc-details-airport"]}>{segment.arrival?.airport}</span>
            <span className={styles["fc-details-date"]}>{segment.arrival?.date || "20 Jul"}</span>
          </div>
        </div>
      </div>

      <div className={styles["fc-segment-divider"]} />

      {/* Column 2: Flight & Aircraft */}
      <div className={styles["fc-segment-col"]}>
        <h4 className={styles["fc-details-section-title"]}>Flight & Aircraft</h4>
        <div className={styles["fc-details-aircraft-wrap"]}>
          <div className={styles["fc-details-aircraft-icon"]}>
            <Plane size={32} color="#000" fill="#000" />
          </div>
          <div className={styles["fc-details-aircraft-info"]}>
            <span className={styles["fc-details-aircraft-name"]}>{segment.airline?.name || "IndiGo"} {flightNumber}</span>
            <span className={styles["fc-details-aircraft-type"]}>{aircraft}</span>
          </div>
        </div>
      </div>

      <div className={styles["fc-segment-divider"]} />

      {/* Column 3: Amenities */}
      <div className={styles["fc-segment-col"]}>
        <h4 className={styles["fc-details-section-title"]}>Amenities</h4>
        <div className={styles["fc-details-amenities"]}>
          <div className={styles["fc-amenity-card"]}>
            <div className={styles["fc-amenity-icon-box"]}>
              <Wifi size={24} color="#000" strokeWidth={2.5} />
            </div>
            <span className={styles["fc-amenity-label"]}>Free Wi-Fi</span>
          </div>
          <div className={styles["fc-amenity-card"]}>
            <div className={styles["fc-amenity-icon-box"]}>
              <Tv size={24} color="#000" strokeWidth={2.5} />
            </div>
            <span className={styles["fc-amenity-label"]}>TV</span>
          </div>
          <div className={styles["fc-amenity-card"]}>
            <div className={styles["fc-amenity-icon-box"]}>
              <Wine size={24} color="#000" strokeWidth={2.5} />
            </div>
            <span className={styles["fc-amenity-label"]}>Mini Bar</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/**
 * Main Flight Card component.
 * Layout structure:
 * - 6 columns: Airline, Departure, Duration Line, Arrival, Baggage, Price & Action.
 * - Expanding details panel with multiple tabs.
 */
export default function FlightCardDesign({ flight, styles }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('flight');
  
  const airlineName = flight.airline?.name || flight.airline || "Unknown";
  const flightNumber = flight.airline?.code || flight.flightNumber || "N/A";
  const airlineLogo = flight.airline?.logo || flight.logo;
  const isBestValue = flight.badge === "Best Value" || flight.isBestValue;
  
  const formattedPrice = flight.price ? flight.price.toLocaleString('en-IN') : "0";

  // Tab definitions configuration for the expanded panel
  const TABS = [
    { id: 'flight', label: 'Flight Details' },
    { id: 'fare', label: 'Fare Details' },
    { id: 'baggage', label: 'Baggage Info' },
    { id: 'cancellation', label: 'Cancellation' },
    { id: 'skywards', label: `${airlineName} Skywards` }
  ];

  return (
    <article className={styles["fc-card"]}>
      {isBestValue && (
        <div className={styles["fc-badge"]}>
          Best Value
        </div>
      )}
      
      <Heart size={20} color="#B5B5B5" className={styles["fc-heart"]} />

      <div className={styles["fc-main-row"]}>
        
        {/* 1. Airline Info */}
        <div className={styles["fc-airline-col"]}>
          <AirlineLogo name={airlineName} url={airlineLogo} styles={styles} />
          <div className={styles["fc-airline-info"]}>
            <h4 className={styles["fc-airline-name"]}>{airlineName}</h4>
            <p className={styles["fc-flight-no"]}>{flightNumber}</p>
          </div>
        </div>

        {/* 2,3,4. Flight Schedule (Departure -> Duration -> Arrival) */}
        <div className={styles["fc-schedule-col"]}>
          <div className={styles["fc-time-col"]}>
            <h2 className={styles["fc-time"]}>{flight.departure?.time || "00:00"}</h2>
            <p className={styles["fc-airport"]}>{flight.departure?.airport || "AAA"}</p>
          </div>

          <div className={styles["fc-duration-col"]}>
            <span className={styles["fc-duration-text"]}>{flight.duration}</span>
            <div className={styles["fc-duration-line"]}>
              <div className={styles["fc-duration-line-center"]}></div>
            </div>
            <span className={styles["fc-stops-text"]}>{flight.stops || "Direct"}</span>
          </div>

          <div className={styles["fc-time-col"]}>
            <h2 className={styles["fc-time"]}>{flight.arrival?.time || "00:00"}</h2>
            <p className={styles["fc-airport"]}>{flight.arrival?.airport || "BBB"}</p>
          </div>
        </div>

        {/* 5. Baggage Information */}
        <div className={styles["fc-baggage-col"]}>
          <div className={styles["fc-baggage-item"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fillRule="evenodd">
              <g>
                <path d="M16.25 7a.75.75 0 0 1-1.5 0V5.5a2.75 2.75 0 1 0-5.5 0V7a.75.75 0 0 1-1.5 0V5.5a4.25 4.25 0 0 1 8.5 0z" fill="#000000" />
                <path d="m19.342 8.35.8 12a2.253 2.253 0 0 1-2.245 2.4H6.103a2.25 2.25 0 0 1-2.245-2.4l.8-12a2.25 2.25 0 0 1 2.245-2.1h10.194a2.25 2.25 0 0 1 2.245 2.1m-4.856 2.328a2.753 2.753 0 0 1-4.972 0 .75.75 0 1 0-1.355.644 4.25 4.25 0 0 0 7.682 0 .75.75 0 0 0-1.355-.644" fill="#000000" />
              </g>
            </svg>
            <div>
              <span className={styles["fc-baggage-weight"]}>{flight.baggage?.cabin || "7kg"}</span>
              <span className={styles["fc-baggage-type"]}>Cabin</span>
            </div>
          </div>
          
          {flight.baggage?.checked && (
            <div className={styles["fc-baggage-item"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                <g>
                  <path d="M34 44.91V46c0 1.1-.9 2-2 2s-2-.9-2-2v-1h3c.34 0 .68-.03 1-.09M18 45v1c0 1.1-.9 2-2 2s-2-.9-2-2v-1.09c.32.06.66.09 1 .09zM30 3v7h-2V3c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v7h-2V3c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3M33 12H15a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4M19 35a1 1 0 1 1-2 0V20a1 1 0 1 1 2 0zm6 0a1 1 0 1 1-2 0V20a1 1 0 1 1 2 0zm6 0a1 1 0 1 1-2 0V20a1 1 0 1 1 2 0z" fill="#000000" />
                </g>
              </svg>
              <div>
                <span className={styles["fc-baggage-weight"]}>{flight.baggage?.checked}</span>
                <span className={styles["fc-baggage-type"]}>Checked</span>
              </div>
            </div>
          )}
        </div>

        {/* 6. Price & Action Buttons */}
        <div className={styles["fc-price-col"]}>
          <div className={styles["fc-price-text"]}>
            <span className={styles["fc-price-amount"]}>{flight.currency || "₹"}{formattedPrice}</span>
            <span className={styles["fc-price-person"]}>&nbsp;/ person</span>
          </div>
          <div className={styles["fc-price-actions"]}>
            <button className={styles["fc-btn-book"]} onClick={() => alert("Booking...")}>
              Book Now
            </button>
            <button 
              className={styles["fc-view-details"]}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              View Details 
              {isExpanded ? <ChevronUp size={13} className={styles["fc-chevron"]} /> : <ChevronDown size={13} className={styles["fc-chevron"]} />}
            </button>
          </div>
        </div>
        
      </div>

      {/* Expanded details dropdown panel */}
      {isExpanded && (
        <section className={styles["fc-details-panel"]}>
          <nav className={styles["fc-details-tabs"]}>
            {TABS.map(tab => (
              <button 
                key={tab.id}
                className={`${styles["fc-details-tab"]} ${activeTab === tab.id ? styles["fc-details-tab-active"] : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className={styles["fc-details-panel-body"]}>
            {activeTab === 'flight' && (
              <div className={styles["fc-details-segments-wrapper"]}>
                {flight.hasLayover && flight.segments ? (
                  flight.segments.map((segment, index) => {
                    return (
                      <React.Fragment key={`seg-${index}`}>
                        <div className={styles["fc-details-content"]}>
                          <FlightSegment segment={segment} defaultFlightNumber={flightNumber} styles={styles} />
                        </div>
                        
                        {index < flight.segments.length - 1 && (
                          <div className={styles["fc-layover-wrapper"]}>
                            <hr className={styles["fc-layover-line"]} />
                            <div className={styles["fc-layover-container"]}>
                              <h3 className={styles["fc-layover-airport"]}>{flight.layover?.airport || "Dubai International Airport"}</h3>
                              <h2 className={styles["fc-layover-time"]}>
                                {flight.layover?.arrivalTime || "06:45"} - {flight.layover?.departureTime || "09:45"}
                              </h2>
                              <p className={styles["fc-layover-duration"]}>{flight.layover?.transitTime || "3 hr 00 min transit time"}</p>
                            </div>
                            <hr className={styles["fc-layover-line"]} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className={styles["fc-details-content"]}>
                    <FlightSegment segment={flight} defaultFlightNumber={flightNumber} styles={styles} />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'fare' && (
              <div className={styles["fc-tab-pane"]}>
                <h4 className={styles["fc-details-section-title"]}>Fare Details</h4>
                <p className={styles["fc-tab-text"]}>Base Fare: {flight.currency || "₹"}{(flight.price * 0.85).toLocaleString('en-IN')}</p>
                <p className={styles["fc-tab-text"]}>Surcharges & Taxes: {flight.currency || "₹"}{(flight.price * 0.15).toLocaleString('en-IN')}</p>
                <p className={styles["fc-tab-total-price"]}>Total Price: {flight.currency || "₹"}{formattedPrice}</p>
              </div>
            )}

            {activeTab === 'baggage' && (
              <div className={styles["fc-tab-pane"]}>
                <h4 className={styles["fc-details-section-title"]}>Baggage Allowances</h4>
                <p className={styles["fc-tab-text"]}>Cabin Baggage: {flight.baggage?.cabin || "7kg"} (1 piece per passenger)</p>
                {flight.baggage?.checked && (
                  <p className={styles["fc-tab-text"]}>Checked Baggage: {flight.baggage?.checked} (1 piece per passenger)</p>
                )}
              </div>
            )}

            {activeTab === 'cancellation' && (
              <div className={styles["fc-tab-pane"]}>
                <h4 className={styles["fc-details-section-title"]}>Cancellation Policy</h4>
                <p className={styles["fc-tab-error-text"]}>Non-refundable Flight segment</p>
                <p className={styles["fc-tab-text"]}>Cancellation fee applies if cancelled within 24 hours of booking. Please contact airline customer support for details.</p>
              </div>
            )}

            {activeTab === 'skywards' && (
              <div className={styles["fc-tab-pane"]}>
                <h4 className={styles["fc-details-section-title"]}>{airlineName} Skywards Integration</h4>
                <p className={styles["fc-tab-text"]}>Earn miles on this flight segment! Log in to your {airlineName} loyalty account during checkout to credit miles automatically.</p>
              </div>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
