import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';

interface MobileNavLinkProps {
	to: string;
	text: string;
	toggle: MouseEventHandler<HTMLLIElement>;
}

const variants = {
	open: {
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
	},
};

const MobileNavLink = ({ to, text, toggle }: MobileNavLinkProps) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			exit={variants.closed}
			onClick={toggle}
		>
			<Link href={to} passHref>
				<div className='flex flex-col items-center cursor-pointer'>
					<span className=' underline'>{text}</span>
				</div>
			</Link>
		</motion.li>
	);
};

export default MobileNavLink;
