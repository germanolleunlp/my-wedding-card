import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Colors from './Colors';
import Keyframes from './Keyframes';

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
  width: 90px;
  height: 90px;
  position: relative;
  font-size: 2rem;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid ${Colors.lightgray};
    border-top: 5px solid ${Colors.black};
    border-radius: 50%;
    animation: ${Keyframes.rotating} 1s linear infinite;
    box-sizing: border-box;
  }
  & > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    color: ${Colors.black};
    transform: translate(-50%, -50%);
  }
`;

function Loader({ show, children }) {
  if (show) {
    return (
      <Content>
        <Inner>
          <Icon>
            <FontAwesomeIcon icon={solid('gem')} />
          </Icon>
        </Inner>
      </Content>
    );
  }

  return children;
}

export default React.memo(Loader);
