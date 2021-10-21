import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';
import { getStagger } from '../animations/stagger';
import SkillIcon from '../components/SkillIcon';
import type { NextPage } from 'next';
import useDarkMode from '../hooks/useDarkMode';

const Skills: NextPage = () => {
	// const [techHighlighted, setTechHighlighted] = useState(null);
	let colNums = 3;
	const [isUsingDarkMode] = useDarkMode();
	const currentTheme = isUsingDarkMode ? 'dark' : 'light';

	const techSkills = [
		'CSS',
		'HTML',
		'JavaScript',
		'Typescript',
		'React',
		'Nextjs',
		'Node',
		'MongoDB',
		'SQL',
	];

	return (
		<>
			<Head>
				<title>Zac Eckert | Skills</title>
				<meta name='description' content='Skills' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div
			// sx={{
			//   display: "grid",
			//   gridTemplateColumns: "1fr 1fr",
			//   height: "100%",
			//   gap: "1rem",
			// }}
			>
				<motion.div
					className='leftContent'
					variants={getStagger(0.6)}
					style={{ alignSelf: '' }}
				>
					<div
					// sx={{
					//   display: "grid",
					//   justifyContent: { xs: "center", sm: "left" },
					//   textAlign: { xs: "center", sm: "left" },
					//   padding: "1rem",
					// }}
					>
						<motion.div variants={fadeInUp} style={{ alignSelf: 'center' }}>
							<h1>Skills</h1>
						</motion.div>

						<motion.p variants={fadeInUp}>
							Although I have a degree in software development, most of the tech
							I have learned I have learned on the job or on my own.
						</motion.p>

						<motion.p variants={fadeInUp}>
							Learning new tech is my favorite part of being a Front End
							Engineer. Web browsers, like Google Chrome, keep pushing the bar
							higher for{' '}
							<a href='https://web.dev/learn-web-vitals/'>web standards</a> and
							I feel a sense of accomplishment went creating websites that meet
							those standards. As web standards change, technology adapts, and
							it is my job to adapt just as the technology does.
						</motion.p>

						<motion.p variants={fadeInUp}>
							This website for example uses{' '}
							<a href='https://nextjs.org/'>Next.js</a>,{' '}
							<a href='https://www.typescriptlang.org/'>Typescript</a>,{' '}
							<a href='https://mui.com/'>MUI (Material UI 5)</a>, and some{' '}
							<a href='https://www.framer.com/motion/'>Framer Motion.</a>
						</motion.p>
					</div>
				</motion.div>
				<motion.div
					className='rightContent'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div
					// sx={{
					//   display: "grid",
					//   gridTemplateColumns: "repeat(" + colNums + ", 1fr)",
					//   padding: "1rem",
					//   width: "80%",
					//   height: "60%",
					// }}
					>
						{techSkills.map((tech, i) => (
							<SkillIcon
								key={tech}
								name={tech}
								size={75}
								index={i}
								colNums={colNums}
								theme={currentTheme}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Skills;
