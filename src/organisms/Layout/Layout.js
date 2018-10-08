import React from 'react';
import Node from '../../Node';

export default ({ children }) => {
  return children.map(child => (
    <Node
      componentPath={child.componentPath}
      fields={child.fields}
      key={child.title}
    />
  ));
};
