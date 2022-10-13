import React from 'react';

const GameCard = ({ games }) => {
	return (
		<div className="game">
					<div>
						<p>{games.Year}</p>
					</div>
					<div>
						<img src={games.Poster} alt='games' />
					</div>
					<div>
						<span>{games.Type}</span>
						<h3>{games.Title}</h3>
					</div>
		</div>
		)
}

export default GameCard;