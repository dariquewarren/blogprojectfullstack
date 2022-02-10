import React from 'react'
import Container from 'react-bootstrap/Container'
function Footer() {
    return (
        <div style={{color:'whitesmoke', backgroundColor:'#353535' ,border: '4px solid #212121',paddingTop:'1rem',paddingBottom:'1rem', textAlign: 'center', display:'flex', flexDirection:'row'}}>
            
        <div style={{width:'40%', marginLeft:'auto', marginRight:'auto'}}>
        <h3> Code by: Darique Warren</h3>
        <h3> EvilBunny Enterprises</h3>
        </div>
        
        <div style={{width:'40%', marginLeft:'auto', marginRight:'auto'}}>
        <h3> Phone: (123) 456-7890</h3>
        <h3> Email: BunnyMGMT@bunny.com</h3>
        </div>

        </div>
    )
}

export default Footer
