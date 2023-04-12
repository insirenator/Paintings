import React from 'react';
// import './style.css';

const Card = (props) => {
	const imageStyle = {backgroundImage: `url(${props.data.image})`};
	return (
		<div className="card">
			<div className="image" style = {imageStyle}></div>
			<div className="info">
				<p className="name">{props.data.name}</p>
				<p className="artist">{props.data.artist}</p>
				<p className="created">{props.data.created}</p>
				<p className="about">About</p>
				<p className="about-content">{props.data.about}</p>
			</div>
		</div>
	);
};

export default Card;