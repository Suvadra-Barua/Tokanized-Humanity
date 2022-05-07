import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../components/ui/Layout';
import ApplicationDetails from '../pages/ApplicationDetails';
import CreateCampaign from '../pages/CreateCampaign';
import FundRequestDetails from '../pages/FundRequestDetails';
import Landing from '../pages/Landing';
import MembershipApplications from '../pages/MembershipApplications';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import { isAuthenticated, role } from '../utils';

function Routes() {
  const withoutLogin = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/fund-request/:id', element: <FundRequestDetails /> },
      { path: '/user/:id', element: <Profile /> },
      { path: '/sign-up', element: <SignUp /> },

    ],
  };

  const withLogin = {
    path: '/create',
    element: isAuthenticated ? <Layout /> : <Navigate to="/" />,
    children: [
      { path: '/create/campaign', element: <CreateCampaign /> },

    ],
  };

  const daoRoutes = {
    path: '/applications',
    element: role() === 'dao' ? <Layout /> : <Navigate to="/" />,
    children: [
      { path: '/applications', element: <MembershipApplications /> },
      { path: '/applications/:id', element: <ApplicationDetails /> },

    ],
  };

  const notFound = {
    path: '*',
    element: <div>Not Found</div>,
  };

  const routes = useRoutes([withoutLogin, withLogin, daoRoutes, notFound]);

  return (
    routes
  );
}

export default Routes;
