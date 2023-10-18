import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
 
  const {createUser} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    setError('')
    setSuccess('')

    
    
    if(password.length < 6){
      setError('password must be at least 6 characters')
    return
    }
    else if(!/[A-Z]/.test(password)){
      setError('Your password should have at least one Uppercase letter')
      return
    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
      setError('Must have a special character')
      return
    }

    createUser(email, password)
    .then(result => {
      console.log(result.user);
    } )
    .catch(error => {
      console.error(error);
      setError(error.message)
    })
  }
  return (
    <div className="bg-cover   min-h-screen  " style={{backgroundImage: "url('https://i.ibb.co/cvTpZrk/fabio-oy-Xis2k-ALVg-unsplash.jpg')"}}>
      <h2 className="text-white text-3xl font-bold text-center mb-9">Welcome</h2>

      <form style={{backdropFilter: 'blur(3px)'}}  onSubmit={handleLogin} className="card-body rounded-xl  border-2 w-[400px] mx-auto ">
        <h2 className="text-white text-3xl font-bold   text-center">Sign Up</h2>
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
            className="input bg-slate-300 rounded-full input-bordered"
            required
          />
          <div className="flex justify-around">
            <label className="label">
              <a href="#" className="label-text-alt text-white  link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt text-white link link-hover">
                <input  type="checkbox" name="" id="" /> Remember Me
              </a>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-slate-400">Login</button>
        </div>
      </form>
      {
      error && <p className='text-red-950 flex items-center'>{error}</p>
      }
      {
        success && <p className='text-green-800'>{success}</p>
      }

    </div>
  );
};

export default SignUp;
