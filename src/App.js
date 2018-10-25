import React, { Fragment } from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { Img } from './Img';
import Node from './Node';
import Spinner from './Spinner';
const cache = createCache();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Lazy load!
const getThing = createResource(
  () => sleep(1000).then(() => import('./Thing').then(mod => mod.default)),
  thing => thing
);

const Thing = props => {
  const Comp = getThing.read(cache, props);
  return <Comp {...props} />;
};

const MOCK_LAYOUT = {
  page: {
    layout: {
      componentPath: './organisms/Layout/Layout',
      fields: {
        children: [
          {
            componentPath: './organisms/Header/Header',
            fields: {},
            title: 'Header'
          }
        ]
      }
    }
  }
};

export default () => {
  return (
    <Fragment>
      <h1>Hello Future</h1>
      <React.Suspense maxDuration={500} fallback={<Spinner />}>
        <Thing />
      </React.Suspense>
      <React.Suspense maxDuration={500} fallback={<Spinner />}>
        <Img
          cache={cache}
          src={
            'https://s3-us-west-2.amazonaws.com/punknaturalism.com/static/images/thumbnails/splendid-bullfrog-64.jpg'
          }
        />
      </React.Suspense>
    </Fragment>
  );
};
