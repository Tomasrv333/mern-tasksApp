import React from 'react'
import Layout from '../components/Layout'
import Register from '../components/auth/Register'
import classes from '../Scss/Auth.module.scss'

const AuthRegister = () => {
  return (
    <Layout>
        <div className={classes.container}>
            <Register />
        </div>
    </Layout>
  )
}

export default AuthRegister