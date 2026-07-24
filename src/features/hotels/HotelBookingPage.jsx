import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageLayout } from "@/components/layout";
import BookingStepper from './components/BookingStepper';
import HotelRoomCard from './components/HotelRoomCard';
import HotelBookingSummary from './components/HotelBookingSummary';
import styles from './HotelBookingPage.module.css';

export default function HotelBookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Dummy data based on the design
  const base = import.meta.env.BASE_URL;
  
  const rooms = [
    {
      id: 1,
      title: 'Deluxe Room',
      image: `${base}hotel_room.png`,
      bedType: 'King Bed',
      capacity: 2,
      size: '220sq ft',
      view: 'City View',
      floor: 'High Floor',
      freeCancellation: true,
      freeBreakfast: true,
      payAtHotel: true,
      roomsLeft: 2,
      price: 2599,
      taxes: 4679
    },
    {
      id: 2,
      title: 'Executive Room',
      image: `${base}hotel_room.png`,
      bedType: 'King Bed',
      capacity: 2,
      size: '220sq ft',
      view: 'Sea View',
      floor: 'Balcony',
      freeCancellation: true,
      freeBreakfast: true,
      payAtHotel: true,
      roomsLeft: null,
      price: 2999,
      taxes: 4679
    },
    {
      id: 3,
      title: 'Family Suite',
      image: `${base}hotel_room.png`,
      bedType: 'King Bed',
      capacity: 2,
      size: '220sq ft',
      view: 'Ocean View',
      floor: 'High Floor',
      freeCancellation: true,
      freeBreakfast: true,
      payAtHotel: true,
      roomsLeft: null,
      price: 4599,
      taxes: 4679
    }
  ];

  const summaryData = {
    hotelName: 'Atlantis The Palm',
    hotelImage: `${base}hotel_room.png`,
    location: 'Palm Jumeirah, Dubai, UAE',
    checkIn: { date: '12 May 2026', day: 'Mon' },
    checkOut: { date: '17 May 2026', day: 'Sat' },
    guests: 2,
    rooms: 1,
    nights: 5,
    roomsTotal: 129995,
    taxesTotal: 24665,
    totalPrice: 154660
  };

  const handleSelectRoom = (roomId) => {
    navigate(`/hotel/${id || '123'}/guest-details`);
  };

  return (
    <PageLayout>
      <div className={styles.pageContainer}>
        {/* Stepper Block */}
        <div className={styles.stepperWrapper}>
          <BookingStepper currentStep={currentStep} />
        </div>
        
        {/* Main Content Layout */}
        <div className={styles.mainLayout}>
          <div className={styles.roomsList}>
            {rooms.map(room => (
              <HotelRoomCard key={room.id} room={room} onSelect={() => handleSelectRoom(room.id)} />
            ))}
          </div>
          
          <div className={styles.sidebar}>
            <HotelBookingSummary bookingInfo={summaryData} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
