import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext/AuthContext.jsx'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'

// AOS Import
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
  once: true, // Animation happens only once when scrolled
  offset: 100, // Trigger animations 100px before element comes into view
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
