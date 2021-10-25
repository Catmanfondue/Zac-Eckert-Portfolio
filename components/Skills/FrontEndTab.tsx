import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../../animations/fadeInUp';

const FrontEndTab = () => {
	return (
		<div className='px-8 pb-2 flex flex-col  gap-4 '>
			<h2 className='text-xl underline lg:text-3xl'>Front End</h2>
			<motion.p variants={fadeInUp} className=''>
				Although I have a degree in software development, most of the front end
				tech I know, I have learned on my own.
			</motion.p>

			<motion.p variants={fadeInUp} className=''>
				Learning new tech is my favorite part of being a Front End Engineer. The
				first tech I learned on my own was React. I watched youtube tutorials,
				attended{' '}
				<a
					href='https://www.headway.io/reactjs-green-bay'
					className='underline'
				>
					meetups
				</a>{' '}
				after work, and built my own projects using React.
				<br />
			</motion.p>
			<motion.p variants={fadeInUp} className=''>
				Once I was comfortable with it, I demo&apos;d React to my manager and
				senior developers and they decided to switch all our new web development
				to React, and I assisted anyone that needed help learning it.
			</motion.p>

			<motion.p variants={fadeInUp}>
				Additionally, I am driven to continue my education in web developement
				because web browsers like Google Chrome keep making the web more
				accessible via high{' '}
				<a href='https://web.dev/learn-web-vitals/' className='underline'>
					Web Standards.
				</a>{' '}
				I feel a sense of accomplishment after creating websites that meet those
				thorough standards.
			</motion.p>
			<motion.p variants={fadeInUp}>
				This website for example uses{' '}
				<a href='https://nextjs.org/' className='underline'>
					Next.js
				</a>
				,{' '}
				<a href='https://www.typescriptlang.org/' className='underline'>
					Typescript
				</a>
				,{' '}
				<a href='https://tailwindcss.com/' className='underline'>
					TailwindCSS
				</a>
				, and some{' '}
				<a href='https://www.framer.com/motion/' className='underline'>
					Framer Motion.
				</a>
			</motion.p>
		</div>
	);
};

export default FrontEndTab;
