import React, { Fragment } from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { Img } from './Img';
const cache = createCache();

export default () => {
  return (
    <Fragment>
      <h1>Hello Future</h1>
      <React.Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
        <Img
          cache={cache}
          src={
            'https://s3-us-west-2.amazonaws.com/punknaturalism.com/static/images/thumbnails/splendid-bullfrog-64.jpg'
          }
        />
      </React.Placeholder>
    </Fragment>
  );
};
