import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assests/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // Mobile nav menu
  const [showDropdown, setShowDropdown] = useState(false); // Profile dropdown
  const [token, setToken] = useState(true); // Mock token

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative px-4 md:px-10">
      
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/"><li className="py-1">HOME</li></NavLink>
        <NavLink to="/doctors"><li className="py-1">ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li className="py-1">ABOUT</li></NavLink>
        <NavLink to="/contact"><li className="py-1">CONTACT</li></NavLink>
      </ul>

      {/* Right Section: Profile + Hamburger */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown Icon" />
            </div>

            {/* Profile Dropdown */}
            {showDropdown && (
              <div className="absolute top-12 right-0 text-base font-medium text-gray-600 z-50">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-md">
                  <p
                    onClick={() => {
                      navigate('/my-profile');
                      setShowDropdown(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate('/my-appointments');
                      setShowDropdown(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Hamburger Icon - Mobile Only */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Navigation Menu */}
      {showMenu && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-white z-40 shadow-lg flex flex-col p-6 gap-6 md:hidden">
          <div className="flex justify-between items-center">
            <img src={assets.logo} alt="Logo" className="w-32" />
            <img
              src={assets.cross_icon}
              alt="Close"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)}>ALL DOCTORS</NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}>ABOUT</NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>CONTACT</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
