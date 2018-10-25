import React, { lazy } from 'react';

const getComponent = organismPath => lazy(() => import(`${organismPath}`));

export default ({ cache, componentPath, fields, loader }) => {
  const Component = getComponent(componentPath);
  return (
    <React.Suspense maxDuration={500} fallback={loader}>
      <Component cache={cache} {...fields} />
    </React.Suspense>
  );
};
