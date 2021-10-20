import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';
import { getStagger } from '../animations/stagger';
import type { NextPage } from 'next';

import Image from 'next/image';
import PicOfMe from '../public/ZacEckertSquare.jpeg';

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zac Eckert | About</title>
				<meta name='description' content='About' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div
			// sx={{
			// 	display: 'grid',
			// 	gridTemplateColumns: '1fr 1fr',
			// 	height: '100%',
			// }}
			>
				<motion.div
					className='leftContent'
					variants={getStagger(0.6)}
					style={{ alignSelf: '' }}
				>
					<div
					// sx={{
					// 	display: 'grid',
					// 	justifyContent: { xs: 'center', sm: 'left' },
					// 	textAlign: { xs: 'center', sm: 'left' },
					// 	padding: '1rem',
					// }}
					>
						<motion.div variants={fadeInUp} style={{ alignSelf: 'center' }}>
							<h1>About</h1>
						</motion.div>

						<motion.p variants={fadeInUp}>
							Hey! My name is Zac and I am a Front End Engineer who currently
							works out of Salt Lake City. I love learning the latest tech and
							growing along side ever evolving tech industry.
						</motion.p>

						<motion.p variants={fadeInUp}>
							Hey! My name is Zac and I am a Front End Engineer who currently
							works out of Salt Lake City. I love learning the latest tech and
							growing along side ever evolving tech industry.
						</motion.p>

						<motion.p variants={fadeInUp}>
							Hey! My name is Zac and I am a Front End Engineer who currently
							works out of Salt Lake City. I love learning the latest tech and
							growing along side ever evolving tech industry.
						</motion.p>
					</div>
				</motion.div>
				<motion.div
					className='rightContent'
					style={{
						display: 'grid',
						alignItems: 'center',
						justifyItems: 'center',
					}}
				>
					<div
						style={{
							width: '70%',
							height: '80%',
							maxHeight: 500,
							maxWidth: 500,
							position: 'relative',
							borderRadius: '100%',
							overflow: 'hidden',
						}}
					>
						<Image
							src={PicOfMe}
							alt='Zac Eckert'
							quality={75}
							layout='fill'
							objectFit='cover'
							className='aboutMeImage'
						/>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default About;
