import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './views/auth/login';
import Register from './views/auth/register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
