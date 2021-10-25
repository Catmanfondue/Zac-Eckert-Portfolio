import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IconProps {
	name: string;
	size?: number;
	forMobile: boolean;
	index?: number;
	colNums?: number;
}

const Icon = ({
	name,
	size = 75,
	forMobile,
	index = 0,
	colNums = 1,
}: IconProps) => {
	const ImportedIconRef = useRef(null);
	const [loading, setLoading] = useState(false);

	let padding = null;
	if (Math.floor(index / colNums) % 2 === 0) {
		padding = (index % colNums) * (100 / colNums) + '%';
	} else {
		padding = (index % colNums) * (100 / colNums) + '%';
	}

	useEffect(() => {
		setLoading(true);
		const importIcon = async () => {
			try {
				const { default: namedImport } = await import(
					`../../public/Skills/${name}.svg`
				);
				ImportedIconRef.current = namedImport;
			} catch (err) {
				throw err;
			} finally {
				setLoading(false);
			}
		};
		importIcon();
	}, [name]);

	if (!loading && ImportedIconRef.current) {
		const { current: ImportedIcon } = ImportedIconRef;

		// for marquee
		if (forMobile) {
			return (
				<motion.div className='relative h-[75px] w-[75px]'>
					<Image src={ImportedIcon} alt={name} width={size} height={size} />
				</motion.div>
			);
		} else {
			return (
				<div style={{ paddingTop: padding }} className='flex justify-center'>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='flex justify-center h-[75px] w-[75px]'
					>
						<Image src={ImportedIcon} alt={name} width={size} height={size} />
					</motion.div>
				</div>
			);
		}
	}

	return null;
};

export default Icon;
