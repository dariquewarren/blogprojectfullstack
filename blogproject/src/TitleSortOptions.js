import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const TitleSortOptions = (props)=>{

    const handleTitleSort = (array, direction)=>{
        let newArray
        switch (direction){
            case 'AZ' :
            newArray = array.sort((a,b)=>{
                if (a.title < b.title) {
                    return -1;
                  }
                  if (a.title > b.title) {
                    return 1;
                  }
                  return 0;
            }) ;   
            console.log(direction, newArray);
            break;
            case 'ZA' :
                newArray = array.sort((a,b)=>{
                    if (a.title > b.title) {
                        return -1;
                      }
                      if (a.title < b.title) {
                        return 1;
                      }
                      return 0;
                }) ;   
                console.log(direction, newArray);
            break;
            default:
            console.log('no direction')
        }
        props.setNewArray(newArray)
        props.toggleSort(false)
    }

    return(
        <Container style={{border: '2px solid red', width: '50%'}}>
        <p>By Title</p>
        <Form.Group>
        <Button
        onClick={()=>{
            handleTitleSort(props.array, 'AZ')
        }}
        >Title(AZ)</Button>
        <Button
        onClick={()=>{
            handleTitleSort(props.array, 'ZA')
        }}
        >Title(ZA)</Button>
        </Form.Group>
        </Container>
    )
}
export default TitleSortOptions
