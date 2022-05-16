
import React from 'react';
import Login from './Login';
// import Modal from './Modal';
import Signup from './Signup';
// import Dashboard from 'layouts/Admin';
 import Aboutus from './Aboutus';
 import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      signup_show: false,
    };
    this.showLogin = this.showLogin.bind(this);
    this.crossingSignup = this.crossingSignup.bind(this);
    this.crossingLogin = this.crossingLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.crossSignupShowLogin = this.crossSignupShowLogin.bind(this);
    this.crossLoginShowSignUp = this.crossLoginShowSignUp.bind(this);
  }

  showLogin = () => {
    this.setState({ show: true });
    
  };
  crossingSignup=()=>
  {
    this.setState({signup_show: false});

  }
  crossingLogin=()=>
  {
    this.setState({ show: false });

  }
  showSignup=()=>
  {
    this.setState({signup_show: true});
  }
  crossSignupShowLogin=()=>
  {
    this.setState({signup_show: false});
    this.setState({ show: true });

  }
  crossLoginShowSignUp=()=>
  {
    this.setState({ show: false });
    this.setState({signup_show: true});

  }


    render() {
        return(
          


            <div style={{"backgroundImage":"url('/assets/img/bg.jpg')"}}>
            <section>
            
        <div class="container-fluid">
           <nav  class="navbar navbar-expand-lg navbar-dark fixed-top h-300px"style={{backgroundColor:"navy"}}>
  <div class="container">
    <a style={{color:"black"}} className='d-none ' class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    
    </button>
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li class="nav-item">
        <Link to="/Aboutus" style={{color:"white"}}  className="nav-link active" >About Us</Link>
          {/* <a style={{color:"black"}}  class="nav-link active" href="/Aboutus">About Us</a> */}
        </li>
        <li class="nav-item">
          {/* <a style={{color:"black"}} class="nav-link active" href="#">Contact</a> */}
          <Link to="/Contactus" style={{color:"white"}}  className="nav-link active" >About Us</Link>
        </li>
      </ul>
      </div>
      <Login   show={this.state.show} show1={this.state.signup_show} closeLogin={this.crossingLogin}  closeLoginshowsignup={this.crossLoginShowSignUp}  >
        </Login>
        <Signup state={this.state.signup_show} closeSignup={this.crossingSignup} closeSignupshowlogin={this.crossSignupShowLogin}  ></Signup>
      <span class="navbar-text d-flex">
        <button className='btn btn-primary me-3' onClick={this.showLogin} style={{width:"90px"}}>Login</button>
        <button className='btn btn-primary ' onClick={this.showSignup} style={{width:"90px"}}>Sign Up</button>
      </span>
    
  </div>
</nav>

<br /><br /><br /><br />


          </div>
          </section>
          </div>
    // }
          // </div>
          
        );
        
      }
      
  }
  export default Navbar