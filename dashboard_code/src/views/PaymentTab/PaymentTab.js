import React from 'react'
import Card from 'react-credit-cards'
import './PaymentTab.css'
import jwt_decode from 'jwt-decode'

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from './utils'
import 'react-credit-cards/es/styles-compiled.css'

export default class App extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: '',
        token: ''
    }

    // componentDidMount() {
    //     const tok = sessionStorage.getItem('authToken')
    //     const decoded = jwt_decode(tok)
    //     this.setState({ token: decoded.user })
    // }

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer })
        }
    }

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        })
    }

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value)
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value)
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value)
        }

        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { issuer } = this.state
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value
                return acc
            }, {})

        this.setState({ formData })
        this.form.reset()
    }

    moveToTicketPage = e => {
        e.preventDefault()
        localStorage.setItem('paymentData', JSON.stringify(this.state.token))
        window.location.href = '/getTicket'
    }

    renderNamesOfPassenger = () => {
        let passArray = localStorage.getItem('nameData')
        if (passArray) {
            let nameArray = JSON.parse(passArray)
            return nameArray.map((name, idx) => {
                return <p key = { idx } > { name } </p>
            })
        }
    }

    renderSeatNumbers = () => {
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            return seaArr.map((seat, idx) => {
                return <p key = { idx } > { seat } </p>
            })
        }
    }

    getSumTotal = () => {
        let count = 0
        let tax = 150
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            for (let i = 0; i < seaArr.length; i++) {
                count++
            }
            return ( 
                
                <div>
                
                <hr className = 'hr3' />
                
                <p > { 1000 * count } </p> <p> +{tax} </p > < p > { 1000 * count + tax } </p>{' '} 
                </div>
            )
        }
    }

    render() {
        const {
            name,
            number,
            expiry,
            cvc,
            focused,
            issuer,
            formData,
            token
        } = this.state

        return (
           
            <div class="paym">
                <div class="row">
                    <div>
                        <div class="App-payment cl-1">
                            <p class="pPayment"> Enter Credit card details </p>
                              <div class="rccs">
                                  <div class="rccs__card rccs__card--unknown">
                                  <div class="rccs__card--front">
                                      <div class="rccs__card__background">
                                          </div>
                                          <div class="rccs__issuer">
                                              </div>
                                              <div class="rccs__cvc__front">
                                                  </div>
                                                  <div class="rccs__number">•••• •••• •••• ••••</div>
                                                  <div class="rccs__name">YOUR NAME HERE</div>
                                                  <div class="rccs__expiry">
                                                      <div class="rccs__expiry__valid">valid thru</div>
                                                      <div class="rccs__expiry__value">••/••</div>
                                                    </div>
                                                      <div class="rccs__chip">

                                                      </div>
                                    </div>
                                                      <div class="rccs__card--back">
                                                          <div class="rccs__card__background"></div>
                                                          <div class="rccs__stripe"></div>
                                                          <div class="rccs__signature"></div>
                                                          <div class="rccs__cvc"></div>
                                                          <div class="rccs__issuer"></div>
                                                        </div>
                                    </div>
                                </div> 
                                <form class="credit-form">
                                    <div class="form-group">
                                        <input type="tel" name="number" class="frm-ctrl" placeholder="Card Number" pattern="[\d| ]{16,22}" required=""/> 
                                        </div> 
                                            <div class="form-group">
                                                <input type="text" name="name" class="frm-ctrl" placeholder="Name" required=""/>  
                                                </div>  
                                                <div class="form-group">
                                                    <input type="tel" name="expiry" class="frm-ctrl" placeholder="Valid Thru" pattern="\d\d/\d\d" required=""/>
                                                </div> 
                                                <div class="form-group">
                                                <input type="tel" name="cvc" class="frm-ctrl cvc" placeholder="CVC" pattern="\d{3,4}" required=""/>
                                                </div>  
                                            <input type="hidden" name="issuer" value=""/>  
                                            <div class="">
                                                <button class="btn btn-light btCustom">PAY   </button>  
                                            </div> 
                                </form> 
                        </div> 
                    </div>  
                    <div class="columnTwo">
                        <h3> Unique Travels </h3>  
                        <div>
                            <p> BOOKING DETAILS </p>
                                <div class="row">          
                                     <div class="col-6 pt">
                                        <p class="hdng"> Username </p> 
                                        <hr class="hr3"></hr>
                                        <p class="hdng"> Date </p> 
                                        <p class="hdng"> From </p>
                                        <p class="hdng"> To </p>                                      
                                        <hr class="hr3"></hr>
                                        <p class="hdng"> Passengers </p> 
                                        <hr class="hr3"></hr>
                                        <p class="hdng"> Ticket price </p> 
                                        <p class="hdng"> Tax </p>
                                        <p class="hdng"> Toal Sum </p>                                                                                          
                                    </div> 
                                    <div class="col-6">
                                        <hr class="hr3"></hr>
                                            <p class="usrName">   2022-04-22   </p> 
                                            <p class="usrName"> Chennai </p> 
                                            <p class="usrName">   Hyderabad   </p> 
                                        

                                            <hr class="hr3"></hr>
                                            <p class="hdng">Seat No   </p> 
                                            <p> </p>
                                            
                                    </div>  
                                </div> 
                        </div>  
                    </div>  
                </div>  
             </div>
            
        )
    }
}