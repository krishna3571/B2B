import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Registration';
import Login from './Login';
import Forgetpasswrod from './Forgetpasswrod';
import Adduser from './Adduser';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="registration" element={<Registration />}>
            <Route path="login" element={<Login />} />
            <Route path="forgetpassword" element={<Forgetpasswrod />} />
            <Route path="adduser" element={<Adduser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

