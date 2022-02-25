import React from 'react';
import styled from 'styled-components';
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
  return (
    <section id="#/home" className={className}>
      <Content>
        <GettingMarried />
        <SaveTheDate>
          <a
            target="_blank"
            href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M2pxbzB0c2hiODM4MDA2azZzaThnMHRrb2ggMnZqam5wY3RwZmxqdnV2cXZvaGhmdWxsOWNAZw&amp;tmsrc=2vjjnpctpfljvuvqvohhfull9c%40group.calendar.google.com"
            rel="noreferrer"
          >
            <Title>Agenda la fecha</Title>
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
  background-image: url(${Images.photo1});
  background-size: cover;
  background-position: center center;
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
