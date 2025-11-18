import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname || '/';
    let title = 'WarmPaws';

    if (path === '/' || path === '') {
      title = 'WarmPaws - Home';
    } else if (path.startsWith('/services')) {
      title = 'WarmPaws - Services';
    } else if (path.startsWith('/my-profile')) {
      title = 'WarmPaws - My Profile';
    } else if (path.startsWith('/login')) {
      title = 'WarmPaws - Login';
    } else if (path.startsWith('/register')) {
      title = 'WarmPaws - Register';
    } else if (path.startsWith('/forgot-password')) {
      title = 'WarmPaws - Reset Password';
    } else if (path.startsWith('/book-service')) {
      const parts = path.split('/');
      const id = parts[2];
      title = id ? `WarmPaws - Book Service #${id}` : 'WarmPaws - Book Service';
    } else {
      // Fallback: use the last path segment as a hint
      const seg = path.split('/').filter(Boolean).pop();
      title = seg ? `WarmPaws - ${seg[0].toUpperCase() + seg.slice(1)}` : 'WarmPaws';
    }

    document.title = title;
  }, [location]);

  return null;
};

export default RouteTitle;
