import React from 'react'

import BoraBora from '../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg';
import BoraBora2 from '../assets/photo-1505159940484-eb2b9f2588e2.avif';
import Maldives from '../assets/photo-1455156218388-5e61b526818b.avif';
import Maldives2 from '../assets/photo-1621856818246-0a053d5b276b.avif';
import KeyWest from '../assets/photo-1472982728022-601a8d99e9af.avif';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Discover the Ultimate Getaway</h1>
        <p className='py-4'>All-Inclusive Luxury on the World's Most Stunning Places</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='w-full h-full object-cover' src={BoraBora2} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
            <img className='w-full h-full object-cover' src={KeyWest} alt="/" />
        </div>
    </div>
  )
}

export default Destinations