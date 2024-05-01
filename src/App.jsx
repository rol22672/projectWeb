import './App.css'
import React, { Suspense } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import Login from './auth/Login';
import HomeAdmin from './admin/HomeAdmin';
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
            <Route path="/" component={Home1} />
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
