import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from '../../Scss/EditProfile.module.scss';
import { BsArrowLeftShort } from 'react-icons/bs'
import { toast } from 'react-hot-toast';

const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  
  useEffect(() => {
    (
      async() => {
        try{
          const {data} = await axios.get('/api/users/me')
          setUser(data)
        } catch(err) {
          console.log(err)
        }
      }
    )()
  }, [])

  const updateUserInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,

    })
  }

  const updateProfile = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.put('/api/users/me', user)
      toast.success('Profile updated')
      setUser(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <Link to='/' className={classes.backBtn}>
          <BsArrowLeftShort />
          Home
      </Link>
      <div className={classes.editProfile}>
        <h1 className={classes.title}>Edit Profile</h1>
        <form className={classes.editForm} onSubmit={updateProfile}>
          <label htmlFor='name'>
            Name
            <input type='text' name='name' placeholder='New Name' required value={user.name} onChange={updateUserInfo} />
          </label>
          <label htmlFor='email'>
            Email
            <input type='email' name='email' placeholder='New Email' required value={user.email} onChange={updateUserInfo} />
          </label>
          <button type='submit'>Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile