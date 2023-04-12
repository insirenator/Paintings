import React from 'react';

const Card = (props) => {
	const imageStyle = {backgroundImage: props.data.image};
	return (
		<div className="card">
			{/*<img src="./images/mona_lisa.jpg" width="200px" height="400px" />*/}
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