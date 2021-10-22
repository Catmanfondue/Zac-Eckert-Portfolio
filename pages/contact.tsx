import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';
import type { NextPage } from 'next';
import MainContent from '../components/MainContent';

const Contact: NextPage = () => {
	return (
		<MainContent>
			<span>Contact</span>
		</MainContent>
	);
};

export default Contact;
