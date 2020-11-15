import React,  { Component }from 'react'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
 
import './SignIn.css'

class SignIn extends Component{

 render () {
  
  return(
    
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         כניסה לאזור האישי
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid id="name" icon='user' iconPosition='left' placeholder='שם משתמש' />
          <Form.Input
            fluid id="password"
            icon='lock'
            iconPosition='left'
            placeholder='סיסמא'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            כניסה
          </Button>
        </Segment>
      </Form>
      <Message>
      חדש אצלינו? <a href='/SignUp'>להרשמה</a>
      </Message>
    </Grid.Column>
  </Grid>
  
)
}
}

export default SignIn;