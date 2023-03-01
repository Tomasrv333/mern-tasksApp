import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home.jsx';
import EditProfile from './pages/EditProfile.jsx';
import Auth from './pages/Auth.jsx';
import PrivateRoutes from './components/PrivateRoutes'
import AuthRegister from './pages/AuthRegister.jsx';

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
        <Toaster
            position='top-right'
            toastOptions={{
                style: {
                    fontSize: '1.4rem'
                }
            }}
        ></Toaster>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/edit-profile' element={<EditProfile />} />
            </Route>
            <Route path='/auth' element={<Auth />} />
            <Route path='/auth/register' element={<AuthRegister />} />
        </Routes>
    </>
  )
}

export default App