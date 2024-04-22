import React from 'react'
import Code from '../assets/code.jpg'
const More = () => {
  return (
    <div  className='flex mt-[150px] flex-col justify-center'>
      <div className='flex justify-center text-5xl mb-[30px] text-center'>
        <p>Accelerate your <a className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>coding workflow.</a></p>
      </div>
      <div className='flex justify-center col'>
        <img src={Code} className='h-[35%] w-[40%] ml-[120px]'></img>
        <div className='space-y-12 w-[35%] pt-[70px] '>
          <div className='w-[60%] space-y-3 '>
          <h1 className=''>Code merge made easy</h1>
          <p className='font-light text-neutral-400 text-[14px] w-[120%]'>Track the performance of your apps and gain insights into user behaviour</p>
          </div>
          <div className='w-[60%] space-y-3'>
          <h1 className=''>Review code without worry</h1>
          <p className='font-light text-neutral-400 text-[14px] w-[120%]'>Track the performance of your apps and gain insights into user behaviour</p>
          </div>
          <div className='w-[60%] space-y-3'>
          <h1 className=''>AI Assistance to reduce time</h1>
          <p className='font-light text-neutral-400 text-[14px] w-[120%]'>Track the performance of your apps and gain insights into user behaviour</p>
          </div>
          <div className='w-[60%] space-y-3'>
          <h1 className=''>Share work in minutes</h1>
          <p className='font-light text-neutral-400 text-[14px] w-[120%]'>Track the performance of your apps and gain insights into user behaviour</p>
          </div>
          
        </div>
      </div>
      

    </div>
  )
}

export default More