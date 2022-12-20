import React, {useState} from 'react'
import './sign.css'
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate= useNavigate()
  
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()

  const User = {
    email,
    password
  }

  console.log(User)

  function handleSubmit(e){
     e.preventDefault()
     fetch('http://localhost:4000',{
      method: "POST",
      headers: {
        "content-Type":"application/json"
      },
      body: JSON.stringify(User)
     }).then(response =>response.json())
  }

  return (
    <div className='sign'>
        <form className='signinForm' onSubmit={handleSubmit}>
            <h1 className='signHeader'>Login</h1>
            <input type='text' placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Sign In</button>
        </form>
        <div className='links'>
          <p>No Account?</p>
          <p className='singleLink'  onClick={()=>{ navigate("/signup")}}>Sign Up</p>
      </div>
    </div>
  )
}
