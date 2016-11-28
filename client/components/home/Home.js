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
			  </div>
			  <div className="container" id="mobile-view">
				  <div className="row" id="mobile-text">
				  <div className="col-lg-offset-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="slogan-row">
				  	<h1 class="home-headline" id="mobile-headline">Teachers Teach. We Do The Rest.</h1>
					  </div>
					  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="hero-buttons-row">
					  	<h3 id="mobile-sighnup">Sign Up:</h3>
					  	<div className="btn-group" id="mobile-buttons">
					  	<button className="hero-buttons btn btn-primary teacher-hero-button" >Teacher</button>
					  	<button className="hero-buttons btn btn-primary student-hero-button" >Student</button>
					  	</div>
					  </div>
				  </div>
			  </div>
		  </div> 
	  </div>
	  		<div className="row" id="after-hero"> 
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
		  				<p>Submit scores and watch your class’s grade adjust instantly with the interactive chart. </p>
		  			</div>
			  			<div className="col-lg-offset-1 col-lg-1">
			  				<img src="https://s3.amazonaws.com/teach.in123454321/fpo.png" />
		  				</div>
		  		</div>
		  		<div className="row feature-row">
		  			<div className="col-lg-offset-2 col-lg-1">
			  			<img src="https://s3.amazonaws.com/teach.in123454321/fpo.png" />
		  			</div>
		  			<div className="col-lg-offset-3 col-lg-5 feature-text">
		  				<h3>Organize Schedule</h3>
		  				<p>Lorizzle ipsizzle dolor bling bling amet, consectetizzle adipiscing fo shizzle. Stuff shit gangster, aliquet volutpat, suscipizzle quizzle, tellivizzle vizzle, 
		  					check it out. Da bomb fo crackalackin. Sed erizzle. Check out this yippiyo tellivizzle stuff turpis tempizzle shiz. 
		  					Maurizzle pellentesque nibh izzle turpis. You son of a bizzle izzle tortor. </p>
		  				<p>Pellentesque eleifend rhoncizzle nisi. In fo habitasse crazy dictumst. Boofron dapibizzle. Curabitur dawg go to hizzle, 
		  					fo shizzle mah nizzle fo rizzle, mah home g-dizzle you son of a bizzle, mattizzle gangsta, eleifend shiznit, nunc.</p>
		  			</div>
		  		</div>
		  		<div className="row feature-row">
		  			<div className="col-lg-offset-1 col-lg-5 feature-text">
		  				<h3>Manage Grades</h3>
		  				<p>Lorizzle ipsizzle dolor bling bling amet, consectetizzle adipiscing fo shizzle. Stuff shit gangster, aliquet volutpat, suscipizzle quizzle, tellivizzle vizzle, 
		  					check it out. Da bomb fo crackalackin. Sed erizzle. Check out this yippiyo tellivizzle stuff turpis tempizzle shiz. 
		  					Maurizzle pellentesque nibh izzle turpis. You son of a bizzle izzle tortor. </p>
		  				<p>Pellentesque eleifend rhoncizzle nisi. In fo habitasse crazy dictumst. Boofron dapibizzle. Curabitur dawg go to hizzle, 
		  					fo shizzle mah nizzle fo rizzle, mah home g-dizzle you son of a bizzle, mattizzle gangsta, eleifend shiznit, nunc.</p>
		  			</div>
			  			<div className="col-lg-offset-1 col-lg-1">
			  				<img src="https://s3.amazonaws.com/teach.in123454321/fpo.png" />
		  				</div>
		  		</div>
		  		<div className="row after-feature">
		  			<div className="col-lg-6" id="home-desk-image">
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
						<a className="zoom green" href="work01.html"><img className="img-responsive" src="	
https://s3.amazonaws.com/teach.in123454321/10258615_10201659625042566_8967973574115249312_o.jpg" alt="" /></a>
						<p className="text-center team-name">Tim Neumann</p>
					</div>
					<div className="col-lg-4">
						<a className="zoom green" href="work01.html"><img className="img-responsive" src="	
https://s3.amazonaws.com/teach.in123454321/10258615_10201659625042566_8967973574115249312_o.jpg" alt="" /></a>
						<p className="text-center team-name">John Huynh</p>
					</div>
					<div className="col-lg-4">
						<a className="zoom green" href="work01.html"><img className="img-responsive" src="	
https://s3.amazonaws.com/teach.in123454321/10258615_10201659625042566_8967973574115249312_o.jpg" alt="" /></a>
						<p className="text-center team-name">Jesse Borden</p>
					</div>
				</div>
			</div>
			<div className="footer">
			</div>
  	</div>
  	)}

export default Home