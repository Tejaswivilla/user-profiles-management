import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersList from './pages/UsersList';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

