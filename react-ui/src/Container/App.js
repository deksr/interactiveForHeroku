import React, { Component } from 'react';
import Radium from 'radium';



import './App.css';


import SiteNavbar from '../Dumbbells/Navbar'
import SearchBarItems from '../Components/SearchBarItems/SearchBarItems'
import Pictures from '../Components/Pictures/Pictures';
import SiteFooter from '../Dumbbells/Footer'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
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
  }

  enteredDatahandler = (ctp) => {
    console.log(ctp)
    this.setState({enteredData: ctp })
  }

  render() {
    return (
      <div className="App">
        <SiteNavbar/>
          <SearchBarItems ctpEnteredData={this.enteredDatahandler}/>
          <Pictures ptcEnteredData={this.state.enteredData}/>
        <SiteFooter />
      </div>
    );
  }
}

export default Radium(App);