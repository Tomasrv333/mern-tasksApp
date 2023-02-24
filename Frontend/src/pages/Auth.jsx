import React from 'react'
import Layout from '../components/Layout'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import classes from '../Scss/Auth.module.scss'

const Auth = () => {
  return (
    <Layout>
        <div className={classes.container}>
            <Login />
        </div>
    </Layout>
  )
}

export default Auth