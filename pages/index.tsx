import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getStagger } from '../animations/stagger';
import { fadeInUp } from '../animations/fadeInUp';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Zac Eckert | Front End Engineer</title>
				<meta name='description' content='Front End Engineer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent>
				<motion.div
					className='leftContent'
					variants={getStagger(0.6)}
					style={{ alignSelf: 'center' }}
				>
					<motion.div>
						<motion.div variants={fadeInUp} style={{ alignSelf: 'center' }}>
							<h1>Zachary Eckert</h1>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<h2>Front End Engineer</h2>
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div className='rightContent' style={{ alignSelf: 'center' }}>
					Whats up
				</motion.div>
			</MainContent>
		</>
	);
};

export default Home;
