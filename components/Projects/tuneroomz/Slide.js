import Image from 'next/image';

const Slide = ({ id, image, title }) => {
	return (
		<>
			<p className=''>{title}</p>
			<div className='w-full h-full relative'>
				<Image
					alt={title}
					layout='fill'
					objectFit='contain'
					src={image}
					loading='lazy'
				/>
			</div>
		</>
	);
};

export default Slide;
