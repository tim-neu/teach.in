import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';
import { Link } from 'react-router';
const Home = function(){
  return <div className="row" id="home-hero">
	  <HomeNav />
	  <div>
		  <div className="container">
			  <div className="row" id="home-text">
			  <div className="col-lg-6">
			  	<h1 className="text-right" id="home-headline">Teachers<br /> Teach.<br /> We Do<br />The Rest.</h1>
			  </div>
			  <div>
			  	<h3 id="hero-sighnup">Sign Up:</h3>
			  	<div className="btn-group">
			  	<button className="home-buttons btn btn-primary">Teacher</button>
			  	<button className="home-buttons btn btn-primary">Student</button>
			  	</div>
			  </div>
			  </div>
		  </div>
	  </div>
  </div>
}

export default Home