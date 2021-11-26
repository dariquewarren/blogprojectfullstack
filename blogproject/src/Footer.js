import React from 'react'
import Container from 'react-bootstrap/Container'
function Footer() {
    return (
        <div style={{border: '4px solid #212121', textAlign: 'center', height: '20vw'}}>
            
        <Container fluid style={{border:'2px solid red',height: '10vw', marginTop: '5vw', marginBottom: '5vw'}}> 
        <h3> Code by: Darique Warren</h3>
        <h3> Lifestyle: Creator</h3>
        <h3> POV: *See Lifestyle* {window.location.pathname}</h3>

        </Container>
        </div>
    )
}

export default Footer
