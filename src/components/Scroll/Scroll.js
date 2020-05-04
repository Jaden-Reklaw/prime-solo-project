import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div 
		className= 'scroll-divs' 
		style={{overflowY: 'scroll', border: '1px solid black', height: '40vh'}
		}>
			{props.children}
		</div>
	)
};

export default Scroll;