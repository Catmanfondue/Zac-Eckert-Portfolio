import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';
import { getStagger } from '../animations/stagger';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import Marquee from '../components/Skills/Marquee';

const Skills: NextPage = () => {
	const [playScroll, setPlayScroll] = useState(true);
	return (
		<>
			<Head>
				<title>Zac Eckert | Skills</title>
				<meta name='description' content='Skills' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent pageTitle='Skills'>
				<motion.div
					className='leftContent'
					variants={getStagger(0.6)}
					style={{ alignSelf: '' }}
				>
					<motion.p variants={fadeInUp}>
						Although I have a degree in software development, most of the tech I
						have learned I have learned on the job or on my own.
					</motion.p>

					<motion.p variants={fadeInUp}>
						Learning new tech is my favorite part of being a Front End Engineer.
						Web browsers, like Google Chrome, keep pushing the bar higher for{' '}
						<a href='https://web.dev/learn-web-vitals/'>web standards</a> and I
						feel a sense of accomplishment went creating websites that meet
						those standards. As web standards change, technology adapts, and it
						is my job to adapt just as the technology does.
					</motion.p>

					<motion.p variants={fadeInUp}>
						This website for example uses{' '}
						<a href='https://nextjs.org/'>Next.js</a>,{' '}
						<a href='https://www.typescriptlang.org/'>Typescript</a>,{' '}
						<a href='https://mui.com/'>MUI (Material UI 5)</a>, and some{' '}
						<a href='https://www.framer.com/motion/'>Framer Motion.</a>
					</motion.p>
				</motion.div>
				<motion.div
					className='rightContent'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<button onClick={() => setPlayScroll(!playScroll)}>
						{playScroll ? 'Pause' : 'Play'}
					</button>
					<Marquee playScroll={playScroll} />
				</motion.div>
			</MainContent>
		</>
	);
};

export default Skills;
