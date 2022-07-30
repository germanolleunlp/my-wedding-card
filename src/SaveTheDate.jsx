import React from 'react';
import styled from 'styled-components';
import Sizes from './Sizes';
import Keyframes from './Keyframes';
import { smallBreakpoint, mediumBreakpoint } from './Breakpoints';

const Content = styled.div`
  display: block;
  opacity: 1;
  width: ${Sizes.saveTheDateLarge}px;
  height: ${Sizes.saveTheDateLarge}px;
  bottom: ${(Sizes.saveTheDateLarge / 2) * -1}px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: 1s 2.3s ease-in-out;
  a {
    display: block;
    height: 50%;
    padding-top: 15%;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 4px;
  }
  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundAlphaOne};
    border-radius: 50%;
    z-index: -1;
    width: 110%;
    height: 110%;
    left: -5%;
    top: -5%;
    animation: ${Keyframes.pulse} 1s infinite;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundAlphaTwo};
    border-radius: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
  }
  ${smallBreakpoint(`
    width: ${Sizes.saveTheDateSmall}px;
    height: ${Sizes.saveTheDateSmall}px;
    bottom: ${(Sizes.saveTheDateSmall / 2) * -1}px;
  `)}
  ${mediumBreakpoint(`
    width: ${Sizes.saveTheDateMedium}px;
    height: ${Sizes.saveTheDateMedium}px;
    bottom: ${(Sizes.saveTheDateMedium / 2) * -1}px;
  `)}
`;

function SaveTheDate({ className, children }) {
  return <Content className={className}>{children}</Content>;
}

export default React.memo(SaveTheDate);
