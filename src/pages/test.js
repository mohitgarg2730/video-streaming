import React, { Component } from 'react';
class Test extends Component {

    render() {
        return (
            <div>
                <div className="signin text-white">

                    <div className="border border-primary p-5">
                        <h3>Sign-In</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email (phone for mobile accounts)</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />
                                <small id="emailHelp" className="float-right">Forget Password</small>
                            </div>

                            <div class="form-group mt-5">
                                <button type="submit" className="btn btn-primary form-control">Submit</button>

                            </div>

                        </form>
    New to Star?
    <button type="submit" className="btn"> Create your Star account</button>
                    </div>
                </div>

            </div>

        );

    }

}

export default Test;
