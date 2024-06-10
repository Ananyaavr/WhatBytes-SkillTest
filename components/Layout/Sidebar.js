// components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboard, faBriefcase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open fixed top-16 lg:top-16 left-0 z-40">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">SideBar</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content pt-16 lg:pt-0">
          {/* Sidebar content here */}
          <li className="mb-4">
            <a className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faClipboard} className="w-5 h-5" />
              <span>Skill Test</span>
            </a>
          </li>
          <li className="mb-4">
            <a className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
              <span>Internship</span>
            </a>
          </li>
          <li className="mt-auto">
            <a className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
