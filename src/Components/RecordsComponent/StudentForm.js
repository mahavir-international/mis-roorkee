import React from 'react'
import {Container,Jumbotron,Form,Col,Row,Button} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";



export default class StudentForm extends React.Component {

    state = {
        firstName:'fds'
    }

    update = () => {
        // console.log("print")
        console.log(this.state);
    }

    render() {
    
    return (
        <div>
            <h2>Add Student Record</h2>
            <hr/>

            <Form>

<Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="First Name" />
    </Col>

    <Form.Label column sm={2}>
    Last Name
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Last Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" placeholder="Email" />
    </Col>

    <Form.Label column sm={2}>
      Phone Number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text/number" placeholder="Phone Number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Date Of Birth
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="date" placeholder="date" />
    </Col>

    <Form.Label column sm={2}>
      Admission number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Admission number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    

    <Form.Label column sm={2}>
      Aadhaar Number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="number" placeholder="Aadhaar Number" />
    </Col>

    <Form.Label column sm={2}>
      Admission Date
    </Form.Label>
    <Col sm={4}>
    <Form.Control type="date" placeholder="date" />
    </Col>
  </Form.Group>


  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={4}>
      <Form.Control as="select" >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
        </Form.Control>
      </Col>

      <Form.Label as="legend" column sm={2}>
        Handicapped
      </Form.Label>
      <Col sm={4}>
      <Form.Control as="select" >
        <option>Yes</option>
        <option>No</option>
        </Form.Control>
      </Col>
            </Form.Group>
        </fieldset>

<hr/>
<Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Father Name
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Father Name" />
    </Col>

    <Form.Label column sm={2}>
      Annual Income
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="number" placeholder="Annual Income" />
    </Col>
  </Form.Group>


    <Form.Group as={Row}>
        <Col sm={{ span: 4, offset: 2 }}>
        <Button type="submit" onClick={this.update}>Add Student</Button>
        </Col>
    </Form.Group>
    </Form>
    </div>
    )
}

}
