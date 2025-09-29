/** @format */
import './Navbar.module.css'
import logo from '../../assets/ChatGPT Image Sep 9, 2025, 01_54_43 PM.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<>
			<div className='flex justify-between items-center p-2 shadow-sm'>
				<div>
					<ul className='hidden lg:flex justify-center items-center gap-4 p-5 cursor-pointer'>
						<li>
							{' '}
							<a
								href='tel:01007179051'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600text-sm'>
								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'>
									{' '}
									اتصل بنا
								</button>
							</a>
						</li>
						<li>
							<a
								href='mailto:MEDO200t@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600text-sm'>
								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'>
									{' '}
									راسلنا{' '}
								</button>
							</a>
						</li>
					</ul>
				</div>
				<ul className='hidden lg:flex justify-center items-center gap-4 p-5 cursor-pointer *:hover:text-blue-500'>
					<NavLink to='/clients'>
						<li>اراء العملاء</li>
					</NavLink>
					<NavLink to='/us'>
						<li>خدماتنا</li>
					</NavLink>
					<NavLink to='/about'>
						<li> من نحن</li>
					</NavLink>
					<NavLink to='/'>
						<li>الصفحة الرئيسية</li>
					</NavLink>
					<li>
						<img src={logo} className='w-auto h-[90px] object-contain' alt='' />
					</li>
				</ul>
				<div className='flex justify-between items-center lg:hidden'>
					<ul className='absolute left-0'>
						<li>
							<img
								src={logo}
								className='w-auto h-[90px] object-contain'
								alt=''
							/>
						</li>
					</ul>
					<button
						className='cursor-pointer text-3xl p-2 rounded-full '
						onClick={toggleMenu}>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<>
					<div
						onClick={toggleMenu}
						className='background fixed z-30 inset-0 bg-black/50'></div>
					<div className='offcanvas z-40 fixed bottom-0 left-0 h-full w-[220px] bg-white shadow-lg'>
						<div className='flex justify-between items-center w-full p-4'>
							<img
								src={logo}
								className='w-auto h-[80px] object-contain'
								alt='syana i-tech'
							/>
							<button
								onClick={toggleMenu}
								className='cursor-pointer text-xl p-2 rounded-full hover:bg-gray-200 transition-colors duration-200'>
								{' '}
								<FontAwesomeIcon icon={faXmark} />
							</button>
						</div>
						<div>
							<ul className='flex flex-col justify-center items-center gap-4 p-5 cursor-pointer *:hover:text-blue-500 transition-colors duration-200'>
								<NavLink to='/'>
									<li onClick={toggleMenu}>الصفحة الرئيسية</li>{' '}
								</NavLink>
								<NavLink to='/about'>
									<li onClick={toggleMenu}> من نحن</li>
								</NavLink>
								<NavLink to='/us'>
									<li onClick={toggleMenu}>خدماتنا</li>
								</NavLink>
								<NavLink to='/clients'>
									<li onClick={toggleMenu}>اراء العملاء</li>
								</NavLink>
							</ul>
						</div>
					</div>
				</>
			)}
		</>
	)
}
