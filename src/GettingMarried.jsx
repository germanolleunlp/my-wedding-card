import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Keyframes from './Keyframes';

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
    text-shadow: 1px 1px 2px ${Colors.shadow};
    position: relative;
    letter-spacing: 2px;
    display: inline;
    font-size: 1.44444rem;
    text-transform: uppercase;
    margin: 0;
    border-top: 1px solid ${Colors.white};
    border-bottom: 1px solid ${Colors.white};
    padding: 12px 20px;
  }
`;

function Title({ className }) {
  return <h2 className={className}>Caro & Ger</h2>;
}

const StyledTitle = styled(Title)`
  color: ${Colors.white};
  text-shadow: 1px 1px 2px ${Colors.shadow};
  position: relative;
  letter-spacing: 4px;
  display: block;
  font-size: 5rem;
  font-weight: 500;
  margin: 0 0 2rem;
  animation: ${Keyframes.slideInUp} 0.75s linear;
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
          {'Nos casamos'.split('').map((letter, index) => {
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
