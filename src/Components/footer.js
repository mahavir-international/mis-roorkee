import React from 'react'
import {Container} from 'react-bootstrap'

export default function footer() {
    return (
        <footer md className="mb-2" style={style}>
            This is Footer 
        </footer>
    )
}

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}