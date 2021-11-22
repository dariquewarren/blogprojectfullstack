import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Header() {
    return (
        <div 
        style={{
        border: '2px solid #212121', width: '100%', height:'auto', 
        backgroundColor: '#212121', color: 'whitesmoke'}}
        >
        <h2 style={{textAlign: 'center'}} >
           The Blog 
           </h2>
           <Row style={{border: '2px solid red', width:'100%'}}>
           <Col style={{border: '2px solid blue', width:'33%'}}>1</Col>
           <Col style={{border: '2px solid green', width:'33%'}}>2</Col>
           <Col style={{border: '2px solid yellow', width:'33%'}}>3</Col>
           </Row>
        </div>
    )
}

export default Header
