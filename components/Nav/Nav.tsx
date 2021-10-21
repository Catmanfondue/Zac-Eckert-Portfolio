import React, { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

import NavLink from './NavLink';
import { useRouter } from 'next/router';

// icons
import {
	FaHome,
	FaUserAlt,
	FaStar,
	FaPhoneAlt,
	FaLaptopCode,
	FaLinkedin,
	FaEnvelope,
	FaGithub,
	FaMoon,
	FaSun,
} from 'react-icons/fa';

const pages = [
	{ text: 'Home', to: '/', icon: FaHome },
	{ text: 'About', to: '/about', icon: FaUserAlt },
	{ text: 'Skills', to: '/skills', icon: FaStar },
	{ text: 'Projects', to: '/projects', icon: FaLaptopCode },
	{ text: 'Contact', to: '/contact', icon: FaPhoneAlt },
];

const Nav = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();

	const handleMode = () => setDarkTheme(!darkTheme);

	const router = useRouter();

	const currentPage = pages.map((page) => page.to).indexOf(router.asPath);

	return (
		<>
			<div
				id='navBar'
				className='flex flex-col h-16 items-end px-3 justify-center sm:bg-header sm:flex-row sm:items-center'
			>
				<h4 className='flex-initial text-center text-white text-xl font-semibold hidden md:flex'>
					Zac Eckert
				</h4>
				<div className='hidden flex-row place-content-evenly text-white w-1/2 sm:flex'>
					{pages.map((page) => (
						<NavLink key={page.to} to={page.to} text={page.text} />
					))}
				</div>
				<ThemeIcon />
				<div className='hidden sm:flex flex-row  items-center justify-end gap-3 ml-auto dark:text-white sm:text-white'>
					<a
						href='mailto:zaceckert74@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaEnvelope title='Email' size='1.5rem' />
					</a>

					<a
						href='https://www.linkedin.com/in/zachary-eckert/'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaLinkedin title='LinkedIn' size='1.5rem' />
					</a>
					<a
						href='https://github.com/Catmanfondue'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaGithub title='GitHub' size='1.5rem' />
					</a>
				</div>
			</div>
			<BottomNav />
		</>
	);
};

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);
	return (
		<span onClick={handleMode} className='sm:flex-auto'>
			{darkTheme ? (
				<FaSun
					size='24'
					className=' text-yellow-400 mx-auto	top-navigation-icon'
				/>
			) : (
				<FaMoon
					size='24'
					className=' text-gray-800 sm:text-yellow-400 mx-auto top-navigation-icon'
				/>
			)}
		</span>
	);
};

// Hidden on 640px +
const BottomNav = () => {
	return (
		<div
			id='bottomNav'
			className='flex flex-row w-full h-16 items-center  fixed bottom-0 bg-header sm:hidden'
		>
			<div className='flex w-full flex-row place-content-evenly text-white'>
				{pages.map((page) => (
					<NavLink
						key={page.to}
						to={page.to}
						text={page.text}
						Icon={page.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default Nav;
