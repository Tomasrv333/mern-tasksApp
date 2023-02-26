import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Login from '../components/auth/Login'
import useAuth from '../hooks/useAuth'
import classes from '../Scss/Auth.module.scss'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const {auth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(auth){
      navigate('/')
    }
  }, [auth, navigate])

  return (
    <Layout>
        <div className={classes.container}>
            <Login />
        </div>
    </Layout>
  )
}

export default Auth