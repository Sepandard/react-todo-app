import React from 'react';

export interface SidebarItem {
    path: string;
    label: string;
    icon?: string; 
    access: string; 
}
export interface SidebarProps {
    config: SidebarItem[]; 
    userPermissions: string[]; 
  }
    


export const Sidebar = ({ config, userPermissions } : SidebarProps) => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="flex flex-col justify-between h-full">
        {/* Sidebar Items */}
        <ul className="mt-6 space-y-4">
          {config.map((item, index) => {
            // Access check
            if (!userPermissions.includes(item.access)) return null;

            return (
              <li key={index} className="px-4 py-2 hover:bg-gray-700 rounded">
                <a href={item.path} className="flex items-center space-x-4">
                  {/* {item.icon && <item.icon className="h-5 w-5" />} */}
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Logout or other options */}
        <div className="px-4 py-2">
          <button className="w-full bg-red-600 text-white py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

