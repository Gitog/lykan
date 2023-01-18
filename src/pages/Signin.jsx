import React, {useState} from 'react'
import '../css/sign.css'
import { useNavigate,useLocation } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { RiAccountCircleFill } from 'react-icons/ri';
import {useDispatch} from 'react-redux'
import signInUser from '../redux/reducers/authSlice'


export default function Signin() {
  const navigate= useNavigate()
  
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()
  const [errors, setErrors] = useState(null)
  const [isLoading, setIsLoading]=useState(false)


  // console.log(User)
  const dispatch = useDispatch()

  function handleSubmit(e){
     e.preventDefault()
     setIsLoading(true)
     fetch('http://localhost:3000/signin',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify( {
        email,
        password
      })
     }).then(response => response.json())
     .then(res => {
        window.localStorage.setItem("user",JSON.stringify(res)) 
        console.log(res, "data")
        if(res.errors){setErrors(res.errors)}
        setIsLoading(false)
      
        navigate(-1)
    }).catch(error => {  setIsLoading(false)})
    
    
    // dispatch(signInUser({email, password}))
  }

  return (
    <div className='sign'>
      <h1 className='page-header'><RiAccountCircleFill/>Login</h1>
        <form className='signinForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='Email' required onChange={e => { setErrors(null); setEmail(e.target.value)}} />
            <input type='password' placeholder='Password' required onChange={e => { setErrors(null); setPassword(e.target.value)}} disabled={isLoading}/>
            <button type='submit'>{isLoading ? "Loading...": "Sign In"}<BiLogInCircle /></button>
            <span style={{color:"red"}}>{errors}</span>
        </form>
        <div className='links'>
          <p>No Account?</p>
          <p className='singleLink'  onClick={()=>{ navigate("/signup")}} >Sign Up</p>
      </div>
    </div>
  )
}
