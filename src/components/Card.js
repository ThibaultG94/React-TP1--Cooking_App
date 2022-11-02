import React from 'react';

const Card = ({ meal }) => {
	return (
		<li className="card">
			<div className="infos">
				<h2>(Nom de la recette)</h2>
			</div>
			<img src={meal.strMealThumb} />
		</li>
	);
};

export default Card;
