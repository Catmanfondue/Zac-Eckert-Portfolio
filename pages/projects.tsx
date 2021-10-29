import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import { getStagger } from '../util/animations/stagger';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import Carasoul from '../components/Projects/tuneroomz/Carasoul';

const Projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zac Eckert | Projects</title>
				<meta name='description' content='Projects' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent pageTitle='Projects' mainClasses='p-4'>
				<motion.div className='flex flex-col sm:flex-row gap-4'>
					<motion.div
						variants={getStagger(0.6)}
						className='leftContent sm:ml-4 sm:w-1/2'
					>
						<motion.p variants={fadeInUp}>
							My other independent projects are currently in development, so
							expect more here soon! I will showcase the project I am most proud
							of here.
						</motion.p>
						<motion.div className='mt-6 sm:mt-12' variants={fadeInUp}>
							<motion.h2 className='text-xl underline'>TuneRoomz</motion.h2>

							<motion.p>
								One time at a party, the host was connected to the speakers
								playing music. Several people were pestering the host to play
								their song and skip someone else&apos;s request. The host said
								to me after:{' '}
							</motion.p>

							<motion.div className='my-4'>
								<span className='italic '>
									&quot;I wish there was a way they could just vote on what song
									to play and I could just enjoy the party.&quot;
								</span>
							</motion.div>

							<motion.p>
								Even an app likely existed to solve this issue, I wanted to
								prove to myself that I create it. After countless hours of
								mistakes, discoveries, and successes, TuneRoomz.com was born. I
								created a full stack, real-time, web application that works with
								Spotify accounts.
							</motion.p>
						</motion.div>
						<motion.div variants={fadeInUp} className='mt-4'>
							<motion.h2 className='text-xl underline'>Tech Stack:</motion.h2>
							<span>I was able to create this with (MERN Stack):</span>
							<ul className='list-disc ml-12'>
								<li>MongoDB</li>
								<li>Express JS</li>
								<li>React JS</li>
								<li>Node JS</li>
							</ul>
							<p>
								It also uses Spotify&apos;s APIs for searching, queueing,
								playing, and skipping songs.
							</p>
							<p>
								Lastly, it uses websockets to make sure all of the song
								requests, votes, and any other user interaction is expereinced
								by everyone in the room simultaneously.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className='rightContent sm:w-1/2'
						style={{
							display: 'grid',
							alignItems: 'center',
							justifyItems: 'center',
						}}
					>
						<Carasoul />
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default Projects;
