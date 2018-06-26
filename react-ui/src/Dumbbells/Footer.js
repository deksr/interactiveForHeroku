import React, { Component } from 'react';


//********* styles **********
const footerStyle = {
  backgroundColor: 'black',
  color: 'grey',
  fontSize: 8,
}
//****************************



class SiteFooter extends Component {
  render(){
    return (
      <div style={footerStyle}> Built With React </div>
    )
  }
}


export default SiteFooter