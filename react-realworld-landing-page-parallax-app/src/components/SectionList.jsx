import React from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const SectionList = ({children}) => {
  return React.Children.map(children, (child) => {
    return <StyledSection>{child}</StyledSection>;
  });
};
export {SectionList};
