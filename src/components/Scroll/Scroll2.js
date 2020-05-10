import React from 'react';

const Scroll = (props) => {
	return (
		<div 
		style={{overflowY: 'scroll', border: '1px solid black', height: '40vh'}
		}>
			{props.children}
		</div>
	)
};

export default Scroll;