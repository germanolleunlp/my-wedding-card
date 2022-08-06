import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import party from 'party-js';
import Colors from './Colors';
import Sizes from './Sizes';
import Images from './Images';
import GettingMarried from './GettingMarried';
import SaveTheDate from './SaveTheDate';
import { smallBreakpoint, mediumBreakpoint } from './Breakpoints';

const Title = styled.h4`
  font-size: 2rem;
  margin: 0;
  ${smallBreakpoint(`
    font-size: 1.5rem;
  `)}
  ${mediumBreakpoint(`
    font-size: 1.9rem;
  `)}
`;

const Date = styled.span`
  font-size: 1rem;
  ${smallBreakpoint(`
    font-size: 0.88rem;
  `)}
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  display: table;
`;

function Hero({ className }) {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
        party.confetti(ref.current);
      }, 700);
    }
  }, [ref?.current]);

  return (
    <section id="#/home" className={className}>
      <Content ref={ref}>
        <GettingMarried />
        <SaveTheDate>
          <a
            target="_blank"
            href="https://forms.gle/R7jJkZYRp1x5TQDi6"
            rel="noreferrer"
          >
            <Title>
              Confirma tu
              <br />
              asistencia
            </Title>
            <Date>08 OCT 2022</Date>
          </a>
        </SaveTheDate>
      </Content>
    </section>
  );
}

const StyledHero = styled(Hero)`
  display: block;
  position: relative;
  height: calc(100vh - ${Sizes.menu}px);
  min-height: 700px;
  overflow: hidden;
  background-image: url(${Images.hero});
  background-size: auto;
  background-position: center center;
  background-repeat: repeat-x;
  &:before {
    content: '';
    position: absolute;
    background-color: ${Colors.blackAlpha};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export default React.memo(StyledHero);
