import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'


const Signup = () => {
    const navigate = useNavigate()
    const [signform , setSignForm ] = useState({
        firstname: "",
        email: "",
        password: ""
    })
    const handleRegister=  async(e)=> {
        e.preventDefault();

        try{
            const user = await createUserWithEmailAndPassword(auth,  signform.email, signform.password)
            console.log(user)

            alert("Signup Successful")
            navigate('/login')
        }catch(error){
        }
       console.log(signform)
        setSignForm({
            firstname: "",
            email: "",
            password: ""
        })
        
    }

    const handleSignup = (e) => {
        const { name, value } = e.target;
        setSignForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
  return (
    <>
  
   <div className='container'>
    <div className='title'>
        <h2 >Signup</h2>
    </div>
    <div className='form'>
        <form onSubmit={handleRegister} className='form-component'>
            <div className='input-field'>
                <label for="fname">Full Name: </label>
                <input type="text" id="fname" name="firstname" value={signform.firstname} onChange={handleSignup} placeholder="Your name.." />
            </div>
            <div className='input-field'>
                <label for="fname">Email: </label>
                <input type="text" id="fname" name="email" value={signform.email} onChange={handleSignup} placeholder="  example@gmail.com"/>
            </div>
            <div className='input-field'>
                <label for="fname">Password: </label>
                <input type="text" id="fname" name="password" value={signform.password} onChange={handleSignup} placeholder="********"/>
            </div>
            <div className='btn'>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
    </div>
  
    </>
  )
}

export default Signup