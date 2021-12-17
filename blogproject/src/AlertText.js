import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
const AlertText =(props) => {
  
    if (props.showAlert) {
      return (
        <Alert variant="danger" onClose={() => props.setShowAlert(false)} dismissible>
          <Alert.Heading>Oh snap!</Alert.Heading>
          <p>
            {props.AlertMessage}
          </p>
        </Alert>
      );
    }
    return <p></p>;
  }
export default AlertText