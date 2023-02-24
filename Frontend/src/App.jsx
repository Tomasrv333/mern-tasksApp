import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home.jsx';
import EditProfile from './pages/EditProfile.jsx';
import Auth from './pages/Auth.jsx';
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  return (
    <>
        <Toaster
            position='top-right'
            toastOptions={{
                style: {
                    fontSize: '1.8rem'
                }
            }}
        ></Toaster>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/edit-profile' element={<EditProfile />} />
            </Route>
            <Route path='/login' element={<Auth />} />
        </Routes>
    </>
  )
}

export default App