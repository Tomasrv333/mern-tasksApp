import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from '../../Scss/Navbar.module.scss'

const Navbar = () => {
    const [user, setUser] = useState(null);
    
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

    if(!user) {
        return null;
    }

  return (
    <header>
        <div className={classes.userInfo}></div>
        <div>
            <h1 className={classes.name}>{user.name}</h1>
            <h1 className={classes.email}>{user.email}</h1>
            <Link to='/edit-profile' className={classes.editBtn}>Edit</Link>
        </div>
    </header>
  )
}

export default Navbar