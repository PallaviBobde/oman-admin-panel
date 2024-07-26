import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiLogOut, FiUsers } from 'react-icons/fi'; // Import icons from react-icons/fi

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('rememberMe');
    sessionStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className="bg-white m-2 rounded-[20px] border border-blue-300">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <FiUsers className="text-gray-800 h-8 w-8 mr-2" />
              <h1 className="text-gray-80 text-lg font-semibold">Admin Dashboard</h1>
            </div>
          </div>
          <div>
            <button
              className="text-gray-200 flex items-center transition duration-300 transform hover:text-gray-100"
              onClick={handleLogout}
            >
              <span className="mr-2 text-gray-800">Logout</span>
              <FiLogOut className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
