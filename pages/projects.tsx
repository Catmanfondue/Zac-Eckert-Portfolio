import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';
import { getStagger } from '../animations/stagger';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';

import Image from 'next/image';
import PicOfMe from '../public/ZacEckertSquare.jpeg';

const Projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zac Eckert | Projects</title>
				<meta name='description' content='Projects' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent pageTitle='Projects'>
				<motion.div
					className='leftContent'
					variants={getStagger(0.6)}
					style={{ alignSelf: '' }}
				>
					<div>
						<motion.p variants={fadeInUp}>
							My list of projects is still growing and expect to see more here
							in the future! The project I am most proud of, I will showcase
							here.
						</motion.p>

						<motion.h2>TuneRoomz</motion.h2>

						<motion.p variants={fadeInUp}>
							I was once at a party where one person was connected to the
							speakers that was playing the music. Several people were pestering
							the person in control of the music to have them play to their song
							right at that moment. They said to me after: <br />{' '}
							<span style={{}}>
								&quot;I wish there was a way they could just vote on what song
								to play and not have to bother me.&quot;
							</span>
						</motion.p>

						<motion.p variants={fadeInUp}>
							Even though there was probably already an existing app to do this,
							I wanted to prove to myself that I could do it. Hence,
							TuneRoomz.com was born. I created a full stack, real time, web
							application that works with your spotify.
						</motion.p>

						<motion.p variants={fadeInUp}></motion.p>
					</div>
				</motion.div>
				<motion.div
					className='rightContent'
					style={{
						display: 'grid',
						alignItems: 'center',
						justifyItems: 'center',
					}}
				></motion.div>
			</MainContent>
		</>
	);
};

export default Projects;
