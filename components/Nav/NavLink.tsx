import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface NavLinkProps {
	to: string;
	text: string;
	Icon?: IconType;
}
const NavLink = ({ to, text, Icon }: NavLinkProps) => {
	return (
		<div className='w-16 sm:w-full top-navigation-icon'>
			<Link href={to} passHref>
				<div className='flex flex-col items-center'>
					{Icon !== undefined && <Icon />}
					<span className='text-sm'>{text}</span>
				</div>
			</Link>
		</div>
	);
};

export default NavLink;
