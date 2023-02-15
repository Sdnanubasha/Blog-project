import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Viewblog from './viewblog'
import Addblog from './addblog'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addblog' element={<Addblog />} />
            <Route path='/blog/:id' element={<Viewblog />} />
        </Routes>
    );
}

export default MyRoutes;