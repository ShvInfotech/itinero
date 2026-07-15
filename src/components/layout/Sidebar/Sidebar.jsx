import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed left-0 right-0 bottom-0 top-[74px] bg-black/30 z-[100]" 
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Content */}
      <div 
        className={`fixed top-[74px] bottom-0 left-0 w-[280px] bg-white shadow-xl z-[101] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col">
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 bg-[#E8EDF2] rounded-md text-[#111418] font-medium text-[15px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                <span>Flights</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6h-2V4c0-1.11-.89-2-2-2h-2c-1.11 0-2 .89-2 2v2H7c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6-2h2v2h-2V4zm0 16H9V9h2v11zm4 0h-2V9h2v11z"/></svg>
                <span>Packages</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1.17L17 1 16.17 3H15v1.17L17 5l.83-2H19zM6.5 6 5 2l-1.5 4L0 7.5 3.5 9 5 13l1.5-4L10 7.5zm5.5 5-2-5.5L8 11l-5.5 2L8 15l2 5.5L12 15l5.5-2zM15 15h-1.17L13 13l-.83 2H11v1.17l1.17.83L13 19l.83-2H15z"/></svg>
                <span>Plan With AI</span>
              </a>
            </li>
            
            <div className="border-t border-[#E8EDF2] my-2 mx-4"></div>
            
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                <span>Explore</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span>Trip</span>
              </a>
            </li>
            
            <div className="border-t border-[#E8EDF2] my-2 mx-4"></div>
            
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <span className="text-xl leading-none w-5 text-center">🇮🇳</span>
                <span>English</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <span className="text-[20px] font-medium leading-none w-5 text-center">₹</span>
                <span>Indian rupee</span>
              </a>
            </li>
            <li className="px-4 py-1">
              <a href="#" className="flex items-center space-x-4 px-4 py-3 text-[#637588] hover:bg-[#F0F4F8] rounded-md font-medium text-[15px] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
                <span>Feedback</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
