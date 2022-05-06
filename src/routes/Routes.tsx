import { useRoutes } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import FundRequestDetails from '../pages/FundRequestDetails';
import Landing from '../pages/Landing';
import Profile from '../pages/Profile';

function Routes() {
  const withoutLogin = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/fund-request/:id', element: <FundRequestDetails /> },
      { path: '/user/:id', element: <Profile /> },

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
