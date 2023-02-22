import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Home, EditProfile, Auth } from './pages'
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
            <Route path='/auth' element={<Auth />} />
        </Routes>
    </>
  )
}

export default App