import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import { getStagger } from '../util/animations/stagger';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';

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

			<MainContent pageTitle='About' mainClasses='p-4'>
				<motion.div
					className='md:flex flex-row-reverse'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<motion.div className='px-6 max-h-[27.5vh] max-w-[27.5vh] m-auto md:w-1/2 md:max-h-[35vh] md:max-w-[35vh] md:px-0'>
						<div className='relative rounded-full overflow-hidden w-full pb-[100%]'>
							<Image
								src={PicOfMe}
								alt='Zac Eckert'
								quality={75}
								layout='fill'
								objectFit='cover'
								className='aboutMeImage'
								priority
							/>
						</div>
					</motion.div>
					<motion.div
						className='leftContent md:w-1/2 flex gap-2 flex-col mt-12'
						variants={getStagger(0.6)}
					>
						<motion.div variants={fadeInUp}>
							<h2 className='text-xl underline lg:text-3xl'>Tech background</h2>
							<p className=''>
								Hello! My name is Zac and I am a Front End Engineer who
								currently works out of Salt Lake City. I love learning the
								latest tech and growing along side the ever-evolving tech
								industry.
							</p>

							<p className='mt-4 '>
								I am originally from Green Bay, Wisconsin and have been
								programming since highschool. I graduated college with a degree
								in software development. Following graduation, I worked for 3
								years at a company in Green Bay. Later, I moved to a Salt Lake
								City to join a more competitive and advanced tech culture.
							</p>
						</motion.div>
						<motion.div variants={fadeInUp} className='mt-12'>
							<h2 className='text-xl underline lg:text-3xl'>Outside of Tech</h2>

							<p className=''>
								My hobbies include hiking, playing basketball, and recently,
								bouldering! Although it is clear that I am a beginner compared
								to other climbers, I find it satisfying to challenge myself with
								a new activity.
							</p>

							<p className='mt-4 '>
								When I&apos;m not outdoors or doing something active, you can
								find me spending time with my girlfriend my dog. I also enjoy
								playing video games, going to local breweries and cheering on my
								favorite sports teams: Green Bay Packers and Milwaukee Bucks.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default About;
