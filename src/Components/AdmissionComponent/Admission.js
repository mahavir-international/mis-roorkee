import React, { Component } from 'react'
import {Container,Jumbotron} from 'react-bootstrap'
import tcimg from '../../assets/tcimg.jpg';
import './Admissioncss.css'

export default class Admission extends Component {
    render() {
        return (
            <Jumbotron fluid>

<div class="card">
  <div class="card-body">
    <h4 class="card-title">Admission Rules</h4>
    <p class="card-text block">
    <ol >
  <li>Registration forms are to be filled &amp; submitted to the school office (only) within three days of issue of Registration Form.</li>
  <li>Incomplete or illegible Registration Forms, without photograph, will be considered invalid.</li>
  <li>Date of written test/observation &amp; interaction will be given at the time of registration.</li>
  <li>Registration does not imply admission which is subject to admission test/ observation &amp; interaction &amp; the availability of seats.</li>
  <li>At the time of Registration the following documents along with the Registration form are to be submitted to the school office:</li>
  <li>Duly filled &amp; signed Registration Form.</li>
  <li>Recent coloured passport photograph pasted at the appropriate places in the Form.</li>
  <li>Photocopy of Proof of Date of Birth (issued by Municipal Corporation).</li>
  <li>Admission to LKG/UKG will be through observation/interaction.</li>
  <li>There will be a written test for students seeking admission to class I-IX Parents must be present in the school on the day of the test &amp; interaction. The entire process may last up to two – three hours hence parents are advised to plan their schedules accordingly.</li>
  <li>Care must be taken to ensure that the date of birth filled in the Registration form tallies with that on the original birth certificate.</li>
  <li>In case, the child is found to be mentally/ physically unfit to attend the school, the Management reserves the right to cancel the admission &amp; refund the security deposit only.</li>
  <li>Parents must bring both the copies of Admit Card to the school on the written test &amp; interaction date.</li>
  <li>List of short listed candidates will be displayed in the school office (date will be intimated on the written test day).</li>
  <li>The candidates will be called for interaction/interview , if required.</li>
  <li>The parents of the successful candidates will be required to complete the admission formalities by depositing the required fees &amp; other charges along with the submission of necessary documents within the date prescribed.</li>
</ol>

    </p>
  </div>
</div>


<div class="card">
  <div class="card-body">
  {/* <div class="card-img-top" src={tcimg} alt="Card image cap" height="50px"/> */}
    <h4 class="card-title">TC & WITHDRAWALS</h4>
    <h6 class="card-subtitle mb-2 text-muted">Instructions to Follow for TC</h6>
    <p class="card-text block">
        <ol>
        <li>Transfer certificate will be issued only on submission of a written application on the format available at the school's front desk by the parent or guardian, at least one month before the last date of attending school.</li>
        <li>Fees for the quarter in which the student leaves is to be paid and the bus fees upto the period for which the facility is availed.</li>
        <li>T.C will not be issued unless all the dues of the school are cleared.</li>
        </ol>
    </p>
  </div>
</div>


    
            </Jumbotron>
        )
    }
}


