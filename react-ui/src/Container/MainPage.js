import React, { Component } from 'react';


import Radium from 'radium';
import Unsplash, { toJson } from 'unsplash-js';
import { BrowserRouter, Route } from "react-router-dom";

import SiteNavbar from '../Dumbbells/Navbar'
import SearchBarItems from '../Components/SearchBarItems/SearchBarItems'
import NoResultsFound from '../Components/Pictures/Picture/NoResultsFound';
import Pictures from '../Components/Pictures/Pictures';
// import SiteFooter from '../Dumbbells/Footer'



import './App.css';





class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      uisSearchBarItems: true,
      uisNoResultsFound: false,
      uisPictures: true,
      dsPictures: []
    };
  }


  componentWillMount() {
    console.log("from app compnent will mount")
  }


  componentDidMount() {

    // *********fetch node express********** 
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
    // *********unsplash api*****************


    const unsplash = new Unsplash({
      applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
      secret: process.env.REACT_APP_UNSPLASH_API_KEY,
      callbackUrl: "http://localhost:3000/"
      // callbackUrl: "https://peaceful-brushlands-50904.herokuapp.com/"
    });


    unsplash.search.photos("ball", 1, 60)
      .then(toJson)
      .then(json => {
      console.log(json.results);
        this.setState({ dsPictures:json.results });
      });

  }






  enteredDatahandler = (ctp) => {
    console.log(ctp)

    const unsplash = new Unsplash({
      applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
      secret: process.env.REACT_APP_UNSPLASH_API_KEY,
      callbackUrl: "http://localhost:3000/"
      // callbackUrl: "https://peaceful-brushlands-50904.herokuapp.com/"
    });


    unsplash.search.photos(ctp, 1, 60)
    .then(toJson)
    .then(json => {
      console.log(json.results);
      this.setState({ dsPictures:json.results });


      // ********conditional rendering************

      if(this.state.dsPictures.length === 0){
        console.log("no data present")
      
          this.setState({uisNoResultsFound: true})
          // this.setState({uisPictures: false})
      }
      else{
        console.log("data is present")
        this.setState({uisNoResultsFound: false})
        // this.setState({uisPictures: true})    
      }
    });
  }




  render() {

    return (
      <div className="App">
        <SearchBarItems ctpEnteredData={this.enteredDatahandler}/>
        { this.state.uisNoResultsFound ?  <NoResultsFound /> : null}
        <Pictures ptcEnteredData={this.state.dsPictures}/>
      </div>
    );
  }
}

export default MainPage;




