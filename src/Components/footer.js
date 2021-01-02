import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import './footer.css'

export default function footer() {
    return (
        <footer md className=" container footerStyle " >
            <div className=" bg-dark">
            <div className="row">
                <div className="col rightLink">
                
                <p><a href="/Admission">Admission</a> </p>
                <p><a href="/aboutus">About Us</a> </p>
                <p><a href="/contactus">Contact Us</a> </p>
                

                </div>

                <div className="col rightLink">
                <p><a href="/student-records">Student Records</a> </p>
                <p><a href="/staff-records">Staff Records</a> </p>
                <p><a href="/Add-records">Add Records</a> </p>
                </div>
            </div>

            <span className='last'>
                <div className="social" >
            <a href="https://www.facebook.com/mahavirinternationalschoolroorkee/" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/misroorkee/" class="fa fa-instagram"></a>
            <a href="https://www.youtube.com/channel/UCT0tDR0LZQf59UYLupDXZ9g" class="fa fa-youtube"></a>
             
                </div>
            <p className="footerTail">

            Copyright © 2020 MAHAVIR INTERNATIONAL SCHOOL 
            </p>
            </span>
            
            </div>
            
            
        </footer>

    )
}

const footerStyle = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    // padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: 'auto',
    width: "100%",
    color:'white',
    justifyContent: 'center'
}