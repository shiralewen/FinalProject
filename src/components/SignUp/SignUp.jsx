 
import React, { Component } from 'react'
import axio from '../../axios'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './SignUp.css';
  
class SignUp extends Component{

  state={
    user:{
     
      userCode :null,
     
      Tz :"",     
      lastName:"",
     
      firstName :"",
     
      city :"",
     
      street :"",
     
      phon:"",
     
      mail:"",
     
     password :"",
     
       dateborn:"",
     
      status :"",
    isAviable :0

    
    }
  }

  inputChange =(event)=>{
    const newperson={...this.state.user};
    const id=event.target.id;
    newperson[id]=event.target.value;
    this.setState({user:newperson});
  }

  newUserHandler =()=>{
    

    const user = {
      userCode :this.state.user.userCode,
     
      Tz :this.state.user.Tz,    
      lastName:this.state.user.lastName,
     
      firstName :this.state.user.firstName,
     
      city :this.state.user.city,
     
      street :this.state.user.street,
     
      phon:this.state.user.phon,
     
      mail:this.state.user.mail,
     
     password :this.state.user.password,
     
       dateborn:this.state.user.dateborn,
     
      status :this.state.user.status,
    isAviable :this.state.user.isAviable
    };

    debugger;
    axio.post('user/add',user).then(x=>{
      console.log("sucses! "+x);
    })
  }

  render () {
   
   return(

 
    <Grid textAlign='center' style={{ height: '120vh',textAlign:"right" }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='lightskyblue' textAlign='center'>
         הרשמה למשפחת נותנים כח
        </Header>
        <Form size='large'  onSubmit={()=>this.newUserHandler()}>  
          <Segment stacked>
          <Form.Input fluid id="firstName" icon='user' iconPosition='left' placeholder='שם פרטי' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="lastName" icon='user' iconPosition='left' placeholder='שם משפחה' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="Tz"  icon=' id card ' iconPosition='left' placeholder=' תעודת זהות 'onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="dateborn" iconPosition='left' placeholder='תאריך לידה' type='date'onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="city" icon='building' iconPosition='left' placeholder='עיר' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="street" icon='home' iconPosition='left' placeholder='רחוב' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="phon" icon='phone' iconPosition='left' placeholder='פלאפון' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="mail" icon='envelope' iconPosition='left' placeholder='מייל' type='mail' onChange={(event)=>this.inputChange(event)}/>
            <Form.Input fluid id="password" icon='lock' iconPosition='left' placeholder='סיסמא' type='password' onChange={(event)=>this.inputChange(event)}/>
          
    <Form.Input id="status" as="select" onChange={(event)=>this.inputChange(event)}>
    <option></option>
      <option>חניך</option>
      <option>מדריך</option>
      <option>מנהל</option>
      <option>מזכירה</option>
    </Form.Input><br/>
 
            <Button color='deepskyblue' fluid size='large' type="submit" onClick={()=>this.newUserHandler()}>
              אישור
            </Button>
            </Segment>
             </Form></Grid.Column></Grid>
    
  )
   }
  }

export default SignUp;