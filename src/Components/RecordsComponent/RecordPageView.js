import React,{Component} from 'react'
import {Container,Jumbotron,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class RecordPageView extends Component {
    render() {

        return (
            <Card>
                <Card.Header> Records </Card.Header>
                <Card.Body>To mantain the strucutral data for optimized 
                    performace of the 
                    {this.props.match.path}
                    
                    <hr></hr>
                    syaytem. </Card.Body>
    
                <Card.Link>
                        <Link   to={`${this.props.match.path}studentrecords`}>
                         Student Records</Link>
                </Card.Link>
                <Card.Link>
                     <Link   to={`${this.props.match.path}staffrecords`}>
                         Staff Records</Link>
                </Card.Link>
                <Card.Link>
                     <Link   to={`${this.props.match.path}modifyrecords`}>
                         modify Records</Link>
                </Card.Link>
    
                <Card.Footer> and finally the ffooter</Card.Footer>
            </Card>
        )
    }
}
export default RecordPageView;