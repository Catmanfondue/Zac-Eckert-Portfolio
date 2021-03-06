import { motion } from 'framer-motion';
import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface MainContentProps {
	children: JSX.Element | JSX.Element[];
	mainClasses?: string;
	pageTitle?: string;
	pageTitleClasses?: string;
}

const MainContent = ({
	children,
	mainClasses,
	pageTitle,
	pageTitleClasses,
}: MainContentProps) => {
	const { width, height } = useWindowDimensions();
	const isMobile = width !== undefined ? width < 640 : false;

	return (
		<motion.main
			initial='initial'
			animate='animate'
			transition={isMobile ? { delay: 0.7, duration: 0.2 } : {}}
			exit={{ opacity: 0 }}
			className={'mt-16 ' + (mainClasses !== undefined ? mainClasses : '')}
		>
			{pageTitle !== undefined && (
				<motion.div>
					<h1 className={'text-5xl mb-4 ' + pageTitleClasses}>{pageTitle}</h1>
				</motion.div>
			)}

			{children}
		</motion.main>
	);
};

export default MainContent;
