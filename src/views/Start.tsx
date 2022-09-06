import React from 'react';
// Components
import PageWrapper from '../components/pageWrapper';
import GameOptions from '../components/GameOptions';

const Start = () => {
	return (
		<PageWrapper>
			<section className="h-full w-full flex justify-center flex-col items-center bg-dark-blue">
				<h1 className="text-lg font-bold text-center mb-10 text-white-main">memory</h1>
				<GameOptions />
			</section>
		</PageWrapper>
	);
};

export default Start;
