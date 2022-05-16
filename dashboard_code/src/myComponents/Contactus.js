
import React from "react";
//import './MyWallet.css'
import './Contactus.css'
function Contactus(){
    return(
        <>
<div className="contact-body" >
  <div className="container container1">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Muhammadi Mohalla</div>
          <div className="text-two">Ghanta Ghar, Multan</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+923112677483</div>
          <div className="text-two">+923056748246</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">tigermovers@gmail.com</div>
          <div className="text-two">info.tigermovers@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a Message
        </div>
        <p>
            We are available 24/7 via email. You can also use a quick contact form below or visit our office personally. It's our pleasure to help you.

        </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
            <input type="text" placeholder="Enter your Message"/>

          
        </div>

        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>

        </>

    );

}
export default Contactus;