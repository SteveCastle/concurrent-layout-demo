import React, { Fragment, useState } from 'react';
import { createCache, createResource } from 'simple-cache-provider';
import { Img } from './Img';
import Node from './Node';
import Spinner from './Spinner';
const cache = createCache();

const MOCK_LAYOUT = {
  page: {
    layout: {
      componentPath: './organisms/Layout/Layout',
      fields: {
        children: [
          {
            componentPath: './organisms/Header/Header',
            fields: {
              title: 'Hello',
              subTitle: 'To the World'
            },
            title: 'Header'
          },
          {
            componentPath: './organisms/Body/Body',
            fields: {},
            title: 'Body'
          },
          {
            componentPath: './organisms/Footer/Footer',
            fields: {},
            title: 'Footer'
          }
        ]
      }
    }
  }
};

const App = () => {
  let [layout, setLayout] = useState(MOCK_LAYOUT);
  const { componentPath, fields } = layout.page.layout;
  return (
    <Fragment>
      <Node componentPath={componentPath} fields={fields} />
    </Fragment>
  );
};

export default App;
