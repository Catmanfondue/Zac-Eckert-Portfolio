import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../../util/animations/fadeInUp';

const BackEndTab = () => {
	return (
		<div className='px-8 pb-2 flex flex-col  gap-4 '>
			<h2 className='text-xl underline lg:text-3xl'>Back End / Other</h2>
			<motion.p variants={fadeInUp} className=''>
				Much of my tech skills are highlighted through front end engineering;
				however, my tech expertise also touches on some backend technologies.
			</motion.p>

			<motion.p variants={fadeInUp} className=''>
				As I mentioned in my &quot;Front End&quot; section, my degree had an
				emphasis on backend tech. My courses were primarily focused on Java, C#,
				and SQL.
			</motion.p>

			<motion.p variants={fadeInUp}>
				I work with backend technologies frequently, mainly C#, and continue to
				push myself to keep learning backend/devops technologies. Specifically,
				GraphQL is something I am beginning to learn and am excited to impliment
				over traditional REST APIs.
			</motion.p>
		</div>
	);
};

export default BackEndTab;
