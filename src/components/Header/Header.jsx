import React from 'react'
import './Header.css';
import { Component } from 'react';

 
 

 
class Header extends Component{

render(){
  
return (
    <div className="App">
      <header className="App-header">
        <img  src={require("./Logo.png")} alt="ggg" className="logo"></img>
      </header>
    </div>
  );
}
}
export default Header;