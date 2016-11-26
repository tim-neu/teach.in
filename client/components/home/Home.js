import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';
import { Link } from 'react-router';
const Home = function(){
  return <div className="row" id="home-hero">
	  <HomeNav />
	  <div>
		  <div className="container-fluid" id="desktop-view">
			  <div className="row" id="home-text">
			  <div className="col-lg-offset-2 col-lg-4 col-md-6 col-sm-6" id="slogan-row">
			  	<h1 className="home-headline">Teachers<br /> Teach.<br /> We Do<br />The Rest.</h1>
			  </div>
			  <div className="col-lg-6 col-md-6 col-sm-6" id="hero-buttons-row">
			  	<h3 id="hero-sighnup">Sign Up:</h3>
			  	<div className="btn-group" id="desktop-buttons">
			  	<button className="hero-buttons btn btn-primary" id="hero-button">Teacher</button>
			  	<button className="hero-buttons btn btn-primary" id="hero-button">Student</button>
			  	</div>
			  </div>
			  </div>
		  </div>
		  <div className="container-fluid" id="mobile-view">
			  <div className="row" id="mobile-text">
			  <div className="col-lg-offset-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="slogan-row">
			  	<h1 class="home-headline" id="mobile-headline">Teachers Teach. We Do The Rest.</h1>
			  </div>
			  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="hero-buttons-row">
			  	<h3 id="mobile-sighnup">Sign Up:</h3>
			  	<div className="btn-group" id="mobile-buttons">
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