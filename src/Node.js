import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Spinner from './Spinner';

const getComponent = componentPath => lazy(() => import(`${componentPath}`));

const Node = ({ componentPath, fields, hasLoader }) => {
  const Component = getComponent(componentPath);
  return (
    <ErrorBoundary>
      <Suspense maxDuration={500} fallback={<Spinner />}>
        <Component {...fields} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Node;
