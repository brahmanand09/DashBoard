import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))

const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Details = Loadable(lazy(() => import('../views/sample-page/Details')))
const Deliverables = Loadable(lazy(() => import('../views/sample-page/Deliverables')))




const AddClients = Loadable(lazy(() => import('../views/sample-page/ClientForm')))
const AddProjects = Loadable(lazy(() => import('../views/sample-page/ProjectForm')))


const AClientDetails = Loadable(lazy(() => import('../views/sample-page/AClientDetails')))


const Icons = Loadable(lazy(() => import('../views/icons/Icons')))

const Products = Loadable(lazy(() => import('../views/products/Products')))

const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },

      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/sample-page/details', exact: true, element: <Details /> },
      { path: '/sample-page/deliverable', exact: true, element: <Deliverables /> },



      { path: '/sample-page/clientForm', exact: true, element: <AddClients /> },
      { path: '/sample-page/projectForm', exact: true, element: <AddProjects /> },



      { path: '/sample-page/aClientDetails/:id', exact: true, element: <AClientDetails /> },


      { path: '/icons', exact: true, element: <Icons /> },

      { path: '/products', exact: true, element: <Products /> },

      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
