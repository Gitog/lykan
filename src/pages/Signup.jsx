import React from 'react'
import './sign.css'


function Signup() {

  function handleSubmit(e){
     e.preventDefault()
  }

  return (
    <div className="sign">
      <h1 className='signHeader'>Create Account</h1>  
      <form className='signinForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Fullname'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Address'/>
        <input type='text' placeholder='Password'/>
        <button type='submit'>Sign Up</button>
      </form>
      <div className='links'>
        <p>Already have an account?</p>
        <p  className='singleLink'>Sign In</p>
      </div>
</div>
  )
}

export default Signup