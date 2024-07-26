import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUsers, FiClipboard, FiShoppingBag, FiUser, FiSettings, FiBell, FiLogOut, FiBook, FiBookOpen, FiFile } from 'react-icons/fi'; // Import icons from react-icons


const sidebarLinks = [
 { path: '/sponsorsandpartners', text: 'Sponsors and Partners', icon: FiUsers },
  { path: '/project', text: 'Project Management', icon: FiClipboard },
  { path: '/trees', text: 'Trees Management', icon: FiBook }, // Using FiBook as an example icon
  { path: '/order', text: 'Order Management', icon: FiShoppingBag },
  { path: '/membership', text: 'Membership Management', icon: FiUsers },
  { path: '/volunteer', text: 'Volunteer Management', icon: FiUsers },
  { path: '/academy', text: 'Academy Management', icon: FiBook },
  { path: '/blogs', text: 'Blogs Management', icon: FiBookOpen },
  { path: '/profile', text: 'Profile Management', icon: FiUser },
  { path: '/page', text: 'Page Management', icon: FiFile },
  { path: '/settings', text: 'Settings', icon: FiSettings },
  { path: '/notification', text: 'Notification', icon: FiBell },
  { path: '/logout', text: 'Logout', icon: FiLogOut },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-64  bg-white border-gray-200 m-2 rounded-[20px] h-[85vh]">
      <ul className="mt-4">
        {sidebarLinks.map((link, index) => (
          <li key={index} className=" border-gray-200">
            <Link to={link.path} className={`px-3 flex items-center text-gray-800 hover:bg-gray-200 py-2 rounded-[20px] mx-5 text-[14px] mb-1 hover:text-blue-500 ${location.pathname === link.path ? 'x text-blue-500 font-semibold' : 'hover:bg-gray-100'}`}>
              <link.icon className="mr-2" /> {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;