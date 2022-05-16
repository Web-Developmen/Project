import React, { useState, useEffect } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './busList.css'
import SeatSelection from './SeatSelection/SeatSelection'
import  { Redirect } from 'react-router-dom'

export default function BusList({ value: dataInp }) {

    const [obj, setObj] = useState('')
    const [reset, Setreset] = useState(false)
    const [arrowDown, setArrowDown] = useState(false)
    const [clas, SetClas] = useState(true)


    useEffect(() => {
        setObj(dataInp)
    }, [dataInp])


    const handleSubmit = bId => {
        // localStorage.setItem("selectedBusId", bId)
        // SetClas(false)
        // setArrowDown(true)
        {console.log("chal ja bhai")}
        return <Redirect to='../SeatSelection/SeatSelection'  />

    }


    const handleReset = (e) => {
        if (clas === false) {
            Setreset(true)
            SetClas(true)
            setArrowDown(false)
        }
        localStorage.removeItem("selectedBusId")
    }


    const renderFunction = () => {
        return dataInp.map((bus, idx) => {
            // let bId = bus._id
            return (
                <div key={idx} className="card mt-5 buslist">
                    <div class="row ml-3">
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Time</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Price</div>

                        <div class="w-100 d-none d-md-block"></div>

                        {console.log(bus.seatArray)}
                        <div class="col-6 col-sm-3 mb-4">{bus.companyName}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.startCity}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.destination}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.pricePerSeat}</div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">


                            {/* <button className={clas ? "btn btn-primary btn-md" : "btn btn-primary btn-md disabled"} onClick={(bId) => { handleSubmit(bus._id) }} >Select Bus</button> */}
                            
                            

                        </div>

                        {/* 
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <span className={reset ? "badge badge-danger ml-5" : "disabled"} onClick={e => handleReset(e)}>Reset</span>
                        </div> */}
                    </div>
                    <div>
                        <ul className="nav nav-pills">

                            <li className="nav-item">
                                <a className="nav-link " data-toggle="pill" href="#selectseat">Select Seat</a>
                            </li>

                        </ul>

                        <div className="tab-content">
                            {console.log("Chal jao BHai jaan")}
                            <div className="tab-pane container fade mn-box" id="selectseat"><SeatSelection /></div>
                        </div>
                    </div>
            </div >
            )
        })

    }


    return (
        <div className="">
            {renderFunction()}
            <div className={arrowDown ? "activeArrow" : "nonActive"}>
                <FaAngleDoubleDown />
            </div>
        </div>

    )
}