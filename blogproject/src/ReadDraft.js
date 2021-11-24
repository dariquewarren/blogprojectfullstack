import React from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container'
import Article from './Article'
function ReadDraft(props) {

    const objectArray = [{author: 'MR. Mister'}]
 const {id} = useParams()
    return (
        <Container>
        <button
        onClick={()=>{
            console.log(id)
        }}
        >
        test button
        </button>
            <Article {...objectArray} />
        </Container>
    )
}

export default ReadDraft
