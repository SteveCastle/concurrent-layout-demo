import React from 'react';
import { createResource } from 'simple-cache-provider';

// Load an image inside a promise.
function loadImage(src) {
  const image = new Image();
  return new Promise(resolve => {
    image.onload = () => resolve(src);
    image.src = src;
  });
}

const readImage = createResource(loadImage);

export const Img = ({ cache, src }) => <img src={readImage.read(cache, src)} />;
