import React,  { Component }from 'react'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
 
import './SignUpChild.css'

class SignUpChild extends Component{

 render () {
  
  return(
    
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        הרשמה חניך
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='file' iconPosition='right'  type='file' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='right'
            placeholder='סיסמא'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
      ?חדש אצלינו <a href='/SignUp'>להרשמה</a>
      </Message>
    </Grid.Column>
  </Grid>
  
)
}
}

export default SignUpChild;