import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LoginModal from "../../../features/auth/components/LoginModal";
import "./Navbar.css";

/**
 * Top navigation bar — uses Navbar.css class system
 * with built-in responsive breakpoints (1440 / 1024 / 768 / 480).
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
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo area: hamburger + brand */}
          <div className="navbar__logo">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="navbar__hamburger"
              aria-label="Toggle menu"
            >
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/a43ymvp2_expires_30_days.png"
                className="navbar__logo-icon"
                alt="Menu"
              />
            </button>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/5mm2143s_expires_30_days.png"
              className="navbar__logo-text"
              alt="Itinero Logo"
            />
          </div>

          {/* Flexible spacer */}
          <div className="navbar__spacer"></div>

          {/* Notification / search action */}
          <div className="navbar__notification">
            <button
              className="navbar__notification-btn"
              onClick={() => setIsLoginModalOpen(true)}
              aria-label="Search"
            >
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/mrfipbzt_expires_30_days.png"
                className="navbar__notification-icon"
                alt="Action"
              />
            </button>
          </div>

          {/* Primary action button */}
          <button
            className="navbar__action-btn"
            onClick={() => setIsLoginModalOpen(true)}
            aria-label="Account menu"
          >
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/92plxgrv_expires_30_days.png"
              className="navbar__action-icon"
              alt="Menu"
            />
          </button>

        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
