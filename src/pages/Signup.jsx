import React, {useState} from 'react'
import '../css/sign.css'
import { useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { RiUserAddFill } from 'react-icons/ri';



function Signup() {
  const navigate= useNavigate()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [address, setAddress]=useState()
  const [password, setPassword]=useState()
  const [isLoading, setIsLoading]=useState(false)

  const User = {
    name,
    email,
    address,
    password
  }



  function handleSubmit(e){
     e.preventDefault()
     setIsLoading(true)
     fetch('http://localhost:5000',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(User)
     }).then(response =>response.json())
  }

  console.log(User)

  return (
    <div className="sign">
      <h1 className='page-header'><RiUserAddFill/> Create Account </h1>  
      <form className='signinForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Fullname' autoComplete='on' required onChange={e => setName(e.target.value)}/>
        <input type='text' placeholder='Email' autoComplete='on' required onChange={e => setEmail(e.target.value)}/>
        <input type='text' placeholder='Address' autoComplete='on' required onChange={e => setAddress(e.target.value)}/>
        <input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>{isLoading ? "Loading...": "Sign Up"} <BiLogInCircle /></button>
      </form>
      <div className='links'>
        <p>Already have an account?</p>
        <p  className='singleLink' onClick={()=>{ navigate("/signin")}}>Sign In</p>
      </div>
</div>
  )
}

export default Signup