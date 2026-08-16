import React from 'react'
import Img1 from '../assets/Image-Container-1.png'
import Img2 from '../assets/Image-Container-2.png'
import Img3 from '../assets/Image-Container-3.png'
import Img4 from '../assets/Image-Container-4.png'
import Img5 from '../assets/Image-Container-5.png'
import Img6 from '../assets/Image-Container-6.jpg'
import Icon1 from '../assets/Pipe-Installation.svg'
import Icon2 from '../assets/Pipe-Plumbing.svg'
import Icon3 from '../assets/Pipe-Dual Pipe.svg'
import Icon4 from '../assets/Pipe-Maintanence.svg'
import Icon5 from '../assets/Pipe-Line Consultation.svg'
import Icon6 from '../assets/Pipe-Sunction.svg'
import RightArrow from '../assets/Right Arrow.svg'
import Title from './Title'
import { motion } from "framer-motion"

// Array containing service data
const items = [
    {
      id: 1,
      title: 'Plumbing installation',
      icon: Icon1,
      image: Img1,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
    {
      id: 2,
      title: 'General Plumbing',
      icon: Icon2,
      image: Img2,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
    {
      id: 3,
      title: 'Plumbing Maintanence',
      icon: Icon3,
      image: Img3,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
    {
      id: 4,
      title: 'Fixing Pipes',
      icon: Icon4,
      image: Img4,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
    {
      id: 5,
      title: 'Plumbing Line Consultation',
      icon: Icon5,
      image: Img5,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
    {
      id: 6,
      title: 'Drain Cleaning',
      icon: Icon6,
      image: Img6,
      disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero iure distinctio id, quos amet rem consectetur, velit reprehenderit porro aliquam incidunt. Saepe, iusto eaque sit optio vero placeat odit.'
    },
];

const Service = () => {
  return (
    <div id='service' className='px-10 py-12 h-auto flex flex-col justify-center items-center bg-white rounded'>
      
      {/* Section Title Component */}
      <Title title="Our Services" desc="What we can do for you" />

      {/* Grid Layout Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl'
      >
        {items.map((item, index) => (

          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col justify-between bg-gray-50 rounded border-b-4 border-blue-400 shadow-md hover:bg-blue-50 transition-all duration-300 cursor-pointer overflow-hidden'
          >
            <div>
              {/* Service Image */}
              <img src={item.image} alt={item.title} className='w-full h-48 object-cover rounded-t'/>

              {/* Service Title and Icon Container */}
              <div className='flex justify-between w-full items-center py-4 px-6'>
                <h2 className='text-lg text-blue-950 font-semibold'>{item.title}</h2>
                <img src={item.icon} alt="" className='w-8'/>
              </div>

              {/* Service Description */}
              <p className='text-sm text-gray-600 pb-4 px-6'>{item.disc}</p>
            </div>

            {/* Learn More Link Section */}
            <div className='flex items-center justify-between pt-2 border-t border-gray-200 px-6 py-4'>
              <a href="#" className='text-blue-950 font-medium hover:underline'>Learn more</a>
              <img src={RightArrow} alt="" className='w-6 cursor-pointer'/>
            </div>

          </motion.div>

        ))}
      </motion.div>

    </div>
  )
}

export default Service