import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Keyframes from './Keyframes';

const SIZE = 150;

const Content = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background-color: ${Colors.white};
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Icon = styled.span`
  display: block;
  width: ${SIZE}px;
  height: ${SIZE}px;
  position: relative;
  font-size: 2rem;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 4px solid #b08f87;
    border-top: 4px solid #5d433d;
    border-radius: 50%;
    animation: ${Keyframes.rotating} 1s linear infinite;
    box-sizing: border-box;
  }
  & > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${SIZE}px;
  }
`;

function Loader({ show, children }) {
  if (show) {
    return (
      <Content>
        <Inner>
          <Icon>
            <img src="assets/logo.svg" alt="logo" />
          </Icon>
        </Inner>
      </Content>
    );
  }

  return children;
}

export default Loader;
