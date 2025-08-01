import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BasicForm from '../pages/basic/BasicForm';
import NestedForm from '../pages/nested/NestedForm';
import DynamicForm from '../pages/dynamic/DynamicForm';
import RelatedForm from '../pages/related/RelatedForm';
import StepForm from '../pages/step/StepForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/basic" replace />,
      },
      {
        path: '/basic',
        element: <BasicForm />,
      },
      {
        path: '/nested',
        element: <NestedForm />,
      },
      {
        path: '/dynamic',
        element: <DynamicForm />,
      },
      {
        path: '/related',
        element: <RelatedForm />,
      },
      {
        path: '/step',
        element: <StepForm />,
      },
    ],
  },
]);

export default router;