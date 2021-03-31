import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            {/*
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            */}
            <Link to='/'>Terms of Service</Link>
          </div>
          
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>{/*
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>*/}
          </div>
          

        </div>
        
        
        
      </div>
      <section class='social-media'>
            <div class='social-media-wrap'>
          <small class='website-rights'>Imagine Investing © 2021</small>
          </div>
          </section>
    </div>
  );
}

export default Footer;