import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import Login from './auth/Login';
import HomeAdmin from './admin/HomeAdmin';

import ProtectedRoute from './common/hoc'

function App() {

  return (
    <>
      <Header/>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={
            <ProtectedRoute>
              <HomeAdmin />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
