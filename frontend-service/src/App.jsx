import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './views/auth/login';
import Register from './views/auth/register';
import Dashboard from './views/dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
