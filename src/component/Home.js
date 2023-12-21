import React from 'react'
import Logo1 from './Logo1.png';
import car1 from './car1.webp';
import car2 from './car2.jpg';
import car5 from './car5.webp';
import Homebgnew from './Homebgnew.jpeg';
import homebgg from './homebgg.png';
import homebg from './homebg.jpg';
import homebgedit1 from './homebgedit1.png';
import home1 from './home1.webp';
import home2 from './home2.webp';
import home3 from './home3.jpg';
import home4 from './home4.jpeg';
import home5 from './home5.jpg';
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
export default function Home()
 {
   return(
       <div class="homeparent">

        <Nav/>
    
       <Carousel data-bs-theme="dark" interval={4000}>
       <Carousel.Item>
      <img class="car" src={car2} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={car1} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
      <img class="car3" src={car5} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>  
      <Carousel.Item>
      <img class="car" src={Homebgnew} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel> 

    <p class="heading">EXPLORE ITEMS</p>
    <br></br>
    <br></br>

    <div class="home">

    <div class="homebg1">
    <img class="homebg" src={homebgedit1} alt="img2"/>

      <div class="box1">
    <img class="home1" src={home1} alt="img2"/>
    <div class="text">
        Explore Fresh Vegetabels
    </div>
      </div>
      <div class="box2">
    <img class="home1" src={home2} alt="img2"/>
    <div class="text">
        Explore Snaks 
    </div>
      </div>
      <div class="box3">
    <img class="home4" src={home4} alt="img2"/>
    <div class="text">
        Explore Meat 
    </div>
      </div>
      <div class="box4">
    <img class="home3" src={home3} alt="img2"/>
    <div class="text">
        Explore Grains
    </div>
      </div>
      <div class="box5">
    <img class="home1" src={home5} alt="img2"/>
    <div class="text">
        Explore Detergents 
    </div>
      </div>
    </div>

    </div>

      <Footer/>
     </div>
        )
 }