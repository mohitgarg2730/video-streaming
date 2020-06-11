import React, { useState, Component } from "react";
import banner from "../Images/bannermovies.jpg";
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Login from './componets/Login';
import Signup from './componets/Signup';

export default class Homepage extends Component {

    constructor() {
        super();

        this.state = {
            active1: 'active',
            active2: "",
        };
    }







    render() {
        const signin = () => { this.setState({ active2: "", active1: 'active' }); };
        const signup = () => { this.setState({ active1: "", active2: 'active' }); };
      

     
      
        return (
            <div>
                <div className="container-fluid c1">
                    <div className="row b2">
                        <div className="col-sm-6">
                            <div className="text-white homeheading">

                                <h1>Welcome to star Video</h1>

                                <h4 className="heading-content">Join Star to watch the latest movies, TV shows and award-winning Star Originals
                          </h4>
                                <div class="form-group mt-5">
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2" aria-label="First group">
                                            <Button variant="outline-primary text-white border border-light l1" onClick={signin} className={this.state.active1}>Signin</Button>
                                            <Button variant="outline-primary text-white  border border-light l1" onClick={signup} className={this.state.active2}>Signup</Button>
                                        </ButtonGroup>

                                    </ButtonToolbar>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-6 pl-4">
                        { 
                             (this.state.active1 === "active") ?
                              (<Login></Login>)
                             :
                            (<Signup></Signup>)
                            } 
          

                        </div>


                    </div>


                </div>
                <div className="container-fluid" >
                    <div className="row homepageheading">

                        <div className="col-sm-6">
                            <div className="text-white homeheading">
                                <h1>Enjoy Shows every month</h1>
                                <h4 className="heading-content">With your star membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.
                                </h4>
                                <Button variant="primary" size="lg" className="mt-5 lg">Get started</Button>

                            </div>

                        </div>
                        <div className="col-sm-6">
                            <img src={banner} className="banner" />

                        </div>
                    </div>
                </div>



            </div>


        );
    }
}


