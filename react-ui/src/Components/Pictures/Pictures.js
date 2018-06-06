// import * as React from 'react';
import React, { Component } from 'react';
import Picture from './Picture/Picture';
// import SearchBarItems from '../SearchBarItems/SearchBarItems'

import Unsplash, { toJson } from 'unsplash-js';
import { CardColumns, Container} from 'reactstrap';
import Radium from 'radium';

import './Pictures.css';






class Pictures extends Component {

  constructor(props) {
    // console.log(props)
    super(props);
    this.state = {
      defaultImages: []
    }
  }


  componentDidMount() {
    const unsplash = new Unsplash({
      applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
      secret: process.env.REACT_APP_UNSPLASH_API_KEY,
      // callbackUrl: "http://localhost:3000/"
      callbackUrl: "https://peaceful-brushlands-50904.herokuapp.com/"

    });


    unsplash.search.collections("row", 3, 60)
    .then(toJson)
    .then(json => {
      // console.log(json.results);
      this.setState({ defaultImages:json.results });
    });
  }



  


  render() {
    const pictures =  this.props.ptcEnteredData || this.state.defaultImages;

    
    const listItemsPictures = pictures.map((picture, index) =>
      picture.preview_photos.map((picobj,i)=> {
        return (
          <Picture key={picobj.id} pictureobj={picobj}/>
        )
      })
    )



    return (
      <div>
      <Container>
        <br/> <br/>
        <CardColumns>
          {listItemsPictures}
        </CardColumns>
      </Container>
      </div>
    )
  }

}



export default Radium(Pictures)