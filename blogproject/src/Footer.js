import React from 'react'
import Container from 'react-bootstrap/Container'
function Footer() {
    return (
        <div style={{border: '4px solid #212121', textAlign: 'center', height: '15rem'}}>
            
        <Container fluid style={{borderTop:'2px dashed red',height: 'auto', marginTop: 'auto', marginBottom: 'auto'}}> 
        <h3> Code by: Darique Warren</h3>
        <h3> EvilBunny Enterprises</h3>
        <h3> Phone: (123) 456-7890</h3>
        <h3> Email: BunnyMGMT@bunny.com</h3>


        </Container>
        </div>
    )
}

export default Footer
