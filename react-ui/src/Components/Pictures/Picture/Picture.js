import React, { Component } from 'react';

import Modal from 'react-responsive-modal';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';





//********* styles **********
const textStyle = {
  ':hover': {
    backgroundColor: 'pink'
  }
}

const cardStyle = {
  backgroundColor: '#F5F5F5',
  border: 'none',
  flex: 1
}


//****************************








class Picture extends Component {


  state = {
    open: false,
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
          <CardImg top width="100%" src={this.props.pictureobj.urls.regular} onClick={this.onOpenModal}/>
          <CardBody>
	          <CardTitle style={textStyle}></CardTitle>
	          <CardSubtitle></CardSubtitle>
	          <CardText> <FaUser /> 
	          <Modal size="sm" open={open} onClose={this.onCloseModal} center>
              <CardImg size="sm" src={this.props.pictureobj.urls.regular} /> 
            </Modal>
	          </CardText> 
          </CardBody>
        </Card>
            <br/> <br/>

      </div>
    );

  }
}


  




export default Picture;