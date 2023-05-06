import React from 'react'
import {Card,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Profile = (props) => {

    const handleName = (fullname) => alert(`My Name is ${props.fullname} `)
    
  return (
    
    <div style={{ marginLeft : "40%"}} >
   
   <Card style={{ width: '18rem' }}>
        {props.children}
        <Card.Body>
            <Card.Title>{props.fullname}  </Card.Title>
            <Card.Text> {props.bio} </Card.Text>
            <Card.Text> {props.profession} </Card.Text>
            <Card.Text> {props.age} </Card.Text>
            

            <Button variant="primary" onClick={handleName} >Click Me</Button>
        </Card.Body>
        </Card>

    </div>
  )
}

Profile.propTypes = {
    age: PropTypes.number
}

Profile.defaultProps = {
    title: "this is a title"
}

export default Profile