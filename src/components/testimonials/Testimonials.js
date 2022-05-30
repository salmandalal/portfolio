import React from 'react';
import './testimonials.css';
import AVAT1 from '../../assets/new-avatar-1.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avatar: AVAT1,
  name: 'Shina Jones',
  review: 'Nice experience to work with Salman. He delivered project on time'
},
{
  avatar: AVAT1,
  name: 'Harley Todd',
  review: 'Nice experience to work with Salman. He delivered project on time'
},
{
  avatar: AVAT1,
  name: 'Shina',
  review: 'Nice experience to work with Salman. He delivered project on time'
}
];


const Testimonials = () => {
	return (
	 <section id = "testimonials">
	 <h5>Review From Clients</h5>
	 <h2>Testimonials</h2>
	 
	 <Swiper className = "container testimonials__container"
	  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
	 {
		 data.map(({avatar, name, review}, index) => {
			 return(
			  <SwiperSlide key = {index} className = "testimonial">
	          <div className = "client__avatar">
	          <img src = {avatar}/>
	          </div>
	          <h5 className = "client__name">{name}</h5>
	          <small className = "client__review">{review}</small>
	          </SwiperSlide>
	   )
		 })
	 }
	 </Swiper>
	 </section>
	);
}

export default Testimonials;