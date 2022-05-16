import React, { useState } from 'react'
import './Routeselector.css'
import * as apiCall from './routeApifunc'
import BusList from '../BusList/BusList'
export default function Routeselector() {
    const [dataInp, setData] = useState("")
    const [startCity, setStartCity] = useState('')
    const [destination, setDestination] = useState('')
    const handleToCity = e => {
        e.preventDefault()
        setDestination({ destination: e.target.value })
        localStorage.setItem("destination", e.target.value)
    }
    const renderBusList = (dataInp) => {

        
        
        // console.log("Data Lenght is:",Array)
        
        // return (<BusList value={dataInp} />)
        if (Object.keys(dataInp).length > 0) {
            console.log("Data input:",<BusList></BusList>)
            return (<BusList value={dataInp} />)
        }
    }
    const handleFromCity = e => {
        e.preventDefault()
        setStartCity({ startCity: e.target.value })
        localStorage.setItem("start", e.target.value)
        // console.log(startCity)
    }

    const getRoutes = e => {
        e.preventDefault()

        console.log(startCity,destination)

        let dat = apiCall.getRoutesFromApi(startCity.startCity, destination.destination)

        
        apiCall.getRoutesFromApi(startCity.startCity, destination.destination)
        .then((value)=>{
            setData(value)
            console.log("my data",value)
        })

        // console.log("my data2",dataInp)

        
            
    }

    const handleDate = e => {
        e.preventDefault()
        //    console.log(e.target.value)
        localStorage.setItem("date", e.target.value)
    }
    
    return (
        <div className="rdc">
            <div className='inner-container'>
                <h3>Tiger Movers Ticketing System</h3>
                <hr></hr>
            
                <form onSubmit={e => getRoutes(e)}>
                    <div className='row'>
                        <div className='col-md-3 mb-4'>
                        <h5 style={{"margin-left":"5%"}}>To</h5>
                            <select  name="ad_account_selected" data-style="btn-new" class="selectpicker" onChange={e => { handleFromCity(e) }}>
                                <option> Departure Location</option>
                                <option>Lahore</option>
                                <option>Islamabad</option>
                                <option>Multan</option>
                                <option>Karachi</option>
                            </select>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <h5 style={{"margin-left":"5%"}}>From</h5>
                            <select  name="ad_account_selected" data-style="btn-new" className="selectpicker" onChange={e => { handleToCity(e) }}>
                                <option> Arrival Location</option>
                                <option>Layya</option>
                                <option>Islamabad</option>
                                <option>Peshawar</option>
                                <option>Rawalpindi</option>
                            </select>
                        </div>

                        <div className='col-md-3 mb-4'>
                            <div >
                                <h5 style={{"margin-left":"5%"}}>Date</h5>
                                <input className='selectpicker' onChange={e => { handleDate(e) }} type="date"></input>
                            </div>
                        </div>

                        <div className='col-md-3'  style={{"margin-top":"37px"}}>
                            <div className='d-flex justfy-content-center'>
                            <button className=" btn btn-primary btn-new" >Submit</button>
                            </div>
                        </div>
                    </div>
                </form>

                <div>

                    { renderBusList(dataInp)}
                </div>
            </div>
       
        </div>
    )
}