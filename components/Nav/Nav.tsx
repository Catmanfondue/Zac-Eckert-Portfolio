import React, { useContext, useEffect, useState } from 'react';
import NavLink from './NavLink';
import MobileNav from './MobileNav';
// import { useRouter } from 'next/router';

// icons
import {
	FaLinkedin,
	FaEnvelope,
	FaGithub,
	FaMoon,
	FaSun,
} from 'react-icons/fa';
import { DarkModeContext } from '../../util/Contexts/DarkModeContext';

const pages = [
	{ text: 'Home', to: '/' },
	{ text: 'About', to: '/about' },
	{ text: 'Skills', to: '/skills' },
	{ text: 'Projects', to: '/projects' },
	{ text: 'Contact', to: '/contact' },
];

const Nav = () => {
	// const router = useRouter();
	// const currentPage = pages.map((page) => page.to).indexOf(router.asPath);

	return (
		<>
			<div
				id='navBar'
				className='flex h-16 px-3 justify-center bg-primary flex-row items-center fixed w-full z-50'
			>
				<div className='flex sm:hidden h-full w-1/4 flex-col items-end'>
					<MobileNav pages={pages} />
				</div>
				<h4 className='w-1/12 min-w-max flex-initial text-center text-white text-xl font-semibold flex'>
					ZE
				</h4>
				<div className='hidden sm:flex flex-row place-content-evenly text-white w-1/2 '>
					{pages.map((page) => (
						<NavLink key={page.to} to={page.to} text={page.text} />
					))}
				</div>
				<ThemeIcon />
				<div className='flex flex-row  items-center justify-end gap-3 ml-auto text-white'>
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
		</>
	);
};

const ThemeIcon = () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => {
			setMounted(false);
		};
	}, []);

	if (!mounted) return null;

	return (
		<span
			onClick={() => {
				toggleDarkMode(!darkMode);
			}}
			className='m-auto'
		>
			{darkMode ? (
				<FaSun
					size='24'
					className=' text-secondary mx-auto	top-navigation-icon'
				/>
			) : (
				<FaMoon
					size='24'
					className='text-secondary mx-auto top-navigation-icon'
				/>
			)}
		</span>
	);
};

export default Nav;
