import React from 'react';

interface ButtonProps {
	text: string;
	onClick?: () => void;
	customClasses?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
}

const Button = ({
	text,
	onClick,
	customClasses,
	type,
	disabled,
}: ButtonProps) => {
	return (
		<button
			type={type === undefined ? 'button' : type}
			disabled={disabled !== undefined ? disabled : false}
			onClick={onClick === undefined ? () => {} : onClick}
			className={
				'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded m-auto block ' +
				(customClasses !== undefined ? customClasses : '')
			}
		>
			{text}
		</button>
	);
};

export default Button;
