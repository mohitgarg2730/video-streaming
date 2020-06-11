import React,{Component} from 'react';
import logo from "../Images/Logo/logo.png";
import { Navbar , Nav,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../Images/bannermovies.jpg";
import Modal from 'react-bootstrap/Modal'
class Header extends Component 

{  constructor(props) {
  super(props);
  this.state = {show : false};
}

  
  render(){
    const handleClose = () => this.setState({ show : false });
    const handleShow = () => this.setState({ show : true });
  return (
    <div>
    <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">       <img src={logo} className="logo" /> 
   </Navbar.Brand>
    
   <Nav className="ml-auto">
      <Nav.Link href="#home" className="mr-2"><span onClick={handleShow} >Signin </span> </Nav.Link>
    </Nav> 
   </Navbar>
  
   <Modal
        show={this.state.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

   </div>
  );

  }

}

export default Header;
