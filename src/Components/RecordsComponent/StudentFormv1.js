import React from 'react'
import {Container,Jumbotron,Form,Col} from 'react-bootstrap';


export default function StudentFormv1() {
    return (
        <div>
            <h2>Add Student Records</h2>
                <hr/>
                <Form>

                    <Form.Row className="align-items-center">
                        <Col md>
                        <Form.Control type="number" placeholder="Admission Number" />
                        </Col>
                        <Col md>


                        <Form.Group controlId="GenderSelect">
                            <Form.Control as="select" >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            </Form.Control>
                        </Form.Group>
 


                        </Col>

<Col md>

<Form.Row>
    
<Form.Group inline controlId="handicapSelect">
{/* <Form.Label> Handicapped </Form.Label> */}
    <Form.Control as="select" >
    <option>No</option>
    <option>Yes</option>
    </Form.Control>
</Form.Group>
</Form.Row>




</Col>


                        <Col md>
                        <Form.Control type="date" 
                        name="dob" 
                        placeholder="Date of Birth" 
                        required/>
                        </Col>
                    </Form.Row>


                    <Form.Row>
                        <Col md>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col md>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col md>
                        <Form.Control placeholder="Father name" />
                        </Col>
                        <Col md>
                        <Form.Control placeholder="phone Number" />
                        </Col>
                    </Form.Row>
                    <hr/>
                    <button type="submit" className="btn btn-primary">Add Student</button>
                    </Form>
        </div>
    )
}
