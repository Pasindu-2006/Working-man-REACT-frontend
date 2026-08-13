import React from 'react'
import Bgimg from '../assets/bg.jpg'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-35 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden bg-white'>
        <h1 className='text-[35px] sm:text md:text-[50px] sm:font-medium font-semibold xl:leading-23.75 max-w-5xl'>Discipline will take you places motivation can't</h1>

        <p className='text-[16px] sm:px-1 sm:max-w-lg px-5 text-gray-600'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        <div className='flex flex-row gap-2'>
            <button className='bg-black text-white px-2.5 py-1.5 rounded-full text-sm cursor-pointer'>Shedule Demo</button>
            <button className='border-2 px-2.5 py-1.5 rounded-full text-sm cursor-pointer'>Conatact Sales</button>
        </div>

        <img src={Bgimg} alt="bg image" className='sm:px-20 w-fit h-auto'/>
    </div>
  )
}

export default Hero