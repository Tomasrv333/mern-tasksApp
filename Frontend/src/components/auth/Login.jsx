import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from '../../Scss/AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
    
        try{
            await axios.post('/api/auth/login', {
                email,
                password,
            });
            navigate('/');
            toast.success('Login Success')
        } catch(err) {
            console.log(err)
            toast.error('Login Failed')
        }
    }

  return (
    <div className={classes.register}>
        <h1 className={classes.title}>
            Login
        </h1>
        <form className={classes.authForm} onSubmit={login}>
            <label htmlFor='email'>
                Email
                <input type='email' name='email' placeholder='email' required />
            </label>
            <label htmlFor='password'>
                Password
                <input type='password' name='password' placeholder='password' required />
            </label>
            <button type='submit'>Login</button>
        </form>
        <p className={classes.text}>Si aun no tienes cuenta <Link to='/auth/register' className={classes.text_link}>Registrate</Link> ahora.</p>
    </div>
  )
}

export default Login