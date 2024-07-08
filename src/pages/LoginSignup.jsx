import React from 'react'
import './LoginSignup.css';


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='imalsha nethmi'/>
          <input type="email" placeholder='example@gmail.com' />
          <input type="password" placeholder='********' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an Account? <span>Login </span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By Continuing, i agree to the term of use & priacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup