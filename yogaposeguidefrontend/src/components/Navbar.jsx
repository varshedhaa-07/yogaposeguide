import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setIsLogin(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar absolute navbar-expand-lg px-4 shadow-sm" style={{ background: '#F7F7E0' }}>
        <Link to="/" className="navbar-brand fw-bold">YogaTrack</Link>
        <div className="d-flex gap-3 align-items-center ms-auto">
          <Link to="/" className="btn btn-link">Home</Link>
          <Link to="/poses" className="btn btn-link">Poses</Link>
          <Link to="/dashboard" className="btn btn-link">Dashboard</Link>


          {isLoggedIn && (
            <Link to="/routine" className="btn btn-link">Routine</Link>
          )}

          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>Login</button>
          )}
        </div>
      </nav>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Registration'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
          <div className="text-center mt-3">
            {isLogin ? (
              <>
                <span>Don't have an account? </span>
                <button className="btn btn-link p-0 text-primary text-decoration-none" onClick={() => setIsLogin(false)}>
                  Register
                </button>
              </>
            ) : (
              <>
                <span>Already have an account? </span>
                <button className="btn btn-link p-0 text-primary text-decoration-none" onClick={() => setIsLogin(true)}>
                  Login
                </button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
