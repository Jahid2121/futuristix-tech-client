import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState()
    const [success, setSuccess] = useState()
 
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
    <div>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div className="flex justify-around">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                <input type="checkbox" name="" id="" /> Remember Me
              </a>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
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
