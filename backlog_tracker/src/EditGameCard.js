import React from 'react';

const EditGameCard = ({ gameCard, game }) => {
	console.log(gameCard);
	return (
		<div className="gamecard-edit">
			<div>
				<h2>Edit GameCard</h2>

				<p>Type in your game note here.</p>
				<input className="gamecard-textbox" type="text" />
				<p>Paste an image of the level you're in.</p>
				<input className="gamecard-imagebox" type="text" />
				<p>Submit that sucker!</p>
				<input type="submit" onClick={console.log('EditGameCard FIRED!')} />
			</div>
		</div>
	);
};

export default EditGameCard;
