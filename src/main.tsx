import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import Store from './redux/Store.ts';
import AuthProvider from './Providers/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={Store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
