import React, { Component } from 'react';
import './SearchBarItems.css';
import FaSearch from 'react-icons/lib/fa/search';



class SearchBarItems extends Component {
	enterKeyHandler = (event) => {
		if (event.key === 'Enter'){
			event.preventDefault();	
			console.log(this.search.value)
			this.props.ctpEnteredData(this.search.value)
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