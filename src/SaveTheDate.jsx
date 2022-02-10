import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import Keyframes from './Keyframes';

const Content = styled.div`
  display: block;
  bottom: ${props => `${props.bottom}px`};
  color: ${Colors.white};
  opacity: 1;
  z-index: 50;
  width: ${Sizes.saveTheDateDefault}px;
  height: ${Sizes.saveTheDateDefault}px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: 1s 2.3s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    background-color: ${Colors.greenAlphaLight};
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
    background-color: ${Colors.greenAlphaDark};
    border-radius: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
  }
`;

function SaveTheDate({ className, children }) {
  const [bottom, setBottom] = useState(Sizes.saveTheDateDefault * -1);

  useEffect(() => {
    setTimeout(() => setBottom(Sizes.saveTheDateHalfDefault * -1));
  }, []);

  return (
    <Content className={className} bottom={bottom}>
      {children}
    </Content>
  );
}

export default React.memo(SaveTheDate);
