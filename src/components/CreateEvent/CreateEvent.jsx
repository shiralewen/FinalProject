 
import React, { Component } from 'react'
import axio from '../../axios'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './CreateEvent.css';
  
class CreateEvent extends Component{

  state={
    user:{
        date:"",
        name:"",
      place:"",
      address:"",
      sumPeople:""
    }
  }

  inputChange =(event)=>{
    const newperson={...this.state.user};
    const id=event.target.id;
    newperson[id]=event.target.value;
    this.setState({user:newperson});
  }

  newUserHandler =(user)=>{
    debugger;
    axio.post('user/register',user).then(x=>{
      console.log("sucses! "+x);
    })
  }

  render () {
   
   return(

 
    <Grid textAlign='center' style={{ height: '120vh',textAlign:"right" }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='orange' textAlign='center'>
         הרשמה למשפחת נותנים כח
        </Header>
        <Form size='large' onSubmit={()=>this.newUserHandler(this.state.user)}>  
          <Segment stacked>
          <Form.Input fluid id="date" iconPosition='certificate' placeholder='תאריך אירוע' type='date'onChange={(event)=>this.inputChange(event)}/>
          <Form.Input fluid id="name" icon='certificate' iconPosition='left' placeholder='שם אירוע' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="place" icon='map marker' iconPosition='left' placeholder='מקום אירוע' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="address"  icon='user' iconPosition='left' placeholder='כתובת אירוע'onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="sumPeople" icon='building' iconPosition='left' placeholder='מספר אנשים' onChange={(event)=>this.inputChange(event)}/>
            <Button color='teal' fluid size='large' type="submit" onClick={()=>this.newUserHandler(this.state.user)}>
              אישור
            </Button>
            </Segment>
             </Form></Grid.Column></Grid>
    
  )
   }
  }

export default CreateEvent;