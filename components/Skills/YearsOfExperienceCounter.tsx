import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import getYOE from '../../hooks/getYOE';
const YearsOfExperienceCounter = () => {
	const { years, remainingMonths } = getYOE();

	// there is an easing going on that I havent been able to sync up. but this was as close as I could get!
	return (
		<div className='px-4 text-center font-bold'>
			I have been a full time developer for: <br />
			<Counter from={0} to={years} duration={1.5} /> years and{' '}
			<Counter from={0} to={remainingMonths} duration={2} /> months.
		</div>
	);
};

interface CounterProps {
	from: number;
	to: number;
	repeat?: number;
	duration: number;
}

const Counter = ({ from, to, repeat = 0, duration }: CounterProps) => {
	const nodeRef = useRef();

	useEffect(() => {
		const node = nodeRef.current;

		const controls = animate(from, to, {
			delay: 0.8,
			duration: duration,

			repeat: repeat,
			repeatDelay: 0,
			onUpdate(value) {
				if (node !== undefined) node.textContent = value.toFixed(0);
			},
		});

		return () => controls.stop();
	}, [duration, from, repeat, to]);

	return <span ref={nodeRef}>0</span>;
};

export default YearsOfExperienceCounter;
