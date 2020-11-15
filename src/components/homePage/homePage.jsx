import React, { useState } from 'react'
import  Carousel from 'react-bootstrap/Carousel'
import './homePage.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'


// import { Component } from 'react';

function HomePage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

    return (
      <div>
   
        {/* <Link to="/signin"><Button id="sign_in" variant="outline-warning"  size="lg">כניסה</Button></Link>
        <Link to={"/SignUp"}> <Button id="sign_up" variant="outline-warning"  size="lg">הרשמה</Button></Link> */}
           {/* <Link to="/signin"> <button id='sign_in'> כניסה</button></Link>
           <Link to={"/SignUp"}> <button id='sign_up'>הרשמה</button></Link> */}

            <Link to="/signin"> <button class="ui inverted orange button" id="abc" >כניסה</button></Link>
            <Link to={"/SignUp"}> <button class="ui inverted orange button" style={{margintop:'5vh'}} >הרשמה</button></Link>
            
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
           
            className="movingImage"
            src={("/images/IMG_8693.jpg")} 
            /* src="holder.js/800x400?text=First slide&bg=373940" */
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="movingImage"
            src={("/images/IMG_8804.jpg")} 
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="movingImage"
            src={("/images/IMG_8974[1].jpg")} 
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       <div className='power'>
       </div>
      </div>
    );
  }
 
export default HomePage;