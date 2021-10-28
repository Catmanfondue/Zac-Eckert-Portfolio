import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Nav from '../components/Nav/Nav';
import { DarkModeContextProvider } from '../util/Contexts/DarkModeContext';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<DarkModeContextProvider>
			<AnimatePresence exitBeforeEnter>
				<div
					id='root'
					className='flex flex-col bg-bg dark:bg-darkBg text-[#000] dark:text-[#fff] dark:m-0 h-full w-full  min-h-screen lg:text-xl'
					key={router.route}
				>
					<Nav />
					<Component {...pageProps} />
				</div>
			</AnimatePresence>
		</DarkModeContextProvider>
	);
}
export default MyApp;
