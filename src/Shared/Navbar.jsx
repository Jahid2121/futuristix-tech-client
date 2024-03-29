import React, { useContext } from "react";
import logo from "../assets/icons8-circuit-80.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import CustomNavlink from "../components/CustomNavlink";


const Navbar = () => {
  const {user, logOut, name, email,image} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }

  return (
    <div>
      
      <div className="fixed   z-10 mt-0  ">
        <div data-aos="fade-down" className="bg-white  font-bold md:mr-[185px]  navbar">
        <div className="">
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <CustomNavlink to={'/'} display={'Home'} />
        <CustomNavlink to={'/addProduct'} display={'Add Product'} />
      {/* {
        user ? <li className="bg-custom-Pink-light text-white text-base font-medium  items-center  rounded-sm" onClick={handleLogOut}><button className="p-3 bg-blue-500">Logout</button></li> : <Link to="/login"><button className="bg-blue-500  p-2 rounded-xl text-white">Login</button></Link>
      } */}
         <Link className="btn" to='/productsCart'>My Cart</Link>
      </ul>
    </div>
          
          <div className="flex">
        <img className="md:w-10 w-8 text-customBlue" src={logo} alt="" />
        <h3 className="md:text-2xl text-xl text-white font-bold md:mr-16">FUTURISTIX</h3>
      </div>
        </div>
        <div className="navbar-center hidden md:mr-36 lg:flex">
          <ul className="menu   menu-horizontal px-1">
          <CustomNavlink to={'/'} display={'Home'} />
          <CustomNavlink to={'/addProduct'} display={'Add Product'} />
          </ul>
        </div>
        <div className=" md:ml-32">
        <Link to='/productsCart'><div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
      </label>
      </div></Link>
        
          {
    user ?  <div className="dropdown   relative  dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="lg:w-10 rounded-full ">
       {
        <img className="" src={image } />
       }
      </div>
    </label>
    <ul tabIndex={0} className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
    </div>
  );
};

export default Navbar;
