import { Component } from 'react';
import React from 'react';
import './Signup.css';
import Login from './Login';
const Signup = ({ state, closeSignup,closeSignupshowlogin,  children })=>
{
    //  state=true;
    const showHideClassName = state  ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
        <div class="container mt-4">
        <div class="row">
        {children}
			<div class="col-lg-5 col-md-7 col-sm-8 col-9 mx-auto">

			      <div class="myform form " style={{"marginTop":"10px"}}>
                        <div class="logo mb-3 d-flex">
                           <div class="col-11 text-center">
                              <h1 >Signup</h1>
                           </div>
                           <div>
                           
                        <button type="button"class="btn-close" aria-label="Close" onClick={closeSignup} >
                        </button>
                        </div>

                        </div>
                        <form>
                           <div class="form-group mb-2">
                              <label for="exampleInputEmail1">Full Name</label>
                              <input type="text"  name="Full Name" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Full Name"/>
                           </div>
                           <div class="form-group mb-2">
                              <label for="exampleInputEmail1">Phone Number</label>
                              <input type="text"  name="Phone Number" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Phone Number"/>
                           </div>
                           <div class="form-group mb-2">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"/>
                           </div>
                           <div class="form-group mb-2">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>

                           <div class="form-group mb-4">
                              <label for="exampleInputEmail1">Confirm Password</label>
                              <input type="password" name="Confirm password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                           </div>

                           <div class="col-md-12 text-center mb-3">
                              <button type="submit" class="btn btn-primary " onClick={closeSignupshowlogin}>Sign Up</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="">
                                 <p class="d-flex justify-content-center" ><a href="#" id="signin"  onClick={closeSignupshowlogin} >Already have an account? Login</a></p>
                              </div>
                           </div>
                            </form>
                        </div>
			</div>
		</div>
        </div>
        </div>
    );
};
export default Signup;
