import React from 'react';
import { Sidebar } from '@shared';

const userPermissions = ['dashboard:view', 'settings:view'];
const sidebarConfig = [
  { path: '/', label: 'Dashboard', icon: 'FaHome', access: 'dashboard:view' },
  { path: '/profile', label: 'Profile', icon: 'FaUser', access: 'profile:view' },
  { path: '/settings', label: 'Settings', icon: 'FaCog', access: 'settings:view' },
];

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar config={sidebarConfig} userPermissions={userPermissions} />
      <div className="flex-1 p-6">Main content goes here</div>
    </div>
  );
};
