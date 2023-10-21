import React from 'react';
import logo from '../../assets/icons8-technology-64.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer data-aos="fade-up" className="footer bg-blue-500   mb-0 sticky p-10 text-white">
        <aside>
        <img src={logo} alt="" />
          <p>FUTURISTIX TECH<br/>Your Ultimate Destination for Gadgets Galore!</p>
        </aside> 
        
        <nav>
          <header className="footer-title">Pages</header> 
          <Link to="/Add Product"><a className="link link-hover">Add Products</a> </Link>
          <Link to="/Home"><a className="link link-hover">Home</a> </Link>
          
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

