import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoot } from '@pages/layout';
import { useMemo } from 'react';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '',
      element: <AppRoot />,
      children: [
        {
          path: '/auth/login/',
          lazy: async () => {
            const { LoginLayout } = await import('./pages/auth/login/LoginLayout');
            return { Component: LoginLayout };
          },
        },
        // {
        //   path: '/auth/sing-up/',
        //   lazy: async () => {
        //     const {LoginLayout } = await import('./pages/auth/LoginLayout');
        //     return { Component: LoginLayout };
        //   },
        // },
        {
          path: 'dashboard',
          lazy: async () => {
            const { DashboardLayout } = await import('./pages/dashboard/DashboardLayout');
            return { Component: DashboardLayout };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
