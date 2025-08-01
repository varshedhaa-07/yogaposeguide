import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Poses from './components/YogaPoses'; // 🔸 create this component
import PoseDetails from './components/PoseDetails';
import AddPoseForm from './components/AddPoseForm';
import EditPoseForm from './components/EditPoseForm';
import RoutinePage from './components/RoutinePage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poses" element={<Poses />} />
        <Route path="/poses/:id" element={<PoseDetails />} /> 
        <Route path="/add-pose" element={<AddPoseForm />} />
        <Route path="/edit-pose/:id" element={<EditPoseForm />} />
        <Route path="/routine" element={<RoutinePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
