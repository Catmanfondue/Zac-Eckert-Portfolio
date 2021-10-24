import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IconProps {
	name: string;
	size: number;
}

const Icon = ({ name, size = 16 }: IconProps) => {
	const ImportedIconRef = useRef(null);
	const [loading, setLoading] = useState(false);

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
		return (
			<motion.div className='relative h-[75px] w-[75px]'>
				<Image src={ImportedIcon} alt={name} width={size} height={size} />
			</motion.div>
		);
	}

	return null;
};

export default Icon;
