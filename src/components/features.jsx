import React from 'react'
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const Features = () => {
  return (
    <div className='flex justify-center flex-col mt-[450px] sm:mt-[150px]'>
        <div className='flex flex-col text-center '>
            <h1 className='uppercase bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent font-bold text-[10px] sm:text-[15px]'>features</h1>
            <p className='mt-10 sm:m-[150px] text-4xl sm:text-5xl'> Easily build <spam className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent' >your code</spam></p>
        </div>
        <div className='flex justify-around space-x-[-20%] mt-10'>
            <div className='flex justify-center flex-col space-y-6 w-[15%]'>
                <h1 className='text-[10px] sm:text-[20px]'>Drag-and-Drop interface</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
            <div className='flex justify-center flex-col space-y-6 w-[15%]'>
                <h1 className='text-[10px] sm:text-[20px]'>Multi-Platform Compability</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
            <div className='flex justify-center flex-col space-y-6 w-[15%]'>
                <h1 className='text-[10px] sm:text-[20px]'>Built-in Template</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
        </div>
        <div className='flex justify-around space-x-[-20%] mt-[25px]'>
            <div className='flex justify-center flex-col space-y-6 w-[15%] '>
                <h1 className='text-[10px] sm:text-[20px]'>Drag-and-Drop interface</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
            <div className='flex justify-center flex-col space-y-6 w-[15%]'>
                <h1 className='text-[10px] sm:text-[20px]'>Multi-Platform Compability</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
            <div className='flex justify-center flex-col space-y-6 w-[15%]'>
                <h1 className='text-[10px] sm:text-[20px]'>Built-in Template</h1>
                <p className='text-neutral-500 text-[10px] sm:text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quasi?</p>
            </div>
        </div>


    </div>
  )
}

export default Features