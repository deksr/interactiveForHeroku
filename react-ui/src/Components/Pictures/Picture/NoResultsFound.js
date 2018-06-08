import React, { Component } from 'react';
import robotLogo from './roboto-logo.svg';






class NoResultsFound extends Component {


	 constructor(props) {
    // console.log(props)
    super(props);
    this.state = {
      robotVisiblity: false
    }
  }





	render(


		) {
		return (
			<div> <p > No Result found for this search, Maybe try with a different keyword ? </p> 
			<img src={robotLogo} alt="robot" className="robotSays" />
			</div>
		)
	}
}

export default NoResultsFound;
