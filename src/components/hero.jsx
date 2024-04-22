import React from 'react'
import V1 from '../assets/video1.mp4/'
import V2 from '../assets/video2.mp4/'

const Hero = () => {
  return (
    <div className='h-screen flex flex-col'>
        <div className='flex justify-center mt-[100px] font-light text-5xl'>
            <div className=''>
            <h1>VirtualR built tool <span className='text-orange-500'>for</span></h1>
            <h1 className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent flex justify-center'>Developers</h1>
            </div>
        </div>
        <div className='text-gray-500 mt-10 text-center max-w-2xl mx-auto'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sint fugit consequuntur ipsam aspernatur, temporibus quo molestiae nulla ducimus! Architecto similique commodi incidunt consequuntur et distinctio dolor animi debitis ratione.</p>
        </div>
        <div className='flex justify-center space-x-8 mt-10 '>
            <a className='rounded-lg p-2 bg-gradient-to-r from-orange-500 to-orange-800 font-light' href='#'>Start for Free</a>
            <a className='rounded-lg p-2 border-2 border-orange-500 font-light' href='#'>Documentation</a>
        </div>
        <div className='flex mt-10 justify-center space-x-5 sm:flex-row flex-col'>
            <video 
            autoPlay
            loop
            muted
            className='rounded-lg w-1/2 border mx-5 my-4 border border-orange-500 shadow-orange-400 w-[500px] h-[300px]'
            >
            <source src={V2} type='video/mp4'/>
            </video>

            <video 
            autoPlay
            loop
            muted
            className='rounded-lg w-1/2 border mx-2 my-4 border border-orange-500 shadow-orange-400 w-[500px] h-[300px]'
            >
            <source src={V1} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Hero
