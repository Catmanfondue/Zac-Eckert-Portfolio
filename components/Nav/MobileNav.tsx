import { motion, useCycle } from 'framer-motion';
import React from 'react';
import MobileNavLink from './MobileNavLink';

interface PageProps {
	pages: {
		text: string;
		to: string;
	}[];
}

const MobileNav = ({ pages }: PageProps) => {
	const [mobileNavOpen, toggleMobileNavOpen] = useCycle(false, true);

	const toggle = () => {
		toggleMobileNavOpen();
	};

	const fullScreen = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 25px 25px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
			},
		}),
		closed: {
			clipPath: 'circle(21px at 40px 29px)',
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	};

	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};

	return (
		<motion.div
			id='mobileNav'
			initial={false}
			animate={mobileNavOpen ? 'open' : 'closed'}
			className='w-full h-full flex flex-col items-start justify-center'
		>
			<motion.div
				exit={fullScreen.closed}
				className='top-0 left-0 bottom-0 w-screen bg-accent opacity-90 z-50 fixed'
				variants={fullScreen}
			>
				<MenuToggle toggle={toggle} />
				<motion.ul
					variants={variants}
					className='h-full flex flex-col w-1/2 m-auto justify-center gap-16 text-5xl text-white'
				>
					{pages.map((page: { to: string; text: string }) => (
						<MobileNavLink
							key={page.to}
							to={page.to}
							text={page.text}
							toggle={toggle}
						/>
					))}
				</motion.ul>
			</motion.div>
		</motion.div>
	);
};

const MenuToggle = ({ toggle }: { toggle: () => void }) => {
	return (
		<div
			className='h-8 w-8 flex flex-col justify-center items-center cursor-pointer absolute left-6 top-3.5'
			onClick={toggle}
		>
			<svg width='23' height='23' viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</div>
	);
};

const Path = (props: any) => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
);

export default MobileNav;
