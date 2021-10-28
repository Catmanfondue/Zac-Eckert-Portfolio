import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getStagger } from '../util/animations/stagger';
import { fadeInUp } from '../util/animations/fadeInUp';
import MainContent from '../components/MainContent';
import useWindowDimensions from '../hooks/useWindowDimensions';
import MyName from '../components/MyName';
import { DarkModeContext } from '../util/Contexts/DarkModeContext';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
	const { width, height } = useWindowDimensions();
	const { darkMode } = useContext(DarkModeContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isMobile = width < 640;
	return (
		<>
			<Head>
				<title>Zac Eckert | Front End Engineer</title>
				<meta name='description' content='Front End Engineer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent mainClasses='relative contentContainer flex flex-col sm:flex-row gap-12 sm:gap-0 sm:items-center'>
				<motion.div
					className='leftContent flex flex-col items-center mt-4 gap-4 sm:w-1/2 sm:items-baseline sm:ml-8'
					variants={getStagger(3)}
				>
					<motion.div variants={fadeInUp} className='w-4/5 sm:w-1/2'>
						<MyName width={'100%'} strokeColor={darkMode ? 'white' : 'black'} />
					</motion.div>

					<motion.div variants={fadeInUp}>
						<h2 className='text-white text-5xl'>Front End Engineer</h2>
					</motion.div>
				</motion.div>
				<motion.div className='rightContent sm:w-1/2'>
					<motion.div variants={fadeInUp}>
						<Link href={'/about'} passHref>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto block'>
								Learn more about me
							</button>
						</Link>
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default Home;
