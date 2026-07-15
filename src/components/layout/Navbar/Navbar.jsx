import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LoginModal from "../../../features/auth/components/LoginModal";
import "./Navbar.css";

/**
 * Top navigation bar (Tailwind updated)
 */
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-[105] bg-[#F2F2F2] py-3 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="flex items-center self-stretch ml-6 mr-[39px]">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-transparent border-0 p-0 cursor-pointer flex items-center justify-center mr-[33px]"
          >
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/a43ymvp2_expires_30_days.png"}
            className="w-10 h-10 object-fill"
            alt="Menu Icon"
          />
        </button>
      <img
        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/5mm2143s_expires_30_days.png"}
        className="w-[120px]  object-fill"
        alt="Itinero Logo"
      />
      <div className="flex-1 self-stretch"></div>
      
      {/* Search / User Action Container */}
      <div className="flex flex-col shrink-0 items-start bg-[#F972111A] py-[3px] pl-[3px] pr-10 mr-[18px] rounded-[27px]">
        <button
          className="flex flex-col items-start bg-[#F97211] text-left py-[5px] px-1.5 rounded-[27px] border-0 cursor-pointer hover:bg-[#E86000] transition-colors"
          onClick={() => setIsLoginModalOpen(true)}
        >
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/mrfipbzt_expires_30_days.png"}
            className="w-4 h-4 object-fill"
            alt="Action Icon"
          />
        </button>
      </div>

      {/* Menu / Auth Action */}
      <button
        className="flex flex-col shrink-0 items-start bg-[#000E28] text-left p-[15px] rounded-[25px] border-0 cursor-pointer hover:bg-gray-800 transition-colors"
        onClick={() => setIsLoginModalOpen(true)}
      >
        <img
          src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/92plxgrv_expires_30_days.png"}
          className="w-5 h-5 object-fill"
          alt="Menu Icon"
        />
        </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
