import React from 'react'
import Bgimg from '../assets/body.jpg'
import HeroImage from '../assets/Image-Container.png'

const Hero = () => {
  return (
    <section 
      className='relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-32 sm:pt-40 flex items-center'
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>
      
      {/* Main Content Container - Responsive Flex (Column on mobile, Row on Desktop) */}
      <div className='relative z-10 max-w-7xl mx-auto px-5 md:px-9 flex flex-col md:flex-row items-center justify-between w-full gap-10'>
        
        {/* Left Text Content */}
        <div className='max-w-xl text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight'>
            Plumbing Expert Right at Your Doorstep
          </h1>
          <p className='text-sm sm:text-base text-gray-300 py-4'>
            Our plumbers are the most recognized professionals globally because we're committed to excellent service, and nothing wears on homeowners like the idea of handling plumbing problems.
          </p>
          
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2'>
            <button className='text-sm bg-blue-500 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-600 transition-all font-medium'>
              Request a Job Estimate
            </button>
            <button className='text-sm border border-white text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 transition-all font-medium'>
              Pricing Plans
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={HeroImage} alt="hero-container" className='w-full max-w-md md:max-w-lg object-contain' />
        </div>

      </div>
    </section>
  )
}

export default Hero