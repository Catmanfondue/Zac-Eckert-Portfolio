import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SkillIcon from '../Skills/SkillIcon';

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

interface MarqueeProps {
	playScroll: boolean;
}

const Marquee = ({ playScroll }: MarqueeProps) => {
	const isMobile = !useMediaQuery({
		query: '(min-width: 640px)',
	});

	const translateSpeed = (75 + (isMobile ? 16 : 64)) * -1;

	const marquee = playScroll
		? {
				animate: {
					x: [0, techSkills.length * translateSpeed],
					transition: {
						x: {
							repeat: Infinity,
							repeatType: 'loop',
							duration: techSkills.length * 2,
							ease: 'linear',
						},
					},
				},
		  }
		: { animate: {} };
	return (
		<div className='bg-gray-800 relative w-screen max-w-full h-[90px] mt-6'>
			<motion.div
				className='flex gap-4 sm:gap-16 absolute h-full items-center'
				variants={marquee}
				animate='animate'
			>
				{techSkills.map((tech, i) => (
					<SkillIcon key={tech} name={tech} size={75} />
				))}
				{techSkills.map((tech, i) => (
					<SkillIcon key={tech + '1'} name={tech} size={75} />
				))}
				{techSkills.map((tech, i) => (
					<SkillIcon key={tech + '2'} name={tech} size={75} />
				))}
			</motion.div>
		</div>
	);
};

export default Marquee;
