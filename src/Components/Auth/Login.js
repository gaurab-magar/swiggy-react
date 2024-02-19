import React, { useState } from 'react'
import './Login.css';
import PhoneInput from 'react-phone-input-2';
import  'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {auth} from '../../firebase/setUp';
export const Login = ({setLoginModel}) => {
  const [phone , setPhone] = useState("");
  const [user , setUser] = useState(null);
  const [otp , setOtp] = useState("");

  const sendOtp = async() =>{
    try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const cofirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
      setUser(cofirmation)
    }catch(error){
      alert(error.message);
    }
  }
  const verifyOtp = async() => {
    try{
      await user.confirm(otp)

    }catch(error){
      alert(error.message);
    }
  }
  return (
    <div>
      <div className="card bg-light border-0 shadow-lg rounded-3 p-3 login-container">
        <div className="d-flex justify-content-between">
          <h5 className="fs-3 fw-bold text-info">Login</h5>
          <p onClick={()=>{setLoginModel(false)}} className='pointer px-2 fs-4'>&times;</p>
        </div>
        <div className="">
          {/* <label htmlFor='phone' className='fst-italic text-muted'>PhoneNumber:</label>
          <input className='form-control custom-input' id='phone' placeholder='Your Number...' /><br/> */}
          <PhoneInput 
          value={phone}
          onChange={()=>setPhone(phone)}
          country='ro'
          inputStyle={{height:'50px',}}
          containerStyle={{marginTop:"20px"}}
          />
        </div>
        {user && <input onChange={(e) => setOtp(e.target.value)} className='form-control custom-input py-3 my-3 w-75' placeholder='4 Digit Code...' />}
        <div className="d-flex flex-column my-3 gap-3">
          <button onClick={sendOtp} type="button" className="btn btn-outline-warning fw-bold">Send OTP</button>
          <p className='text-muted m-0'>Create an  account if you don't have one.</p>
          <button onClick={verifyOtp} type="button" className="btn btn-outline-dark fw-bold">verifyOtp</button>
        </div>
      </div>
    </div>
  )
}
