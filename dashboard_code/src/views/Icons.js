
import React from "react";
import './BuyTicket.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function BuyTicket() {
  return (
    <>
    <div className="container d-flex justify-content-center">
    <div className="content mt-4">
      <div className="row">
  <div className="col-75">
    <div class="container">
      <form action="/action_page.php">
      
        <div class="row">
          <div className="debit">
            <h3>Payment through debit card</h3>
          </div> 

          <div >
			  <br/>
			  <br/>
            <label for="fname"><b><h3>Accepted Cards</h3></b></label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{"color":"navy"}}></i>
              <i class="fa fa-cc-amex" style={{"color":"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{"color":"red;"}}></i>
              <i class="fa fa-cc-discover" style={{"color":"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Full Name on Card"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <Link to="/home/maps" className="btn btn-success">Confirm Payment</Link>

        {/* <input type="submit" value="Confirm Payment" class="btn"/> */}
      </form>
    </div>
  </div>

</div>
      </div>
    </div>
    </>
  );
}

export default BuyTicket;
