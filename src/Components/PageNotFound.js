import React from 'react'
import {Container,Jumbotron} from 'react-bootstrap'
export default function PageNotFound() {
    return (
        <Jumbotron style={curStyle}>
            <h1 >404 The Page Not FOund</h1>
        </Jumbotron>
    )
}

const curStyle ={
    fontSize: '12rem',
    backgroundColor: 'black',
    height: 'auto',
    color: 'white'
}
