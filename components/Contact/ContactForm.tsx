// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../Common/Button';
function ContactForm() {
	const [state, handleSubmit] = useForm('xayazgqn');
	if (state.succeeded) {
		return <p>Thanks for reaching out &#128516;</p>;
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='w-full mb-4 p-4 bg-accent rounded-lg md:w-3/4 md:flex md:flex-wrap md:justify-between md:flex-col md:items-center xl:w-1/2'
		>
			<div className='flex flex-col mb-4 md:w-3/4'>
				<label
					className='mb-2 tracking-wide font-bold text-lg text-white'
					htmlFor='email'
				>
					Your Email Address
				</label>
				<div className='text-red-500'>
					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
				<input
					className='border py-2 px-3 md:mr-2 rounded-lg'
					id='email'
					type='email'
					name='email'
				/>
			</div>

			<div className='flex flex-col mb-4 md:w-3/4'>
				<label
					className='mb-2 tracking-wide font-bold text-lg text-white'
					htmlFor='message'
				>
					Your Message:
				</label>
				<div className='text-red-500'>
					<ValidationError
						prefix='Message'
						field='message'
						errors={state.errors}
					/>
				</div>
				<textarea
					id='message'
					name='message'
					className='border py-2 px-3 h-[200px] md:mr-2 rounded-lg text-black'
				/>
			</div>
			<Button type='submit' disabled={state.submitting} text='Submit' />
		</form>
	);
}
function App() {
	return <ContactForm />;
}
export default App;
