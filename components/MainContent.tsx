import { motion } from 'framer-motion';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { fadeInUp } from '../animations/fadeInUp';

interface MainContentProps {
	children: JSX.Element | JSX.Element[];
	customClasses?: string;
	pageTitle: string;
}

const MainContent = ({
	children,
	customClasses,
	pageTitle,
}: MainContentProps) => {
	const isNotMobile = useMediaQuery({
		query: '(min-width: 640px)',
	});

	return (
		<motion.main
			initial='initial'
			animate='animate'
			transition={!isNotMobile ? { delay: 0.7, duration: 0.2 } : {}}
			exit={{ opacity: 0 }}
			className={
				'p-4 mt-16 ' + (customClasses !== undefined ? customClasses : '')
			}
		>
			<motion.div style={{ alignSelf: 'center' }}>
				<h1 className='text-5xl mb-4'>{pageTitle}</h1>
			</motion.div>
			{children}
		</motion.main>
	);
};

export default MainContent;
