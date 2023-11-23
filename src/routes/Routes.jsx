import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const RoutesFile = () => {
  return (
    <div>
       <Routes>
          <Route exact path="/" element={<Sidebar/>} />
          <Route exact path="/register" element={<RegistrationForm/>} />
          <Route exact path="/login" element={<LoginForm/>} />
        </Routes>
    </div>
  )
}

export default RoutesFile
