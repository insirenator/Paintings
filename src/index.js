import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import {painting1, painting2, painting3, painting4, painting5, painting6} from './components/paintings.js';

import Card from './components/Card.js'


const page = (
	<div className="page"> 
		<Card data = {painting1}/>
		<Card data = {painting2}/>
		<Card data = {painting3}/>
		<Card data = {painting4}/>
		<Card data = {painting5}/>
		<Card data = {painting6}/>
	</div>
);

const root = document.querySelector('#root');
ReactDOM.render(
	page,
	root
);