import { BrowserRouter , Route , Routes , useNavigate } from "react-router-dom";
import React from 'react'
import UserAuth from "../views/UserAuth";
import Home from "../views/Home";



export default function Routings() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserAuth/>} />

            {/* <Route path="/" element={<Home/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}

