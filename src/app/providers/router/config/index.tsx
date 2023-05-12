import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../../shared/config/constants/paths';
import { Spinner } from '../../../../shared/ui/Spinner';

const StartPage = React.lazy(async () => await import('../../../../pages/StartPage'));

export const Routes = [
  {
    path: PATH.home,
    element: <React.Suspense fallback={<Spinner />}>{<StartPage />}</React.Suspense>,
  },
  { path: '*', element: <Navigate to={PATH.home} replace /> },
];
