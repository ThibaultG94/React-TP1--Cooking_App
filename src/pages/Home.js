import React from 'react';
import Meal from '../components/Meal';
import Navigation from '../components/Navigation';
import Title from '../components/Title';

const Home = () => {
	return (
		<div className="app">
			<Title />
			<Navigation />
			<Meal />
		</div>
	);
};

export default Home;
