import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../util/animations/fadeInUp';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';
import ContactForm from '../components/Contact/ContactForm';

const Contact: NextPage = () => {
	return (
		<MainContent pageTitle='Contact'>
			<h2>Let&apos;s get in touch!</h2>
			<p>
				If you are interested in working together, or are just looking to
				network, feel reach out. I currently am only interested in jobs that can
				be done remotely.
			</p>

			<ContactForm />
		</MainContent>
	);
};

export default Contact;
