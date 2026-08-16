import React, { useState } from 'react'
import Email from '../assets/Email.svg'
import Phone from '../assets/Phone.svg'
import Facebook from '../assets/Social-facebook-1.svg'
import Instagram from '../assets/Social-Instagram.svg'
import Twitter from '../assets/Social-twitter.svg'
import WhatsApp from '../assets/Social-Whatsapp.svg'
import Logo from '../assets/Logo.svg'
import Darrow from '../assets/Arrow Down.svg'
import MenuOpen from '../assets/Hamburger-02.svg'
import Close from '../assets/close_icon.svg'
import Rarrow from '../assets/Arrow Right-1.svg'
import RightArrow from '../assets/Right Arrow.svg'
import Service from './Service'
import { motion } from "framer-motion"

const Navbar = () => {
  // States to manage dropdowns and mobile menu visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isRarroOpen, setRarroOpen] = useState(false)

  return (
      <motion.div
      initial={{opacity: 0,y: -50}}
      animate={{opacity:1,y: 0}}
      transition={{duration:0.6, ease:'easeOut'}}
      className='w-full flex flex-col justify-between items-center sm:py-3 fixed top-0 left-0 z-50'>
      
      {/* Top Bar - Hidden on mobile, visible on small screens and above */}
      <div className='hidden text-white bg-black sm:flex justify-between items-center w-full sm:px-15 sm:py-1.5 top-0 absolute gap-1.5'>
        <p className='text-xs'>Working Time: Mon-Thu 9.00 AM - 5.00 PM</p>

        {/* Contact Info */}
        <div className='flex gap-5'>
          <div className='inline-flex justify-between items-center'>
            <img src={Email} alt="email-icon" className='w-5' />
            <p className='text-xs px-2'>info@gmail.com</p>
          </div>

          <div className='inline-flex justify-between items-center'> 
            <img src={Phone} alt="phone-icon" />
            <p className='text-xs px-1'>+(100)234-5678</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-2'>
          <img src={Facebook} alt="facebook-icon" className='w-5' />
          <img src={Instagram} alt="instagram-icon" className='w-5' />
          <img src={Twitter} alt="twitter-icon" className='w-5' />
          <img src={WhatsApp} alt="whatsApp-icon" className='w-5' />
        </div>
      </div>

      {/* Main Navbar */}
      <div className='w-full p-5 md:pt-9 md:px-9 flex justify-between items-center bg-white shadow-sm'>
        
        {/* Brand Logo */}
        <img src={Logo} alt="logo" className='cursor-pointer' />
        
        {/* Mobile Hamburger Menu Icon */}
        <img 
          src={MenuOpen} 
          alt="menu-open" 
          className='w-8 scale-x-[-1] flex lg:hidden cursor-pointer' 
          onClick={() => setMenuOpen(true)} 
        />

        {/* Desktop Navbar Links */}
        <div className='hidden lg:inline-flex items-center gap-5 relative'>
          
          <nav>
            <a 
              href="#" 
              className='text-sm inline-flex gap-2 hover:text-blue-600 transition-all'
              onClick={() => setDropdownOpen(false)}
            >
              Home
              <img src={Darrow} alt="" className='w-3' />
            </a>
          </nav>

          <nav>
            <a 
              href="#blog" 
              className='text-sm inline-flex gap-2 hover:text-blue-600 transition-all'
              onClick={() => setDropdownOpen(false)}
            >
              Blog
              <img src={Darrow} alt="" className='w-3' />
            </a>
          </nav>

          {/* Pages Link with Dropdown Menu */}
          <div className='relative'>
            <button 
              onClick={() => setDropdownOpen(!isDropdownOpen)} 
              className='text-sm inline-flex items-center gap-2 hover:text-blue-600 transition-all cursor-pointer focus:outline-none'
            >
              Pages
              <img 
                src={Darrow} 
                alt="" 
                className={`w-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Desktop Dropdown Box */}
            {isDropdownOpen && (
              <div className='absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 flex flex-col z-50'>
                <a 
                  href="#about" 
                  className='px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all'
                  onClick={() => setDropdownOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="#service" 
                  className='px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all'
                  onClick={() => setDropdownOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#page3" 
                  className='px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all'
                  onClick={() => setDropdownOpen(false)}
                >
                  Our Team
                </a>
                <a 
                  href="#page4" 
                  className='px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all'
                  onClick={() => setDropdownOpen(false)}
                >
                  FAQ
                </a>
              </div>
            )}
          </div>

          <nav>
            <a 
              href="#contact" 
              className='text-sm inline-flex gap-2 hover:text-blue-600 transition-all'
              onClick={() => setDropdownOpen(false)}
            >
              Contact Us
              <img src={Darrow} alt="" className='w-3' />
            </a>
          </nav>

          {/* Schedule Call Button */}
          <button 
            className='text-sm bg-blue-500 text-white px-6 py-2.5 rounded cursor-pointer hover:bg-blue-600' 
            onClick={() => setDropdownOpen(false)}
          >
            Schedule a Call
          </button> 

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`flex flex-col h-screen w-full lg:hidden bg-[#0c1017] fixed top-0 right-0 z-40 p-6 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Icon for Mobile Menu */}
        <img 
          className='w-6 cursor-pointer self-end mb-4' 
          src={Close} 
          alt="close-icon" 
          onClick={() => setMenuOpen(false)} 
        />

        {/* Mobile Call Button */}
        <button className='text-sm bg-blue-500 text-white px-4 py-3.5 rounded-lg cursor-pointer hover:bg-blue-600 mb-6 w-[60%] font-medium transition-all duration-300'>
          Schedule a Call
        </button>

        {/* Mobile Navigation List */}
        <div className='flex flex-col gap-1'>

          {/* Home Link */}
          <a 
            href="#" 
            className='p-3 flex flex-row justify-between items-center border-b border-gray-800 text-white hover:text-blue-400 transition-all'
            onClick={() => setMenuOpen(false)}
          >
            <span className='text-base font-medium'>Home</span>
            {/* <img src={Rarrow} alt="arrow" className='w-4 brightness-200' /> */}
          </a>

          {/* Blog Link */}
          <a 
            href="#blog" 
            className='p-3 flex flex-row justify-between items-center border-b border-gray-800 text-white hover:text-blue-400 transition-all'
            onClick={() => setMenuOpen(false)}
          >
            <span className='text-base font-medium'>Blog</span>
            {/* <img src={Rarrow} alt="arrow" className='w-4 brightness-200' /> */}
          </a>

          {/* Expandable Pages Tab with Smooth Animated Dropdown */}
          <div className='border-b border-gray-800'>
            <div 
              className='p-3 flex flex-row justify-between items-center text-white hover:text-blue-400 transition-allcursor-pointer'
              onClick={() => setRarroOpen(!isRarroOpen)}
            >
              <span className='text-base font-medium'>Pages</span>
              <img 
                src={Rarrow} 
                alt="arrow-right" 
                className={`w-4 transition-transform duration-300 ${isRarroOpen ? 'rotate-90' : ''}`} 
              />
            </div>

            {/* Smooth Grid Animation for Mobile Dropdown Links */}
            <div className={`grid transition-all duration-300 ease-in-out ${isRarroOpen ? 'grid-rows-[1fr] opacity-100 pb-2' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
              <div className='overflow-hidden flex flex-col pl-4 w-full gap-1'>
                <a 
                  href="#about" 
                  className='px-3 py-2 text-sm text-gray-300 hover:text-white transition-all'
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="#service" 
                  className='px-3 py-2 text-sm text-gray-300 hover:text-white transition-all'
                  onClick={() => setMenuOpen(false)}
                >
                   Services
                </a>
                <a 
                  href="#our-team" 
                  className='px-3 py-2 text-sm text-gray-300 hover:text-white transition-all'
                  onClick={() => setMenuOpen(false)}
                >
                  Our Team
                </a>
                <a 
                  href="#FAQ" 
                  className='px-3 py-2 text-sm text-gray-300 hover:text-white transition-all'
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Link */}
          <a 
            href="#contact" 
            className='p-3 flex flex-row justify-between items-center border-b border-gray-800 text-white hover:text-blue-400 transition-all'
            onClick={() => setMenuOpen(false)}
          >
            
            <span className='text-base font-medium'>Contact Us</span>
            {/* <img src={Rarrow} alt="arrow" className='w-4 brightness-200' /> */}
          </a>

        </div>

        {/* Mobile Contact Footer Info (Phone & Email) */}
        <div className='mt-4 pt-6 flex flex-col gap-3 px-3 pb-4'>
          <div className='flex items-center gap-3 pb-2'>
            <img src={Phone} alt="phone" className='w-5 brightness-200' />
            <span className='text-xs text-white'>+(100) 234-5678</span>
          </div>
          <div className='flex items-center gap-3 pb-2'>
            <img src={Email} alt="email" className='w-5 brightness-200' />
            <span className='text-xs text-white'>info@gmail.com</span>
          </div>
        </div>
        
      </div>

    </motion.div>
  )
}

export default Navbar