import React from 'react'
import RightArrow from '../assets/Right Arrow.svg'



const Title = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full bg-white relative'>
      {/* top section and title */}
        <div className='flex flex-col items-center'>
            <div className='flex  gap-2 pt-8 sm:pt-20'>
                <p className='sm:text-lg text-blue-600 '>Service We Provide</p>
                <img src={RightArrow} alt="" />
            </div>
            <h2 className='text-center font-semibold text-2xl sm:text-4xl sm:font-medium pt-2 pb-5 text-blue-950'>The Best Plumbing Service & Maintainence</h2>
        </div>


    </div>
  )
}

export default Title