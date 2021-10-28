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
import Button from '../components/Common/Button';

const Home: NextPage = () => {
	const { width, height } = useWindowDimensions();
	const { darkMode } = useContext(DarkModeContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isMobile = width !== undefined ? width < 640 : false;

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

					<motion.div className='w-4/5' variants={fadeInUp}>
						<h2 className=' text-5xl'>Front End Engineer</h2>
					</motion.div>
				</motion.div>
				<motion.div className='rightContent sm:w-1/2'>
					<motion.div variants={fadeInUp}>
						<Link href={'/about'} passHref>
							<Button text='Learn more about me' />
						</Link>
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default Home;
