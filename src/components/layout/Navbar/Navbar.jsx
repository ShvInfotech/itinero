import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LoginModal from "../../../features/auth/components/LoginModal";
import Switch from "../../ui/sky-toggle";
import "./Navbar.css";

/**
 * Top navigation bar — uses Navbar.css class system
 * with built-in responsive breakpoints (1440 / 1024 / 768 / 480).
 */
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
        <div className="navbar__inner relative z-[100]">

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
            <a href="">

            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/5mm2143s_expires_30_days.png"
              className="navbar__logo-text"
              alt="Itinero Logo"
            />
            </a>
          </div>

          {/* Flexible spacer */}
          <div className="navbar__spacer"></div>

          {/* Language / Currency Switcher */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 mx-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">USD</span>
            <img 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hurs0BoZOo/cbhq3fu3_expires_30_days.png" 
              alt="Dropdown" 
              className="w-3 h-3 opacity-60 dark:invert"
            />
          </div>

          {/* Theme Toggle */}
          <div className="mx-2 md:mx-4 flex items-center">
            <Switch isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
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
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
