import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
  padding: 20px;
  z-index: 999;
`;

const Circle = styled.div`
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  border-radius: 50%;
  width: 10em;
  height: 10em;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  animation: ${spin} 1.1s infinite linear;
`;

const Spinner = () => (
  <Container>
    <Circle />
  </Container>
);

export default Spinner;
