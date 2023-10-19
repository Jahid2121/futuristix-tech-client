import React from "react";
import logo from "../assets/icons8-technology-64.png";
import { Link, NavLink } from "react-router-dom";

const Pages = () => {
  const links = ['Home', 'Add Product', 'Account']
  return (
    <>
    {
      links.map(link => <li key={link}>
        <NavLink className="mr-4"  style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "black" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }} to={`/${link}`}>{link}</NavLink>
      </li>)
    }
    </>
  )
}

const Navbar = () => {

  

  return (
    <div>
      
      <div className="fixed overflow-hidden  mt-0 navbar bg-base-100">
        <div className="">
          
          <div className="flex">
        <img className="w-10" src={logo} alt="" />
        <h3 className="text-2xl font-bold mr-16">FUTURISTIX</h3>
      </div>
        </div>
        <div className="navbar-center hidden mr-36 lg:flex">
          <ul className="menu   menu-horizontal px-1">
            <Pages />
          </ul>
        </div>
        <div className="">
        <Link to='/productsCart'><div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
      </label>
      </div></Link>
        <div className="dropdown">
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <Pages />
            </ul>
          </div>
        <Link to="/login"><button className="btn">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
