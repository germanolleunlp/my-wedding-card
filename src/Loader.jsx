import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Box from './Box';
import Colors from './Colors';

const Content = styled(Box)`
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
  -webkit-transform: translate(-50%, -50%);
`;

const Icon = styled.span`
  display: block;
  width: 90px;
  height: 90px;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid ${Colors.lightgray};
    border-top: 5px solid ${Colors.green};
    border-radius: 50%;
    -webkit-animation: rotating 1s linear infinite;
    animation: rotating 1s linear infinite;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  & > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    color: ${Colors.green};
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }
`;

function Loader({ show }) {
  return (
    !show && (
      <Content>
        <Inner>
          <Icon>
            <FontAwesomeIcon icon={solid('ring')} />
          </Icon>
        </Inner>
      </Content>
    )
  );
}

export default Loader;
