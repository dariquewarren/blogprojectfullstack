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
           This Evil Bunny
           </h2>
          
        </div>
    )
}

export default Header
