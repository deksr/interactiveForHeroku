import React, { Component } from 'react';
import Radium from 'radium';
import Modal from 'react-responsive-modal';
import { Card, CardImg, CardText, CardBody} from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import './Picture.css';



//********* styles *********

const cardStyle = {
  backgroundColor: '#F5F5F5',
  border: 'none',
  flex: 1
}
//****************************



class Picture extends Component {
  state = {
    open: false
  };


  onOpenModal = () => {
    this.setState({ open: true });
  };


  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <Card style={cardStyle} className="cardstyleHover">
          <div className="unsplash-hover-container"> 
            <CardImg top width="100%" src={this.props.pictureobj.small} onClick={this.onOpenModal}/>
            <div className="unsplash-hover">Image Source: Unsplash</div> 
          </div>           

          <CardBody>
            <CardText className="cardTextStyle">
              {this.props.pictureUser.name}
              <button className="buttonStyle"  link="green">< a href={this.props.pictureLink.html} target="_blank"> <FaUser /> </a></button>
              <button className="buttonStyle"><a href={this.props.pictureLink.download} target="_blank"><FaFolderOpen /></a></button><br/>
              <Modal size="sm" open={open} onClose={this.onCloseModal} center>
                <CardImg size="sm" src={this.props.pictureobj.small} /> 
              </Modal>
            </CardText> 
          </CardBody>
        </Card>
        <br/><br/>
      </div>
    );
  }
}


export default Radium(Picture);