import React from 'react';
import HomeNav from '../../shared_components/home_nav.js';

const Home = function(){
  return <div className="row">
	  <HomeNav />
	  <div className="row text-center" id="home-text">
	  <h1 className="text-center" id="home-headline">teach.in</h1>
	  <p>teachers teach. we do the rest.</p>
	  </div>
  </div>
}

export default Home