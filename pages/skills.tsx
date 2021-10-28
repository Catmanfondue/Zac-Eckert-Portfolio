import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import { getStagger } from '../util/animations/stagger';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import Marquee from '../components/Skills/Marquee';
import SkillGrid from '../components/Skills/SkillGrid';
import useWindowDimensions from '../hooks/useWindowDimensions';
import YearsOfExperienceCounter from '../components/Skills/YearsOfExperienceCounter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FrontEndTab from '../components/Skills/FrontEndTab';
import BackEndTab from '../components/Skills/BackEndTab';
import Button from '../components/Common/Button';

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

const Skills: NextPage = () => {
	const [playScroll, setPlayScroll] = useState(true);
	const { width, height } = useWindowDimensions();
	const isMobile = width < 640;

	return (
		<>
			<Head>
				<title>Zac Eckert | Skills</title>
				<meta name='description' content='Skills' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent pageTitle='Skills' pageTitleClasses='px-8'>
				<div className='sm:flex'>
					<motion.div className='flex gap-2 flex-col sm:w-1/2'>
						<YearsOfExperienceCounter />
						{isMobile && (
							<>
								<Button
									text={playScroll ? 'Stop' : 'Play'}
									onClick={() => setPlayScroll(!playScroll)}
								/>
								<Marquee techSkills={techSkills} playScroll={playScroll} />
							</>
						)}
						<Tabs>
							<TabList>
								<Tab>Front End</Tab>
								<Tab>Back End</Tab>
							</TabList>
							<TabPanel>
								<FrontEndTab />
							</TabPanel>
							<TabPanel>
								<BackEndTab />
							</TabPanel>
						</Tabs>
					</motion.div>
					<motion.div className='hidden sm:w-1/2 sm:block'>
						{!isMobile && (
							<>
								<SkillGrid techSkills={techSkills} />
							</>
						)}
					</motion.div>
				</div>
			</MainContent>
		</>
	);
};

export default Skills;
