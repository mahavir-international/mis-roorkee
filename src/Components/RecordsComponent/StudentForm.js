import React from 'react'
import {Container,Jumbotron,Form,Col,Row,Button} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import firebase from '../../firebaseComponents/firestore';


export default class StudentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName:'alvin',
            gender:'M',
            handicapped:'N'
        }

        this.ref = firebase.firestore().collection('studentRecord');

    }
    

    update = (e) => {
        // console.log("print")
        e.preventDefault();
        // console.log(this.state);
        // alert("test")
        this.ref.doc(this.state.admissionNumber).
        set(this.state).then((docRef) => {
            console.log("log= ",docRef);
            this.setState({ done:'yes'});
            alert("Student Added admNo = ",this.state.admissionNumber)
          })
          .catch((error) => {
            alert("Error adding document: ", error);
          });
        
    }

    Change= (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    render() {
    
    return (
        <div>
            <h2>Add Student Record</h2>
            <hr/>

            <Form   onSubmit={this.update} >

<Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="First Name" name="firstName"
       onChange={this.Change} required />
    </Col>

    <Form.Label column sm={2}>
    Last Name
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Last Name" name="lastName" 
      onChange={this.Change} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail" >
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" placeholder="Email" name="email" onChange={this.Change} />
    </Col>

    <Form.Label column sm={2}>
      Phone Number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text/number" placeholder="Phone Number" name="phoneNumber" onChange={this.Change}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Date Of Birth
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="date" placeholder="date" name="dob"
       onChange={this.Change} required/>
    </Col>

    <Form.Label column sm={2}>
      Admission number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Admission number"
       name="admissionNumber" onChange={this.Change} 
       required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    

    <Form.Label column sm={2}>
      Aadhaar Number
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="number" placeholder="Aadhaar Number" name="aadhaarNumber" onChange={this.Change} />
    </Col>

    <Form.Label column sm={2}>
      Admission Date
    </Form.Label>
    <Col sm={4}>
    <Form.Control type="date" placeholder="date" name="admissionDate" onChange={this.Change}/>
    </Col>
  </Form.Group>


  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={4}>
      <Form.Control as="select" name="gender" onChange={this.Change} >
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
        </Form.Control>
      </Col>

      <Form.Label as="legend" column sm={2}>
        Handicapped
      </Form.Label>
      <Col sm={4}>
      <Form.Control as="select"  name="handicapped" onChange={this.Change}>
        <option value="N">No</option>
        <option value="Y">Yes</option>
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
      <Form.Control type="text" placeholder="Father Name" 
      name="fatherName" onChange={this.Change} />
    </Col>

    <Form.Label column sm={2}>
      Annual Income
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="number" placeholder="Annual Income"
      name="annualIncome" onChange={this.Change} />
    </Col>
  </Form.Group>

<Form.Group as={Row} >
    <Form.Label column sm={2}>
        Addresses
        </Form.Label>
    <Col sm={4}>
    <textarea onchange={this.Change} 
    name="address" onChange={this.Change}/>
    </Col>
        

</Form.Group>

    <Form.Group as={Row}>
        <Col sm={{ span: 4, offset: 2 }}>

        <Button type="submit" >Add Student</Button>
        </Col>
    </Form.Group>
    </Form>
    </div>
    )
}

}
