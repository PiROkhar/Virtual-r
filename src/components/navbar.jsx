import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import { navItems} from '../texts/index'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen]=useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-700'>
        <div className='container px-4 mx-auto relative text-sm'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10' src={Logo} alt='/' />
                        <span className='tracking-tight text-xl'>Virtual-R</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {navItems.map((item, index) =>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                            ))}
                        </ul>
                        <div className='hidden lg:flex justify-center space-x-12 item-center'>
                          <a href='#' className='border rounded-md py-[5px] px-3'>Sign In</a>
                          <a href='#' className=' rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-[5px] px-3'>Creat an account</a>
                        </div>
                        <div onClick={toggleNavbar } className='block md:hidden'>
                            {!mobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
                          
                        </div> 
                        
                </div>
        </div>
    </nav>
  );
}
export default Navbar
