import './App.css'
import React, { Suspense } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import { ToastContainer } from 'react-toastify';
import Loading from './common/Loading';
import ProtectedRoute from './common/hoc'

const HomeAdmin1 = React.lazy(() => import('./admin/HomeAdmin'));
const Home1 = React.lazy(() => import('./public/Home'));

function App() {

  return (
    <>
      <Header/>
      <ToastContainer />
      <Router>
        <Suspense fallback={<Loading />}> {/* Esqueleto de carga mientras se cargan los componentes */}
          <Routes>
            <Route path="/" element={<Home1/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <HomeAdmin1 />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </Router>

      <Footer/>
    </>
  )
}

export default App
