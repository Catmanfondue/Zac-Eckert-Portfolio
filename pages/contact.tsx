import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import ContactForm from '../components/Contact/ContactForm';
import { getStagger } from '../util/animations/stagger';
import Head from 'next/head';

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zac Eckert | Contact</title>
				<meta name='description' content='Contact' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent pageTitle='Contact' mainClasses='p-4'>
				<motion.div variants={getStagger(0.6)}>
					<motion.h2 variants={fadeInUp} className='text-xl italic'>
						Let&apos;s get in touch!
					</motion.h2>
					<motion.div variants={fadeInUp}>
						<p className='my-4 md:w-1/2'>
							If you are interested in working together, have any questions, or
							just want to say introduce yourself, please don&apos;t hesitate to
							reach out. I like to stay current with these messages, so I will
							respond within 1-2 days.
						</p>
					</motion.div>
					<motion.div
						variants={fadeInUp}
						className='md:flex items-center justify-center mt-12'
					>
						<ContactForm />
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default Contact;
