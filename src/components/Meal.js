import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Meal = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://www.themealdb.com/api/json/v1/1/search.php?s=tomato')
			.then((res) => setData(res.data.meals));
	}, []);

	return (
		<ul className="meals">
			{data.map((meal, index) => (
				<Card key="index" meal={meal} />
			))}
		</ul>
	);
};

export default Meal;
