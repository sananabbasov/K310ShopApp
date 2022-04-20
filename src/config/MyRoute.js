import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import Category from '../pages/Category'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:id/' element={<ProductDetail />} />
            <Route path='/category/:catName' element={<Category/>}/>
        </Routes>
    )
}

export default MyRoute