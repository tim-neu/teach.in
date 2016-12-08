import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';
import { Link } from 'react-router';
const Home = function(){
  return (
  	<div className="container home-container">
	  <div className="row" id="home-hero">
		  <HomeNav className='homeNav' />
		  <div>
			  <div id="desktop-view">
				  <div className="row" id="home-text">
				  <div className="col-lg-offset-2 col-lg-4 col-md-6 col-sm-6" id="slogan-row">
				  	<h1 className="home-headline">Teachers<br /> Teach.<br /> We Do<br />The Rest.</h1>
				  </div>
				  <div className="col-lg-6 col-md-6 col-sm-6" id="hero-buttons-row">
				  	<h3 id="hero-sighnup">Sign Up:</h3>
				  	<div className="btn-group" id="desktop-buttons">
				  	<Link to="/teacherSignUp" className="hero-buttons btn btn-primary teacher-hero-button hero-button" >Teacher</Link>
				  	<Link to="studentSignUp"  className="hero-buttons btn btn-primary student-hero-button hero-button" >Student</Link>
				  	</div>
				  </div>
				  </div>
			  <div className="arrow bounce"></div>
			  </div>
			  <div className="container" id="mobile-view">
				  <div className="row" id="mobile-text">
				  <div className="col-lg-offset-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="slogan-row">
				  	<h1 class="home-headline" id="mobile-headline">Teachers Teach. We Do The Rest.</h1>
					  </div>
					  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="hero-buttons-row">
					  	<h3 id="mobile-sighnup">Sign Up:</h3>
					  	<div className="btn-group" id="mobile-buttons">
					  	<Link to="/teacherSignUp" className="hero-buttons btn btn-primary teacher-hero-button hero-button" >Teacher</Link>
				  		<Link to="studentSignUp"  className="hero-buttons btn btn-primary student-hero-button hero-button" >Student</Link>
					  	</div>
					  </div>
				  </div>
			  </div>
		  </div> 
	  </div>
	  		<div className="row desktop-only" id="after-hero"> 
		  		<h2 className="text-center">Teach.in</h2>
				<h3 className="text-center">Enhance your teaching skills by focusing on the important stuff.</h3>
			</div>
			<div className="row" id="info-section"> 
		  		<h2 className="text-center">Features</h2>
		  		<div className="row feature-row">
		  			<div className="col-lg-offset-1 col-lg-5 feature-text">
		  				<h3>Manage Grades</h3>
		  				<p>Easily create assignments, tests, and quizes for your class and add them to your assignment list. 
		  				Select the assignment you’d like to grade and input the scores for each student.</p>
		  				<p>Submit the scores for the assignment and watch your class’s grade instantly adjust with the interactive chart.</p>
		  			</div>
			  			<div className="col-lg-offset-1 col-lg-1 desktop-only">
			  				<img src="https://s3.amazonaws.com/teach.in123454321/teach-in-icon-set-03.jpg" />
		  				</div>
		  		</div>
		  		<div className="row feature-row">
		  			<div className="col-lg-offset-2 col-lg-1 desktop-only">
			  			<img src="https://s3.amazonaws.com/teach.in123454321/teach-in-icon-set-02.jpg" />
		  			</div>
		  			<div className="col-lg-offset-3 col-lg-5 feature-text">
		  				<h3>Organize Schedules</h3>
		  				<p>Map out all of your upcoming events and tasks into the calendar. You can see all events from all of your classes so 
		  				you can prevent schedule conflicts. View your events however you prefer. Whether that's by month, week, 
		  				or day, <strong>Teach.in</strong> has you covered. You can even see a list of all your upcoming tasks.</p>
		  			</div>
		  		</div>
		  		<div className="row feature-row">
		  			<div className="col-lg-offset-1 col-lg-5 feature-text">
		  				<h3>Share Resources</h3>
		  				<p>Simply upload your documents in your class dashboard and share them with your students. Accepted formats include .jpg, .pdf, and much more.</p>
		  				<p>You're a student? You want to see all of your resources? No problem. Just sign up and have your teacher add you to
		  				to their class.</p>
		  			</div>
			  			<div className="col-lg-offset-1 col-lg-1 desktop-only">
			  				<img src="https://s3.amazonaws.com/teach.in123454321/teach-in-icon-set-05.jpg" />
		  				</div>
		  		</div>
		  		<div className="row after-feature">
		  			<div className="col-lg-6 desktop-only" id="home-desk-image">
		  			</div>
			  			<div className="col-lg-6 text-center" id="home-bottom-button-container">
			  				<Link to="/teacherSignUp">Signup Now</Link>
		  				</div>
		  		</div>

			</div>
			<div className="row dev-team">
			  	<h2 className="text-center">Team Teach.in</h2>
			  	<div className="row mt centered">	
					<div className="col-lg-4">
						<a className="zoom green" href="https://www.linkedin.com/in/timaneumann"><img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/tim.jpg" alt="" /></a>
						<p className="text-center team-name">Tim Neumann</p>
						<p className="text-center team-position">Software Engineer</p>
					</div>
					<div className="col-lg-4">
						<a className="zoom green" href="https://www.linkedin.com/in/johnhuynh1"><img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/john.jpg" alt="" /></a>
						<p className="text-center team-name">John Huynh</p>
						<p className="text-center team-position">Software Engineer</p>
					</div>
					<div className="col-lg-4">
						<a className="zoom green" href="https://www.linkedin.com/in/jesse-borden"><img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/jess.jpg" alt="" /></a>
						<p className="text-center team-name">Jesse Borden</p>
						<p className="text-center team-position">Software Engineer</p>
					</div>
				</div>
			</div>
			<div className="row techStack desktop-only">
				<h2 className="text-center grayHeader">Technologies</h2>
				<div className="container techLogos">
				<div className="row mt centered">
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/react.png" alt="" />
					</div>
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/redux.png" alt="" />
					</div>
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/nodejs.png" alt="" />
					</div>
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/Sequelize.png" alt="" />
					</div>
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/Postgresql.png" alt="" />
					</div>
					<div className="col-lg-2 logo">
						<img className="img-responsive" src="https://s3.amazonaws.com/teach.in123454321/Sass.png" alt="" />
					</div>
				</div>
				</div>
			</div>
			<div className="text-center footer desktop-only">
				<div className="container">
				<p id="footerContent">© 2016 Teach.in. All rights reserved. Check us out on <a href="https://github.com/team-teachin/teach.in">Github</a> to learn more.</p>
				</div>
			</div>
  	</div>
  	)}

export default Home