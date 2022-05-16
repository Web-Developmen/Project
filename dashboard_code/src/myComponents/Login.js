import React, { useState,useHistory } from 'react';
import './Login.css';
import './Modal.css';
import Signup from './Signup';
// import Dashboard from 'views/Dashboard';
import { Link,Route,Redirect } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
const Login = ({  show, show1, closeLogin,closeLoginshowsignup, children }) => {




    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return(
    <div className={showHideClassName}>
     <div class="container">
        <div class="row">
            {children}
			<div class="col-lg-5 col-md-7 col-sm-8 col-9 mx-auto">
			
				<div class="myform form " style={{"marginTop":"30px"}}>
					 <div class="logo mb-3 d-flex">
                       
                         <div class="col-11 text-center">
							<h1>Login</h1>
						 </div>
                         <div>
                         <button type="button" class="btn-close" aria-label="Close" onClick={closeLogin}></button>
                         </div>
					</div>
                   <form action="" method="post" name="login">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           </div>
                           <div class="form-group mt-2">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>

                           <div class=" d-flex justify-content-start mb-4 mt-2">
                               <input className='me-2 mt-1' type="checkbox" value="" id="form1Example3" />
                               <label class="form-check-label" for="form1Example3"> Forgot password </label>
                            </div>

                           <div class="col-md-12 text-center mt-4 ">
                           <Link to="/home" className="btn btn-primary">Login</Link>
                              {/* <button style={{ width:"245px", height:"48px"}} class="btn btn-primary btn-lg btn-block" type="submit" onClick={()=>onclick}>Login</button> */}
                           </div>

                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           <div class="col-12 mb-5 text-center">

                               <button class="btn   btn-primary mb-2 mt-3" style={{"backgroundColor":" #dd4b39", width:"245px", height:"48px"}}type="submit">
                                   <i class="fab fa-google me-2"></i> Sign in with google
                                </button>
                                <button class="btn  btn-primary" style={{"backgroundColor":" #3b5998", width:"245px", height:"48px"}}type="submit">
                                    <i class="fab fa-facebook-f me-2"></i>Sign in with facebook
                                </button>
                            </div>
                           
                           <div class="">

                           
                              <p className='d-flex justify-content-center'>Don't have account? <a onClick={closeLoginshowsignup}   href="#" id="signup">Sign up here</a></p>
                           </div>
                           
                        </form>
                 
				</div>
			</div>        
		</div>
    </div>
    </div>

    
    );
};
export default Login