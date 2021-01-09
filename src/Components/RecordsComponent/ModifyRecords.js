import React, { Component } from 'react'
import StudentForm from './StudentForm';
import StudentFormv1 from './StudentFormv1';

import {Container,Jumbotron,Form,Col} from 'react-bootstrap';

export default class ModifyRecords extends Component {
    render() {
        return (
            <Jumbotron>
                <StudentForm/>
                
            </Jumbotron>
        )
    }
}
