import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import CartPage from '../pages/cart/CartPage'
import ErrorPage from '../pages/error/ErrorPage'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import ProfilePage from '../pages/profile/Profile'
import RestaurantPage from '../pages/restaurant/Restaurant'
import SearchPage from '../pages/search/SearchPage'
import SignUpPage from '../pages/signup/SignUpPage'
import AddressPage from '../pages/address/AddressPage'


const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/restaurant/:id' element={<RestaurantPage />} />
                <Route path='/address' element={<AddressPage/>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router