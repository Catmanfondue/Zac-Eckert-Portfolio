import React, { useState, useMemo } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

import NavLink from './NavLink';
import { useRouter } from 'next/router';

// icons
import {
	FaLinkedin,
	FaEnvelope,
	FaGithub,
	FaMoon,
	FaSun,
} from 'react-icons/fa';

const Nav = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [darkTheme, setDarkTheme] = useDarkMode();

	const handleMode = () => setDarkTheme(!darkTheme);

	const router = useRouter();

	const pages = useMemo(() => {
		return [
			{ text: 'Home', to: '/' },
			{ text: 'About', to: '/about' },
			{ text: 'Skills', to: '/skills' },
			{ text: 'Projects', to: '/projects' },
			{ text: 'Contact', to: '/contact' },
		];
	}, []);

	const currentPage = pages.map((page) => page.to).indexOf(router.asPath);

	return (
		<div>
			<div
				id='navBar'
				className='flex flex-row h-16 items-center px-3 bg-indigo-800'
			>
				<h4 className='flex-initial text-center text-white text-xl font-semibold hidden md:flex'>
					Zac Eckert
				</h4>
				<div className='flex flex-row place-content-evenly text-white w-1/2'>
					{pages.map((page) => (
						<NavLink key={page.to} to={page.to} text={page.text} />
					))}
				</div>
				<ThemeIcon />

				<div className='flex flex-row  text-white items-center justify-end gap-3 ml-auto'>
					<a
						href='mailto:zaceckert74@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaEnvelope title='Email' size='2rem' />
					</a>

					<a
						href='https://www.linkedin.com/in/zachary-eckert/'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaLinkedin title='LinkedIn' size='2rem' />
					</a>
					<a
						href='https://github.com/Catmanfondue'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2 top-navigation-icon'
					>
						<FaGithub title='GitHub' size='2rem' />
					</a>
				</div>
			</div>
		</div>
	);
};

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);
	return (
		<span onClick={handleMode} className='flex-auto'>
			{darkTheme ? (
				<FaSun
					size='24'
					className=' text-yellow-400 mx-auto	top-navigation-icon'
				/>
			) : (
				<FaMoon
					size='24'
					className=' text-yellow-400 mx-auto top-navigation-icon'
				/>
			)}
		</span>
	);
};

export default Nav;
