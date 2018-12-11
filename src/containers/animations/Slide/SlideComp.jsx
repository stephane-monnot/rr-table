import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  transition: all 300ms ease-in-out;

  visibility: ${({ status }) => {
    switch (status) {
      case 'entering':
        return 'hidden';
      case 'entered':
        return 'visible';
      case 'exiting':
        return 'visible';
      case 'exited':
        return 'hidden';
      default:
        return null;
    }
  }};

  opacity: ${({ status }) => {
    switch (status) {
      case 'entering':
        return 0;
      case 'entered':
        return 1;
      case 'exiting':
        return 1;
      case 'exited':
        return 0;
      default:
        return null;
    }
  }};

  transform: translate3d(
    ${({ status }) => {
    let tx = '100%';
    switch (status) {
      case 'entering':
        tx = 0;
        break;
      case 'entered':
        tx = 0;
        break;
      case 'exiting':
        tx = '100%';
        break;
      case 'exited':
        tx = '100%';
        break;
      default:
        tx = '100%';
    }
    return `${tx}, 0, 0`;
  }}
  );
`;

const SlideComp = ({ children, status }) => <Wrapper status={status}>{children}</Wrapper>;

export default SlideComp;
