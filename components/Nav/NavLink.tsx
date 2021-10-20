import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
	to: string;
	text: string;
	isMobile?: boolean;
}
const NavLink = ({ to, text }: NavLinkProps) => {
	return (
		<div className='top-navigation-icon'>
			<Link href={to} passHref>
				{text}
			</Link>
		</div>
	);
};

export default NavLink;
