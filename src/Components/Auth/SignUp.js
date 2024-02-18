import React from 'react';
import './SignUp.css';

export const SignUp = ({setSignupModel}) => {
  return (
    <div>
      <div className="card border-0 shadow-lg rounded-3 login-container p-3">
        <div className="d-flex justify-content-between">
          <h5 className="fs-3 fw-bold text-info">SignUp</h5>
          <p onClick={()=>{setSignupModel(false)}} className='pointer px-2 fs-4'>&times;</p>
        </div>
        <div className="">
          <label htmlFor='username' className='fst-italic text-muted'>Username:</label>
          <input className='form-control custom-input' id="username" placeholder='Username' /><br/>
          <label htmlFor='password' className='fst-italic text-muted'>Password:</label>
          <input type='password' className='form-control custom-input' id="password" placeholder='Password' /><br/>

        </div>
        <div className="d-flex flex-column my-3 gap-3">
          <button type="button" className="btn btn-outline-info fw-bold">SignUp</button>
          <button to='/signup' type="button" className="btn btn-outline-dark fw-bold">Login</button>
        </div>
      </div>
    </div>
  )
}
