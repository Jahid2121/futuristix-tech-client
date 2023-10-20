import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [ShowPassword, setShowPassword] = useState(false)
 
  const {createUser} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password,name, photo);
    
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
      setSuccess('User created successfully')
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
        <h2 className="text-white text-3xl font-bold text-center">Sign Up</h2>
        <hr />
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
          name="name"
            type="text"
            placeholder="name"
            className="input bg-slate-300 rounded-full input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">PhotoURL</span>
          </label>
          <input
          name="photo"
            type="text"
            placeholder="PhotoURL"
            className="input bg-slate-300 rounded-full input-bordered"
            required
          />
        </div>
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
        <div  className="form-control">
          <label className="label">
            <span className="label-text text-white ">Password</span>
          </label>
          <div className="flex ">
          <input
          name="password"
            type={ShowPassword ? 'text' : "password"}
            placeholder="password"
            className="input bg-slate-300 pr-32 rounded-full input-bordered"
            required
          />
            <span className='relative -ml-9 mt-4'  onClick={() => setShowPassword(!ShowPassword)}>
            {
              ShowPassword ? <FaEye />  : <FaEyeSlash/>
            }
          </span>
          </div>
          
        </div>
        {
      error && <p className='text-red-950 flex items-center'>{error}</p>
      }
      {
        success && <p className='text-green-800'>{success}</p>
      }
        <div className="form-control mt-6">
          <button className="btn bg-slate-400 rounded-3xl">Sign Up</button>
        </div>
        
      </form>
      <div className="flex">
      <Link to="/login"><button  className="text-center ml-[370px] border p-2 glass rounded-full px-12 mx-auto text-2xl flex my-6 justify-center text-white">Login</button></Link>
      </div>
      

    </div>
  );
};

export default SignUp;
