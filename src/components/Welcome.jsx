import React from 'react';
import '../App.css';
import { ThreeCircles } from 'react-loader-spinner';

function Welcome(props) {
	const { title } = props;
	return (
		<div className='welcome'>
			<h1>{title}</h1>
			<ThreeCircles
				height='50'
				width='50'
				color='#C2D500'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='three-circles-rotating'
				outerCircleColor=''
				innerCircleColor=''
				middleCircleColor=''
			/>
		</div>
	);
}

export default Welcome;
