// import * as React from 'react';
import React, { Component } from 'react';
import Picture from './Picture/Picture';
// import SearchBarItems from '../SearchBarItems/SearchBarItems'
// import NoResultsFound from './Picture/NoResultsFound';


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

  componentWillMount() {
    console.log("here compent will mount")
  }


  componentDidMount() {
    const unsplash = new Unsplash({
      applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_KEY,
      secret: process.env.REACT_APP_UNSPLASH_API_KEY,
      callbackUrl: "http://localhost:3000/"
      // callbackUrl: "https://peaceful-brushlands-50904.herokuapp.com/"

    });


    unsplash.search.collections("frog", 1, 60)
    .then(toJson)
    .then(json => {
      // console.log(json.results);
      this.setState({ defaultImages:json.results });
    });
  }



  

  render() {

    // console.log(this.props.ptcEnteredData);

    const style = {
      color: 'green'
    }

    
    const pictures =  this.props.ptcEnteredData || this.state.defaultImages;
    let listItemsPictures;

    // console.log(pictures)


    if(pictures.length === 0){
      
      console.log("kdjhkjhdkjhsaaskjh");
        // return(
        //   <NoResultsFound style={style}/> 
        // )

        style.color = 'red'

    }
    else{
      listItemsPictures = pictures.map((picture, index) => {
        // console.log(picture)
        return (
            <Picture key={picture.id} pictureobj={picture.cover_photo}/>
          )
        }
      )
    }


 
    

    // )
    
    // const listItemsPictures = pictures.map((picture, index) =>
    //   console.log(pictures)
    //   // console.log(picture.preview_photos)
    //   // picture.preview_photos.map((picobj,i)=> {
    //   //   return (
    //   //     <Picture key={picobj.id} pictureobj={picobj}/>
    //   //   )
    //   // })
    // )


    // kaasdkalsjkdlasakskdlajsd

    // const listItemsPictures = pictures.map((picture, index) =>{
    //   console.log(picture)
    //   return (
    //       <Picture key={picture.id} pictureobj={picture.cover_photo}/>
    //     )
    //  }
    // )



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