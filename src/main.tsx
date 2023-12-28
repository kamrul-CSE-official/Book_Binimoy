import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <div className="fixed bottom-10 right-20 z-50">
      <ScrollToTop />
    </div>
  </React.StrictMode>
);
