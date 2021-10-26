import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../../util/animations/fadeInUp';

const BackEndTab = () => {
	return (
		<div className='px-8 pb-2 flex flex-col  gap-4 '>
			<h2 className='text-xl underline lg:text-3xl'>Back End / Other</h2>
			<motion.p variants={fadeInUp} className=''>
				I do have a front end focus, but I am not exclusively a front end
				engineer.
			</motion.p>

			<motion.p variants={fadeInUp} className=''>
				As I mentioned in my &quot;Front End&quot; section, my degree taught
				very little for Front End tech. My courses were primarily focused on
				Java, C#, and SQL.
			</motion.p>

			<motion.p variants={fadeInUp}>
				I still interact with backend code on a weekly basis (C#), and still
				push myself to keep learning backend / devops technologies as well.
				GraphQL specifically is going to be something I will be learning very
				soon instead of the REST API&apos;s that I&apos;m used to building.
			</motion.p>
		</div>
	);
};

export default BackEndTab;
