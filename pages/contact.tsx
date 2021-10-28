import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import ContactForm from '../components/Contact/ContactForm';

const Contact: NextPage = () => {
	return (
		<MainContent pageTitle='Contact' mainClasses='p-4'>
			<motion.h2 className='text-xl underline'>
				Let&apos;s get in touch!
			</motion.h2>
			<p className='mt-4 md:w-1/2'>
				If you are interested in working together, network or just want to say
				hi, don&apos;t hesitate feel reach out. I like to stay on top of these
				messages and should respond in 1-2 days. I currently am only interested
				in jobs that can be done remotely.
			</p>
			<div className='md:flex items-center justify-center mt-12'>
				<ContactForm />
			</div>
		</MainContent>
	);
};

export default Contact;
