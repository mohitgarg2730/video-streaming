import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="w-100 mt-5">
                <div className="text-white mt-5">

                    <div className="border signini border-primary p-5">
                       
                            <h3>Sign-In</h3>
                            <form>
                                <div class="form-group mt-3">
                                    <label for="exampleInputEmail1">Email (phone for mobile accounts)</label>
                                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    <small id="emailHelp" className="float-right">Forget Password</small>
                                </div>

                                <div class="form-group mt-5">
                                    <button type="submit" className="btn btn-primary form-control mt-3">Signin</button>

                                </div>

                            </form>
                 
                        </div>
                    </div>
                </div>

         

        );

    }

}

export default Form;
