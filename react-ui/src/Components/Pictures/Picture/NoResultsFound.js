import React from 'react';
import robotLogo from './roboto-logo.svg';
import './NoResultsFound.css';


const NoResultsFound = () => (
	<div><p className="noResultText">No Result found</p> 
		<img src={robotLogo} alt="robot" className="robotSays" />
	</div>
)


export default NoResultsFound;