import React from 'react'
import LocationIcon from '../assets/Location.svg'
import EmailIcon from '../assets/Email.svg'
import CallIcon from '../assets/Call-Red.svg'

const Contact = () => {
  return (
    <div className='w-full bg-blue-50 px-4 py-20 sm:px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between'>
        
        {/* Left Section - Contact Info */}
        <div className='w-full md:w-1/2 lg:w-5/12'>
          <h2 className='font-semibold text-3xl sm:text-4xl text-blue-950'>Contact Us</h2>
          <p className='pt-4 text-gray-700 text-sm sm:text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo doloribus in fugiat voluptate cumque saepe accusantium velit deleniti.
          </p>

          <div className='mt-6 space-y-4 text-gray-900'>
            <div className='flex gap-3 items-center'>
              <img src={LocationIcon} alt="Location" className='w-5 h-5 object-contain'/>
              <p className='text-sm sm:text-base'>3249 Henery Street, Kansas 67204</p>
            </div>              

            <div className='flex gap-3 items-center'>
              <img src={EmailIcon} alt="Email" className='w-5 h-5 object-contain'/>
              <p className='text-sm sm:text-base'>info@underrrated.com</p>
            </div>

            <div className='flex gap-3 items-center'>
              <img src={CallIcon} alt="Call" className='w-5 h-5 object-contain'/>
              <p className='text-sm sm:text-base'>+(100) 234-5678</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className='w-full md:w-1/2 lg:w-6/12 bg-white rounded-2xl p-6 sm:p-8 shadow-md'>
          <h3 className='font-semibold text-2xl sm:text-3xl text-center text-blue-950 mb-6'>
            Request Your Services Today
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4'>
            <div>
              <label className='block text-gray-600 text-sm font-medium mb-1'>Your Name</label>
              <input 
                type="text" 
                placeholder='John Doe' 
                className='w-full border border-blue-300 rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition'
              />
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-medium mb-1'>Email</label>
              <input 
                type="email" 
                placeholder='johndoe@gmail.com' 
                className='w-full border border-blue-300 rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition'
              />
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-medium mb-1'>Your Address</label>
              <input 
                type="text" 
                placeholder='3249 Henery Street, Wichita' 
                className='w-full border border-blue-300 rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition'
              />
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-medium mb-1'>Phone Number (Optional)</label>
              <input 
                type="tel" 
                placeholder='+123 000 000' 
                className='w-full border border-blue-300 rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition'
              />
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-medium mb-1'>Message</label>
              <textarea 
                rows="4"
                placeholder='Enter your message' 
                className='w-full border border-blue-300 rounded-lg p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none'
              />
            </div>

            <button 
              type="submit"
              className='mt-2 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 active:scale-[0.99] transition-all cursor-pointer'
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact