import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Nav from '../components/Nav/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AnimatePresence exitBeforeEnter>
			<div
				className='flex flex-col bg-gray-300 dark:bg-gray-900 m-0 h-full w-full overflow-hidden min-h-screen'
				key={router.route}
			>
				<Nav />
				<Component {...pageProps} />
			</div>
		</AnimatePresence>
	);
}
export default MyApp;
