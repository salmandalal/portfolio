import React from 'react';
import './about.css';
import ME from '../../assets/main-image-2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {RiFoldersLine} from 'react-icons/ri';

const About = () => {
	return (
	<section id = "about">
	
	<h5>Get To Know</h5>
	<h2>About Me</h2> 
	
	<div className = "container about__container" >
	
	 <div className = "about__me">
	  <div className = "about__me-image">
	   <img src = {ME} alt = "About Image"/>
	  </div>
	 </div>
	 
	 <div className = "about__content">
	  <div className = "about__cards">
	  
	     <article className = "about__card">
	     <FaAward className = "about__icon"/>
	     <h5>Experience</h5>
		 <small>3+ Years of Experience</small>
		 </article>
		 
	     <article className = "about__card">
	     <FiUsers className = "about__icon"/>
	     <h5>Clients</h5>
		 <small>200+ Clients Worldwide</small>
		 </article>
		 
		 <article className = "about__card">
	     <RiFoldersLine className = "about__icon"/>
	     <h5>Projects</h5>
		 <small>80+ Projects</small>
	     </article>
	   </div>
	   <p>
	   This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.This is my portfolio.
	   </p>
	   
	   <a href = "contact" className = "btn btn-primary">Lets Talk</a>
	  
	 </div>
	</div>
	</section>
	);
}

export default About;