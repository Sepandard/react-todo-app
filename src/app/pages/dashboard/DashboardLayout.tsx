import React from 'react';
import { Sidebar, Breadcrumbs } from '@shared';
import { ProjectName } from './style';

const userPermissions = ['dashboard:view', 'settings:view'];
const sidebarConfig = [
  { path: '/', label: 'Dashboard', icon: 'board', access: 'dashboard:view' },
  { path: '/profile', label: 'Profile', icon: 'page', access: 'profile:view' },
  { path: '/settings', label: 'Settings', icon: 'settings', access: 'settings:view' },
];

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar config={sidebarConfig} userPermissions={userPermissions} />
      <div className="flex-1 p-6">
        <Breadcrumbs items={['Projects', 'Kanban Board']} />
        <ProjectName className='mt-3'>Kanban board</ProjectName>
      </div>
</div>
  );
};
