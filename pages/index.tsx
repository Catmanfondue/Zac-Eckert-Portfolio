import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getStagger } from '../animations/stagger';
import { fadeInUp } from '../animations/fadeInUp';
import MainContent from '../components/MainContent';
import useWindowDimensions from '../hooks/useWindowDimensions';
import MyName from '../components/MyName';
import useDarkMode from '../hooks/useDarkMode';

const Home: NextPage = () => {
	const { width, height } = useWindowDimensions();
	const [darkTheme] = useDarkMode();
	const isMobile = width < 640;
	return (
		<>
			<Head>
				<title>Zac Eckert | Front End Engineer</title>
				<meta name='description' content='Front End Engineer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<MainContent mainClasses='relative contentContainer sm:flex '>
				<motion.div
					className='leftContent flex flex-col items-center mt-4 gap-4 sm:w-1/2 sm:items-baseline'
					variants={getStagger(3)}
				>
					<motion.div variants={fadeInUp} className='w-4/5 sm:w-1/2'>
						<MyName
							width={'100%'}
							strokeColor={darkTheme ? 'white' : 'black'}
						/>
					</motion.div>

					<motion.div variants={fadeInUp}>
						<h2 className='text-white text-4xl'>Front End Engineer</h2>
					</motion.div>
				</motion.div>
				<motion.div className='rightContent sm:w-1/2'>
					<motion.div variants={fadeInUp}>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto block'>
							Learn more about me
						</button>
					</motion.div>
				</motion.div>
			</MainContent>
		</>
	);
};

export default Home;
