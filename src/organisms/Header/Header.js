import React from 'react';
import styled from 'react-emotion';

const StyledComponent = styled.div`
  display: relative;
  width: 100%;
  height: 400px;
  background-color: #ca2e55;
`;
const Title = styled.h1`
  color: white;
  text-align: center;
  padding-top: 150px;
`;
const SubTitle = styled.h3`
  color: white;
  text-align: center;
`;
const Header = ({ title, subTitle }) => {
  return (
    <StyledComponent>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </StyledComponent>
  );
};

export default Header;
