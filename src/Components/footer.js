import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import './footer.css'

export default function footer() {
    return (
        <footer md className="pt-1 container-fluid footerStyle " >
            <div className=" bg-dark">
            <div className="row">
                <div className="col">
                <a href="/Admission">Admission</a> 
                </div>

                <div className="col">
                <a href="/Admissionk">No Link</a> 
                </div>
            </div>
            <hr/>
            <p className='last'>
            Copyright © 2020 MAHAVIR INTERNATIONAL SCHOOL 
            </p>
            
            </div>
            
            
        </footer>

    // <footer className="footer">
    // <nav className="navbar navbar-default navbar-custom navbar-dark bg-dark">
    //     <div className="container-fluid ">
    //         <Row>
    //                 <Col  className="flex-fill bg-success container-fluid">
                        
    //                         <ul >
    //                             <li>
    //                                 <a href="/Admission">Admission</a>
    //                             </li>
    //                     </ul>
    //                 </Col>
                    
    //                 <Col className="flex-fill bg-danger container-fluid">
                    
    //                     <ul >
    //                         <li>
    //                             <a href="">Right link</a>
    //                         </li>
                            
    //                     </ul>
    //                 </Col>
    //         </Row>
            
    //     <Row className="bg-info">
    //         <div class="text-center">
    //             <a href=""><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
    //             <a href=""><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
    //             <a href=""><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
    //             <a href=""><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
    //         </div>
    //         </Row>
    //     </div>

    // </nav>
    // </footer>


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
    color:'white'
}