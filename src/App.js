import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import CustomerRegistrationForm from './components/CustomerRegistration';
import TextPhrase from './TextPhrase';
import GstCalculator from './components/GstCalculator';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Sidebar/>} />
          <Route exact path="/register" element={<RegistrationForm/>} />
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/text" element={<TextPhrase/>} />
          <Route exact path="/gst" element={<GstCalculator/>} />
          <Route exact path="/customer-register" element={<CustomerRegistrationForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page</div>;
}

export default App;
