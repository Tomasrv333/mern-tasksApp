import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import classes from '../../Scss/AuthForm.module.scss'

const Register = () => {
    const navigate = useNavigate()
    const register = async (e) => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        try{
            await axios.post('/api/auth/register', user);
            toast.success('Register Success')
            loginAfterRegister(user)
        } catch(err) {
            console.log(err)
            toast.error('Register Failed')
        }
    }

    const loginAfterRegister = async (user) => {
        const email = user.email;
        const password = user.password;
    
        try{
            await axios.post('/api/auth/login', {
                email,
                password
            });
            navigate('/');
        } catch(err) {
            console.log(err)
            toast.error('Login Failed')
        }
    }

  return (
    <div className={classes.register}>
        <h1 className={classes.title}>
            Register
        </h1>
        <form className={classes.authForm} onSubmit={register}>
            <label htmlFor='name'>
                Name
                <input type='text' name='name' placeholder='Full Name' required />
            </label>
            <label htmlFor='email'>
                Email
                <input type='email' name='email' placeholder='Email' required />
            </label>
            <label htmlFor='password'>
                Password
                <input type='password' name='password' placeholder='Password' required />
            </label>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register