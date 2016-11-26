import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';
import { Link } from 'react-router';
const Home = function(){
  return <div className="row" id="home-hero">
	  <HomeNav />
	  <div>
		  <div className="container-fluid">
			  <div className="row" id="home-text">
			  <div className="col-lg-offset-3 col-lg-3" id="slogan-row">
			  	<h1 id="home-headline">Teachers<br /> Teach.<br /> We Do<br />The Rest.</h1>
			  </div>
			  <div className="col-lg-2" id="hero-buttons-row">
			  	<h3 id="hero-sighnup">Sign Up:</h3>
			  	<div className="btn-group" id="hero-buttons">
			  	<button className="hero-buttons btn btn-primary" id="hero-button">Teacher</button>
			  	<button className="hero-buttons btn btn-primary" id="hero-button">Student</button>
			  	</div>
			  </div>
			  </div>
		  </div>
	  </div>
  </div>
}

export default Home