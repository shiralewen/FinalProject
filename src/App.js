import React from 'react';
import HomePage from './components/homePage/homePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import SignUpChild from './components/SignUpChild/SignUpChild'
import CreateEvent from './components/CreateEvent/CreateEvent'
import ManagerScreen from './components/ManagerScreen/ManagerScreen'
import { Route,Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
 return(
   <div className="app">
     
       <Header/> 
        
       <Switch>
       <Route path="/ManagerScreen" component={ ManagerScreen}/>
       <Route path="/SignUpChild" component={ SignUpChild}/>
       <Route path="/CreateEvent" component={ CreateEvent}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/SignUp" component={SignUp}/> 
       <Route path="/" component={HomePage}/>
       </Switch>
       <Footer/> 
     
       </div>
 )
}
export default App;
