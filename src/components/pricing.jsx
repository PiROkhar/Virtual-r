import React from 'react'

const Pricing = () => {
  return (
    <div className='mt-[150px] mx-auto '>
        <div className='flex justify-center '>
            <h1 className='text-5xl'>Pricing</h1>
        </div>
        <div className='flex justify-center mt-[30px] space-x-10 sm:col'>
            <div className='font-light border rounded-lg p-6 space-y-2 border-gray-400 w-[300px]'>
                <p className='text-3xl font-medium mb-4 '>Free</p>
                <h1 className='text-3xl font-medium'>$0<spam className='text-[10px] opacity-70' >/Month</spam></h1>
                <p className='font-light text-[15px] opacity-90'>Private board sharing</p>
                <p className='font-light text-[15px] opacity-90'>5 GB Storage</p>
                 <p className='font-light text-[15px] opacity-90'>Web Analytics</p>
                <p className='font-light text-[15px] opacity-90'>Private Mode</p>
                <a href='#' className=' flex justify-center border rounded-lg border-orange-900 shadow-orange-400 p-1'>Subscribe</a> 
            </div>
            <div className='font-light border rounded-lg p-6 space-y-2 border-gray-400 w-[300px]'>
                <p className='text-3xl font-medium mb-4 '>Pro</p>
                <h1 className='text-3xl font-medium'>$10<spam className='text-[10px] opacity-70' >/Month</spam></h1>
                <p className='font-light text-[15px] opacity-90'>Private board sharing</p>
                <p className='font-light text-[15px] opacity-90'>10 GB Storage</p>
                 <p className='font-light text-[15px] opacity-90'>Web Analytics (Advance)</p>
                <p className='font-light text-[15px] opacity-90'>Private Mode</p>
                <a href='#' className=' flex justify-center border rounded-lg border-orange-900 shadow-orange-400 p-1'>Subscribe</a> 
            </div>
            <div className='font-light border rounded-lg p-6 space-y-2 border-gray-400 w-[300px]'>
                <p className='text-3xl font-medium mb-4 '>Enterprise</p>
                <h1 className='text-3xl font-medium'>$200<spam className='text-[10px] opacity-70' >/Month</spam></h1>
                <p className='font-light text-[15px] opacity-90'>Private board sharing</p>
                <p className='font-light text-[15px] opacity-90'>unlimited Storage</p>
                 <p className='font-light text-[15px] opacity-90'>High Performance Network</p>
                <p className='font-light text-[15px] opacity-90'>Private Mode</p>
                <a href='#' className=' flex justify-center border rounded-lg border-orange-900 shadow-orange-400 p-1'>Subscribe</a> 
            </div>

        </div>




    </div>
  )
}

export default Pricing