import React from 'react'
import './sign.css'

export default function Signin() {
  return (
    <div className='sign'>
        <form className='signinForm'>
            <h1 className='signHeader'>Login</h1>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button type='submit'>Sign In</button>
        </form>
        <div className='links'>
          <p>No Account?</p>
          <p className='singleLink'>Sign Up</p>
      </div>
    </div>
  )
}
