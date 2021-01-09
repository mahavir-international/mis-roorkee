
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import {Container,Jumbotron} from 'react-bootstrap';

import ModifyRecords from './ModifyRecords';

import RecordPageView from './RecordPageView';
import {Component} from 'react';

import StudentRecords from './StudentRecords';
import StaffRecords from './StaffRecords';

class Records extends Component {
  render() {
    return (
        <div>
            <Container >
                <Route path={`${this.props.match.path}/modifyrecords`} 
                component={ModifyRecords} />

                <Route path={`${this.props.match.path}/studentrecords`} 
                component={StudentRecords} />
                <Route path={`${this.props.match.path}/staffrecords`} 
                component={StaffRecords} />

                <Route exact path={`${this.props.match.path}/`} 
                component={RecordPageView} />
            </Container>
              
        </div>
      );

  }
}

export default Records;
