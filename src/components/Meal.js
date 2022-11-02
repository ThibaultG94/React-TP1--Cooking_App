import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Meal = () => {
	const [data, setData] = useState([]);
	const [textInput, setTextInput] = useState('');

	useEffect(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/search.php?s=tomato')
			.then((res) => setData(res.data.meals));
	}, []);

	return (
		<div className="mealApp">
			<div className="search">
				<input
					type="text"
					placeholder="Tapez le nom d'un aliment (en anglais)"
					onChange={(e) => setTextInput(e.target.value)}
				/>
			</div>
			<ul className="meals">
				{data.map((meal, index) => (
					<Card key="index" meal={meal} />
				))}
			</ul>
		</div>
	);
};

export default Meal;
