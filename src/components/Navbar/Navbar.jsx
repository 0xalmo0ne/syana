import React from 'react'
import './Navbar.module.css'
import logo from '../../assets/ChatGPT Image Sep 9, 2025, 01_54_43 PM.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center p-2 shadow-sm'>
    <ul className='flex justify-center items-center gap-4 p-5 cursor-pointer'>
      <li>
        <img src={logo} className='w-auto h-[90px] object-contain'  alt="" />
      </li>
      <NavLink to="/">    
      <li>الصفحة الرئيسية</li>
         </NavLink>
          <NavLink to="/about">
    <li> من نحن</li>
    </NavLink>
    <NavLink to="/us">
    <li>خدماتنا</li>
    </NavLink>
    <NavLink to="/clients">
    <li>اراء العملاء</li>
    </NavLink>
    {/* <NavLink to="/contact">
    <li>تواصل معنا</li>
    </NavLink> */}
   </ul>
       <div >
        <ul className='flex justify-center items-center gap-4 p-5 cursor-pointer'>
    <li>
      <a 
        href="tel:01007179051" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600text-sm"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
               اتصل بنا
        </button>
      </a>
    </li>
      <li>
      <a 
        href="mailto:MEDO200t@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600text-sm"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
               راسلنا
        </button>
      </a>
    </li>
  </ul>
    </div>
    </div>

    </>
    )
}
