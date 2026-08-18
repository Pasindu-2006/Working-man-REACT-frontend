import React from 'react'
import AboutImg from '../assets/Container.png'
import CheckIcon from '../assets/Check.svg'
import { easeOut, motion } from "motion/react"


const AboutUs = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}

    id='about' className='px-10 pt-15 sm:pt-35 sm:px-30 flex flex-col items-center justify-between bg-white'>
        <motion.div
        initial={{opacity: 0,y: 30}}
        whileInView={{opacity:1,y: 0}}
        transition={{duration:0.5}}
        viewport={{once:true}}
        
        className='flex flex-col lg:flex-row items-center gap-12'>
            
            {/* Shadow Effect eka ekka Image eka */}
            <div className='relative inline-block'>
                {/* Background Blue Box */}
                <div className='absolute inset-0 translate-x-3 translate-y-3 bg-blue-500 rounded'></div>
                
                {/* Main Image */}
                <img 
                    src={AboutImg} 
                    alt="About Us" 
                    className='hidden sm:block relative z-10 max-w-[full] w-full rounded-lg shadow-md object-cover' 
                />
            </div>

            {/* Content Section */}
            <div className='text-center sm:text-left'>
                <p className='sm:text-lg text-blue-600 '>About Us</p>

                <h2 className='text-2xl sm:text-4xl font-medium py-5 text-blue-950'>
                    Taking regular plumbing care will save you time and money
                </h2>
                <p className='text-base text-gray-700 py-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat vero, a illum aperiam eum nesciunt reiciendis. Corrupti reiciendis totam minima maiores consequatur, vero mollitia nemo dolores, impedit nisi est provident.
                </p>
                
                <div className='flex flex-row items-center gap-3.5 pt-4'>
                    <img src={CheckIcon} alt="Check" />
                    <p className='text-blue-950 font-medium'>Present Sodales Orci</p>
                </div>

                <div className='flex flex-row items-center gap-3.5 pt-4'>
                    <img src={CheckIcon} alt="Check" />
                    <p className='text-blue-950 font-medium'>Curabiur Dignissim</p>
                </div>

                <div className='flex flex-row items-center gap-3.5 pt-4'>
                    <img src={CheckIcon} alt="Check" />
                    <p className='text-blue-950 font-medium'>Nulla Condummentrum</p>
                </div>
                 
                <div className='pt-8'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded transition-colors cursor-pointer'>
                        More About Us
                    </button>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default AboutUs