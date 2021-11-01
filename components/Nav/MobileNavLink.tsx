import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';

interface MobileNavLinkProps {
	to: string;
	text: string;
	toggle: MouseEventHandler<HTMLLIElement>;
	isOpen: boolean;
}

const variants = {
	open: {
		display: 'block',
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
		transitionEnd: {
			display: 'none',
		},
	},
};

const MobileNavLink = ({ to, text, toggle, isOpen }: MobileNavLinkProps) => {
	return (
		<motion.li
			variants={variants}
			whileTap={{ scale: 0.95 }}
			onClick={toggle}
			className={isOpen ? 'z-50' : 'z-[-1]'}
		>
			<Link href={to} passHref>
				<div className='flex flex-col items-center cursor-pointer'>
					<span className='underline'>{text}</span>
				</div>
			</Link>
		</motion.li>
	);
};

export default MobileNavLink;
