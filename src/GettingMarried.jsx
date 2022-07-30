import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Keyframes from './Keyframes';
import {
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint
} from './Breakpoints';

const Wrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Content = styled.div`
  visibility: ${props => props.visibility};
  animation: ${Keyframes.fadeIn} 2s linear;
  transition: visibility;
  h4 {
    color: ${Colors.white};
    position: relative;
    display: inline;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    border-top: 1px solid ${Colors.white};
    border-bottom: 1px solid ${Colors.white};
    padding: 12px 20px;
    ${largeBreakpoint(`
      font-size: 1.5rem;
    `)}
  }
`;

function Title({ className }) {
  return <h2 className={className}>Llego la hora...</h2>;
}

const StyledTitle = styled(Title)`
  color: ${Colors.white};
  position: relative;
  display: block;
  font-size: 4rem;
  font-weight: 500;
  margin: 0 0 2rem;
  animation: ${Keyframes.slideInUp} 0.75s linear;
  ${smallBreakpoint(`
    font-size: 3rem;
  `)}
  ${mediumBreakpoint(`
    font-size: 4rem;
  `)}
  ${largeBreakpoint(`
    font-size: 5rem;
  `)}
`;

function Letter({ className, value, delay = 0 }) {
  const [visibility, setVisibility] = useState('hidden');

  useEffect(() => {
    setTimeout(() => setVisibility('visible'), delay);
  }, []);

  return (
    <span className={className} style={{ visibility }}>
      {value}
    </span>
  );
}

const StyledLetter = styled(Letter)`
  animation: ${Keyframes.fadeInUp} 2s linear;
  transition: visibility;
`;

function GettingMarried() {
  const [visibility, setVisibility] = useState('hidden');
  const startDelay = 500;

  useEffect(() => {
    setTimeout(() => setVisibility('visible'), startDelay);
  }, []);

  return (
    <Wrapper>
      <Content visibility={visibility}>
        <StyledTitle />
        <h4>
          {'acompañanos a celebrar'.split('').map((letter, index) => {
            const key = `${letter}_${index}`;
            return (
              <StyledLetter
                key={key}
                value={letter}
                delay={startDelay * 2 + 100 * index}
              />
            );
          })}
        </h4>
      </Content>
    </Wrapper>
  );
}

export default React.memo(GettingMarried);
