// import * as React from 'react';
import React, { Component } from 'react';
import Picture from './Picture/Picture';
// import SearchBarItems from '../SearchBarItems/SearchBarItems'
// import NoResultsFound from './Picture/NoResultsFound';


// import Unsplash, { toJson } from 'unsplash-js';
import { CardColumns, Container} from 'reactstrap';
import Radium from 'radium';

import './Pictures.css';






class Pictures extends Component {


  render() {

    // for collections
    // const pictures =  this.props.ptcEnteredData || this.state.defaultImages;
    // let listItemsPictures;
    // listItemsPictures = pictures.map((picture, index) => {
    //   return (
    //     <Picture key={picture.id} pictureobj={picture.cover_photo}/>
    //   )
    // })



    // for pictures
    const pictures =  this.props.ptcEnteredData;
    let listItemsPictures;
    listItemsPictures = pictures.map((picture, index) => {
      return (
        <Picture key={picture.id} pictureobj={picture.urls} pictureUser={picture.user} pictureLink={picture.links}/>
      )
    })


   

 



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