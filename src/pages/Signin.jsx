import React, {useState} from 'react'
import '../css/sign.css'
import { useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { RiAccountCircleFill } from 'react-icons/ri';


export default function Signin() {
  const navigate= useNavigate()
  
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()
  const [isLoading, setIsLoading]=useState(false)

  const User = {
    email,
    password
  }

  console.log(User)

  function handleSubmit(e){
     e.preventDefault()
     setIsLoading(true)
     fetch('http://localhost:4000',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(User)
     }).then(response =>response.json())
  }

  return (
    <div className='sign'>
      <h1 className='page-header'><RiAccountCircleFill/>Login</h1>
        <form className='signinForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
            <button type='submit'>{isLoading ? "Loading...": "Sign In"}<BiLogInCircle /></button>
        </form>
        <div className='links'>
          <p>No Account?</p>
          <p className='singleLink'  onClick={()=>{ navigate("/signup")}} >Sign Up</p>
      </div>
    </div>
  )
}
