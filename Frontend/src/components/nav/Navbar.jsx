import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../../Scss/Navbar.module.scss'
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const getUser = async() => {
        try{
            const {data} = await axios.get('/api/users/me')
            setUser(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleLogout = async () => {
        try{
            await axios.get('/api/auth/logout')
            setUser(null);
            toast.success('User Logged out')
            navigate('/auth')
        } catch(err) {
            console.log(err)
        }
    }

    if(!user) {
        return null;
    }

  return (
    <header>
        <div className={classes.userInfo}>
            <div>
                <h1 className={classes.name}>{user.name}</h1>
                <h1 className={classes.email}>{user.email}</h1>
                <Link to='/edit-profile' className={classes.editBtn}>Edit</Link>
            </div>
        </div>
        <nav>
            <button type='button' className={classes.logout} onClick={handleLogout}>Logout</button>
        </nav>
    </header>
  )
}

export default Navbar