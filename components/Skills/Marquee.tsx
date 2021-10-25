import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SkillIcon from '../Skills/SkillIcon';

interface MarqueeProps {
	techSkills: string[];
	playScroll: boolean;
}

const Marquee = ({ techSkills, playScroll }: MarqueeProps) => {
	const { width, height } = useWindowDimensions();
	const isNotMobile = width >= 640;
	const controls = useAnimation();

	useEffect(() => {
		controls.start('animate');
		if (!playScroll) {
			controls.stop();
			controls.set('initial');
		}
	}, [playScroll, controls]);

	const translateSpeed = (75 + (!isNotMobile ? 16 : 64)) * -1;

	const marquee = {
		initial: {
			x: 0,
		},

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
	};
	return (
		<div
			className={
				'bg-gray-800 relative w-screen max-w-full h-[117px] mt-2 overflow-y-hidden ' +
				(playScroll ? 'overflow-x-hidden' : 'overflow-x-auto')
			}
		>
			<motion.div
				className={
					'flex gap-4 sm:gap-16 absolute h-full items-center ' +
					(!playScroll ? 'justify-center lg:w-full' : '')
				}
				variants={marquee}
				animate={controls}
			>
				{techSkills.map((tech, i) => (
					<SkillIcon key={tech} name={tech} forMobile />
				))}
				{playScroll &&
					techSkills.map((tech, i) => (
						<SkillIcon key={tech + '1'} name={tech} forMobile />
					))}
				{playScroll &&
					techSkills.map((tech, i) => (
						<SkillIcon key={tech + '2'} name={tech} forMobile />
					))}
			</motion.div>
		</div>
	);
};

export default Marquee;
