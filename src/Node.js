import React, { lazy } from 'react';
import Spinner from './Spinner';

const getComponent = organismPath => lazy(() => import(`${organismPath}`));

export default ({ componentPath, fields, hasLoader }) => {
  const Component = getComponent(componentPath);
  return (
    <React.Suspense maxDuration={1000} fallback={<Spinner />}>
      <Component {...fields} />
    </React.Suspense>
  );
};
