import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './App.css';
import Academy from './pages/AcademyManagement';
import Blogs from './pages/BlogsManagement';
import Membership from './pages/MemebershipManagement';
import Order from './pages/OrderManagement';
import PageManagement from './pages/PageManagement';
import Notification from './pages/Notification';
import ProfileManagement from './pages/ProfileManagement';
import Trees from './pages/TreesManagement';
import Volunteer from './pages/VolunteerManagement';
import SponsorsandPartners from './pages/Sponsors&Partners';
import Project from './pages/ProjectManagement';
import AddProjectForm from './pages/AddProject';
import UpdateProjectForm from './pages/UpdateProject';



const App = () => {
  // const isAuthenticated = !!localStorage.getItem('token');
  const isAuthenticated=true;

  return (
    <Router>
      <div className="app bg-gray-100">
        {isAuthenticated && <Topbar />}
        <div className="main">
          {isAuthenticated && <Sidebar />}
          <div className="content h-[90vh] overflow-scroll ">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
              <Route path="/academy" element={isAuthenticated ? <Academy /> : <Navigate to="/login" />} />
              <Route path="/blogs" element={isAuthenticated ? <Blogs /> : <Navigate to="/login" />} />

              <Route path="/membership" element={isAuthenticated ? <Membership /> : <Navigate to="/login" />} />
              <Route path="/notification" element={isAuthenticated ? <Notification /> : <Navigate to="/login" />} />
              <Route path="/order" element={isAuthenticated ? <Order /> : <Navigate to="/login" />} />
              <Route path="/page" element={isAuthenticated ? <PageManagement /> : <Navigate to="/login" />} />
              <Route path="/profile" element={isAuthenticated ? <ProfileManagement /> : <Navigate to="/login" />} />
              <Route path="/sponsorsandpartners" element={isAuthenticated ? <SponsorsandPartners /> : <Navigate to="/login" />} />
              <Route path="/trees" element={isAuthenticated ? <Trees /> : <Navigate to="/login" />} />
              <Route path="/volunteer" element={isAuthenticated ? <Volunteer /> : <Navigate to="/login" />} />
              <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
              <Route path="/notification" element={isAuthenticated ? <Notification /> : <Navigate to="/login" />} />
              <Route path="/project" element={isAuthenticated ? <Project /> : <Navigate to="/login" />} />
              <Route path="/add-project" element={isAuthenticated ? <AddProjectForm /> : <Navigate to="/login" />} />
              <Route path="/update-project/:projectId" element={isAuthenticated ? <UpdateProjectForm /> : <Navigate to="/login" />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;