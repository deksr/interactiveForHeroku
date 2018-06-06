import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import './SearchBarItems.css';
import FaSearch from 'react-icons/lib/fa/search';







class SearchBarItems extends Component {


	constructor() {
	  super();
	  this.state = {
	    searchImagebox: '',
	    searchImageData: null
	  }
  }



  inputHandler = () => {
		// console.log(this.search.value);
		const unsplash = new Unsplash({
		  applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
		  secret: process.env.REACT_APP_UNSPLASH_API_KEY,
		  callbackUrl: "http://localhost:3000/"
		});


		unsplash.search.photos(this.search.value, 1, 30)
		.then(toJson)
		.then(json => {
			// console.log(json.results)
		  this.setState({ searchImageData: json.results });
		  
		  let searchImage = this.state.searchImageData;


		  searchImage.map(function(num) {
        return <p> {num.title} </p>
      });


		});
  }


  enterKeyHandler = (event) => {

    if (event.key === 'Enter'){
    	event.preventDefault();	
    	// console.log(this.search.value)

    	const unsplash = new Unsplash({
			  applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
			  secret: process.env.REACT_APP_UNSPLASH_API_KEY,
			  callbackUrl: "http://localhost:3000/"
		  });


		   unsplash.search.collections(this.search.value, 3, 30)
			.then(toJson)
			.then(json => {
				// console.log(json.results)
				this.props.ctpEnteredData(json.results);            

		  });

		  this.myFormRef.reset();
    }
  }



  
  


	render() {
    return (
    	<div>
	    	<form autoComplete="off" ref={(el) => this.myFormRef = el}>
	        <FaSearch /> <input 
	          type="text" 
	          name="search" 
	          placeholder="Search.." 
	          ref={input => this.search = input}
	          onChange={this.inputHandler} 
	          onKeyPress={this.enterKeyHandler}/>
	          <p></p>
	      </form>
      </div>  
    )
  }

}




export default SearchBarItems