import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import Login from '../../../public/TuneRoomz/Login.png';
import JoinRoom from '../../../public/TuneRoomz/JoinRoom.png';
import Search from '../../../public/TuneRoomz/Search.png';
import Queue from '../../../public/TuneRoomz/Queue.png';
import Help from '../../../public/TuneRoomz/Help.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide from './Slide';

const Banner = () => {
	const customRenderItem = (item, props) => (
		<item.type {...item.props} {...props} />
	);

	return (
		<div className='relative w-full min-h-[500px]'>
			<Carousel
				renderItem={customRenderItem}
				showThumbs={false}
				swipeable
				onClickItem={() => {}}
			>
				<Slide key='0' image={Login} title='Login Page' />
				<Slide key='1' image={JoinRoom} title='Create / Join Room' />
				<Slide key='2' image={Search} title='Search Songs' />
				<Slide key='3' image={Queue} title='Queue' />
				<Slide key='4' image={Help} title='Help' />
			</Carousel>
		</div>
	);
};

export default Banner;
