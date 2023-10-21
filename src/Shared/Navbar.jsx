import React, { useContext } from "react";
import logo from "../assets/icons8-technology-64.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Pages = () => {
  const links = ['Home', 'Add Product']
  return (
    <>
    {
      links.map(link => <li key={link}>
        <NavLink className="mr-4"  style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "" : "",
      backgroundColor: isActive ? "#3876BF" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }} to={`/${link}`}>{link}</NavLink>
      </li>)
    }
    </>
  )
}

const Navbar = () => {
  const {user, logOut, name, email,image} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }

  return (
    <div>
      
      <div data-aos="fade-down" className="fixed  bg-blue-400  z-10 mt-0 navbar ">
        <div className="">
          
          <div className="flex">
        <img className="w-10 text-white" src={logo} alt="" />
        <h3 className="text-2xl text-white font-bold mr-16">FUTURISTIX</h3>
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
        
          {
    user ?  <div className="dropdown   pl-36 dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full ">
       {
        <img className="" src={image } />
       }
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <p className="bg-custom-Pink text-xl  text-blue-700 rounded-t-xl p-2">{name}</p>
      <p>{email}</p>
      <li className="bg-custom-Pink-light text-white text-base font-medium  items-center  rounded-sm" onClick={handleLogOut}><button className="p-3 bg-blue-500">Logout</button></li>
    </ul>
  </div> 
  :
  <div className="navbar-end">
  <Link to="/login"><button className="bg-blue-500 btn text-white">Login</button></Link>
  </div>
  }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
