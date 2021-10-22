import { motion } from 'framer-motion';
import React from 'react';

interface MainContentProps {
	children: JSX.Element | JSX.Element[];
}

const MainContent = ({ children }: MainContentProps) => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5 }}
			exit={{ opacity: 0 }}
			className='p-4'
		>
			{children}
		</motion.main>
	);
};

export default MainContent;
