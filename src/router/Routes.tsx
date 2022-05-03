import { useRoutes } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import Landing from '../pages/Landing';
import LogIn from '../pages/Login';

function Routes() {
  const withoutLogin = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/login', element: <LogIn /> },
    ],
  };

  const withLogin = {
    path: '/app',
    // element: isAuthenticated ? <Layout /> : <Navigate to="/" />,
    children: [

    ],
  };

  const notFound = {
    path: '*',
    element: <div>Not Found</div>,
  };

  const routes = useRoutes([withoutLogin, withLogin, notFound]);

  return (
    routes
  );
}

export default Routes;
