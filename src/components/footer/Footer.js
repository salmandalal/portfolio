import React from 'react';
import './footer.css';

const Footer = () => {
	return (
	<footer>
	  <a href = "#" className = "footer__logo">SALMAN</a>
	  
	  <ul className = "permalinks">
	    <li><a href = "#">Home</a></li>
		<li><a href = "#about">About</a></li>
		<li><a href = "#experience">Experience</a></li>
		<li><a href = "#services">Service</a></li>
		<li><a href = "#portfolio">Portfolio</a></li>
		<li><a href = "#testimonials">Testimonials</a></li>
		<li><a href = "#contact">Contact</a></li>
	  </ul>
	  
	  <div className = "footer_copyright">
	  <small>&copy; Salman Dalal Portfolio. All rights reserved.</small>
	  </div>
   </footer>
   
	
	);
}

export default Footer;