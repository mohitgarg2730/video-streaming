import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div>
                <div className="text-white mt-1">

                    <div className="border signin border-primary ml-3 p-5">
                     
                        <h3>Create account</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your name
</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Re-enter password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />

                            </div>

                            <div class="form-group mt-5">
                                <button type="submit" className="btn btn-primary form-control">          Create your Star account
</button>

                            </div>

                        </form>
                     
                    </div>
                </div>
                </div>


        );

    }

}

export default Signup;
