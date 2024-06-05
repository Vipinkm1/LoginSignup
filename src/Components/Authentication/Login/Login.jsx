import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../Components/Firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [loginform, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e)=>{
        const {name, value} = e.target
        setLoginForm((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }
    const LoginUser = (e) =>{
        e.preventDefault();

        try{
            const user = signInWithEmailAndPassword(auth, loginform.email, loginform.password)
            console.log(user)
         
            alert("Login Successful")
            navigate('/home')
        }catch(error){
        }
        setLoginForm({
            email: "",
            password: ""
        })
    }
  return (
    <div className='container'>
        <div className='title'>
            <h2>Login</h2>
        </div>
        <div className='form'>
            <form className='form-container' onSubmit={LoginUser}>
            <div className='input-field'>
                <label for="fname">Email: </label>
                <input type="text" id="fname" name="email" value={loginform.email} onChange={handleLogin} placeholder="  example@gmail.com"/>
            </div>
            <div className='input-field'>
                <label for="fname">Password: </label>
                <input type="text" id="fname" name="password" value={loginform.password} onChange={handleLogin} placeholder="********"/>
            </div>
            <div className='btn'>
                <button type='submit'>Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login