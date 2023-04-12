import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.js'

const painting1 = {
	image : "url('./images/mona_lisa.jpg')",
	name: "Mona Lisa",
	artist: "Leonardo Da Vinci",
	created: "1503",
	about: "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'",
};

const painting2 = {
	image : "url('./images/starry_night.jpg')",
	name: "Starry Night",
	artist: "Van Gogh",
	created: "1889",
	about: "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
};

const page = (
	<div className="page"> 
		<Card data = {painting1}/>
		<Card data = {painting2}/>
		<Card data = {painting1}/>
		<Card data = {painting2}/>
		<Card data = {painting1}/>
		<Card data = {painting2}/>
	</div>
);

const root = document.querySelector('#root');
ReactDOM.render(
	page,
	root
);