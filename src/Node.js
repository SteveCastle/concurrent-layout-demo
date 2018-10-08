import React, { lazy } from 'react';

const getComponent = organismPath => lazy(() => import(`${organismPath}`));

export default ({ cache, componentPath, fields }) => {
  const Component = getComponent(componentPath);
  return (
    <React.Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
      <Component cache={cache} {...fields} />
    </React.Placeholder>
  );
};
