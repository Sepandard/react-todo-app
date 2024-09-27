import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoot } from '@features/layout';
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
            const {LoginLayout } = await import('./features/auth/LoginLayout');
            return { Component: LoginLayout };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return (
    <RouterProvider router={router} />
  );
};
