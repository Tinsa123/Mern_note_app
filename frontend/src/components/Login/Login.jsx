import React, { useState } from 'react'
import MainScreen from '../MainScreen'
import { Button } from 'react-bootstrap'
import './Login.css'
const Login = () => {
    const[details,setDetails]=useState({'username':"",'password':""})
    
  return (
 
      <MainScreen title={"Login"}>
      <form className='formcontainer'>
      <input type='text' placeholder='username' value={details.username} onChange={(e)=>setDetails((prev)=>({...prev,"username":e.target.value}))}/>
      <input type='password' placeholder='password' value={details.password} onChange={(e)=>setDetails((prev)=>({...prev,"password":e.target.value}))}/>
      <Button type="submit">SUBMIT</Button>
      </form>
      
    </MainScreen>
  )
}

export default Login
