import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IconProps {
	name: string;
	size: number;
	index: number;
	colNums: number;
	theme: 'light' | 'dark';
}

const Icon = ({ name, size = 16, index, colNums, theme }: IconProps) => {
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
					`../public/Skills/${name}.svg`
				);
				ImportedIconRef.current = namedImport;
			} catch (err) {
				throw err;
			} finally {
				setLoading(false);
			}
		};
		importIcon();
	}, [theme, name]);

	if (!loading && ImportedIconRef.current) {
		const { current: ImportedIcon } = ImportedIconRef;
		return (
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Image src={ImportedIcon} alt={name} width={size + '%'} height={size} />
			</motion.div>
		);
	}

	return null;
};

export default Icon;
