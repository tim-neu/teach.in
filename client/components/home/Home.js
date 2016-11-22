import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';
import { Link } from 'react-router';
const Home = function(){
  return <div className="row">
	  <HomeNav />
	  <div className="jumbotron">
		  <div className="container">
			  <div className="row text-center" id="home-text">
			  <h1 className="text-center" id="home-headline">teach.in</h1>
			  <p>teachers teach. we do the rest.</p>
			  </div>
			  <div>
				<Link to="/teacherSignIn" className="btn btn-default navbar-btn">TEACHER LOGIN</Link>
          		<Link to="/studentSignIn" className="btn btn-default navbar-btn">STUDENT LOGIN</Link>
          		<Link to="/teacherSignUp" className="btn btn-default navbar-btn">TEACHER SIGN UP</Link>
          		<Link to="/studentSignUp" className="btn btn-default navbar-btn">STUDENT SIGN UP</Link>
			  </div>
		  </div>
	  </div>
  </div>
}

export default Home