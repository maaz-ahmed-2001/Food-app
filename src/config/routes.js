import { BrowserRouter , Route , Routes } from "react-router-dom";
import React from 'react'
import Home from "../views/Home";
import UserLogin from "../components/userLogin";
import UserSignUp from "../components/userSignUp";
import SellerSignUp from "../components/sellerSignUp";
import SellerLogin from "../components/sellerLogin";
import UserHome from "../views/UserHome";
import SellerHome from "../views/SellerHome";



export default function Routings() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/customerLogin" element={<UserLogin/>} />
            <Route path="/customerSignup" element={<UserSignUp/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/sellerLogin" element={<SellerLogin/>} />
            <Route path="/sellerSignup" element={<SellerSignUp/>} />
            <Route path="/userHome" element={<UserHome/>} />
            <Route path="/sellerHome" element={<SellerHome/>} />
        </Routes>
    </BrowserRouter>
  )
}

