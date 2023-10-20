import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/icons8-technology-64.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logIn,  googleLogin } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
      })
    }



  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
        setSuccess("Login successful");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div
      className="bg-cover   min-h-screen  "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/Tt6XBGq/lukas-blazek-Gnvurw-Js-Ka-Y-unsplash-1.jpg')",
      }}
    >
      <div className=" h-24 font-bold "></div>

      <form
        style={{ backdropFilter: "blur(3px)" }}
        onSubmit={handleLogin}
        className="card-body rounded-xl  border-2 w-[400px] mx-auto "
      >
        <img className="w-20  mx-auto" src={logo} alt="" />
        <h2 className="text-white text-3xl font-bold text-center">Sign In</h2>
        <hr />
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input bg-slate-300 rounded-full input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white ">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input bg-slate-200 rounded-full input-bordered"
            required
          />
          <div className="flex justify-around">
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-white  link link-hover"
              >
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt text-white link link-hover">
                <input type="checkbox" name="" id="" /> Remember Me
              </a>
            </label>
          </div>
          {error && <p className="text-red-950 flex items-center">{error}</p>}
          {success && <p className="text-green-800">{success}</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-slate-400 rounded-3xl">Login</button>
        </div>
       <div className="text-center  text-white">
       <span onClick={handleGoogleLogin}><button className='hover:bg-custom-yellow p-3 mt-8 mr-5 border text-2xl rounded-full'><AiOutlineGoogle/> </button></span>
       </div>
      </form>
      <div className="flex">
        <Link to="/signUp">
          <button className="text-center items-center ml-[350px] border p-2  rounded-full px-12 mx-auto text-2xl bg-blue-500 flex my-6 justify-center text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
