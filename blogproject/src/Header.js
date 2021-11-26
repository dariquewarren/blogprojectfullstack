import React from 'react'
import {Link} from 'react-router-dom'

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
           <Col style={{border: '2px solid blue', width:'33%'}}> <Link to='/'>Home</Link></Col>
           <Col style={{border: '2px solid green', width:'33%'}}><Link to='/all/drafts'>View Drafts</Link></Col>
           <Col style={{border: '2px solid yellow', width:'33%'}}><Link to='/write'>Write an Article</Link></Col>
           </Row>
        </div>
    )
}

export default Header
