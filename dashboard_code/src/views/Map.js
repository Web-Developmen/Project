
import React from "react";
import './MyTickets.css'

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function MyTicket() {
  return (
    <>
    <div className="container d-flex justify-content-center mt-5">
    <div className="content">
      <div className="container">

<div>
    <article className="ticket">
        <header className="ticket__wrapper">
            <div className="ticket__header">
                1 🎟 Tiger Movers
            </div>
        </header>
        <div style={{"backgroundColor":"lightgray"}}>
<div className="ticket__divider">
            <div className="ticket__notch"></div>
            <div className="ticket_notch ticket_notch--right"></div>
        </div>
        <div className="ticket__body">
            <section className="ticket__section">
                <h3><b>Passenger Name-------</b> Ahmad Ali</h3><br></br>
             
            </section>
            <section className="ticket__section">
                <h3><b>Payment Method------</b> Credit Card</h3><br></br>
                <h3><b>Departure City------</b> Lahore</h3><br></br>
                <h3><b>Arrival City--------</b> Multan</h3><br></br>
                <h3><b>Date & Time-------</b> 3/23/22 8:30PM</h3><br></br>
                
            </section>
        </div>
        <footer className="ticket__footer">
            <p><b>Transaction-ID-------</b> 12345678</p>
         
        </footer>
        <div>
        <button class="btn   btn-primary " style={{"backgroundColor":" #dd4b39", width:"80%", height:"48px","margin-left":"10%"}}type="submit">
                                   Cancel Ticket
                                </button>
        </div>
</div>
    </article>
</div>

</div>
      </div>
    </div>
    </>
  );
}

export default MyTicket;
