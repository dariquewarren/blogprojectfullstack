import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Article from './Article'
function ReadDraft(props) {
    const objectArray = [{author: 'MR. Mister'}]
console.log(props)
    return (
        <Container>
            <Article {...objectArray} />
        </Container>
    )
}

export default ReadDraft
