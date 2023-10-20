import React from 'react';
import logo from '../../assets/icons8-technology-64.png'
const Footer = () => {
    return (
        <footer className="footer mb-0 sticky p-10 bg-base-200 text-base-content">
        <aside>
        <img src={logo} alt="" />
          <p>FUTURISTIX TECH<br/>Your Ultimate Destination for Gadgets Galore!</p>
        </aside> 
        
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
        <header className="footer-title">Follow Us On</header> 
          <div className='grid grid-cols-2 gap-2 '>
          <a className="link link-hover"><img className='w-10' src={'https://i.ibb.co/6gMvtML/icons8-shopify-48.png'} alt="" /></a> 
          <a className="link link-hover"><img className='w-10' src={'https://i.ibb.co/VtPXn8R/icons8-telegram-48.png'} alt="" /></a> 
          <a className="link link-hover"><img className='w-10' src={'https://i.ibb.co/WtgrLP3/icons8-vk-48.png'} alt="" /></a>
          <a className="link link-hover"><img className='w-10' src={'https://i.ibb.co/S7DqQw8/icons8-twitter-50.png'} alt="" /></a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;