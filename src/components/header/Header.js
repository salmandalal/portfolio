import React from 'react';
import './header.css';
import CTA from './CTA.js';
import ME from '../../assets/main-image.png';
import HeaderSocials from './HeaderSocials.js';

const Header = () => {
	return (
        <header>
		 <div className = "container header__container">
		 <h5>Hello I'm</h5>
		 <h1>Salman Dalal</h1>
		 <h5 className = "text-light">Fullstack Developer</h5>
		 <CTA />
		 <HeaderSocials />

		 <div className = "me">
		 <img src = {ME} alt = "me" />
		 </div>
		 
		 <a href = "#contact" className = "scroll__down">Scroll Down</a>
		 
		 
		 </div>
		</header>
	);
}

export default Header;