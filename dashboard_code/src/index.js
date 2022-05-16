
import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import "assets/scss/paper-dashboard.scss?v=1.3.0";
// import "assets/demo/demo.css";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

import Dashboard from "./layouts/Admin";
import Navbar from './myComponents/Navbar';
import Aboutus from './myComponents/Aboutus'
import Contactus from "./myComponents/Contactus"
import BuyTicket from "./views/Icons"




ReactDOM.render(
  <BrowserRouter>
    <Switch>
    {/* <Route path="/" render={()=><Aboutus />}/> */}
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/Aboutus" component={Aboutus}/>
      <Route exact path="/Contactus" component={Contactus}/>
      <Route path="/home" render={(props) => <Dashboard {...props} />} />

      <Route  path="/buyticket" component={BuyTicket}/>

      
    
      <Route path="/home" render={(props) => <Dashboard {...props} />} /> 
      {/* <Route path="/home/maps" render={(props) => <Dashboard {...props} />} />  */}

       {/* <Redirect to="/admin/dashboard" /> */}
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);
