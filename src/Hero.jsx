import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import Images from './Images';
import GettingMarried from './GettingMarried';
import SaveTheDate from './SaveTheDate';

const Title = styled.h4`
  font-size: 2.22222rem;
  margin: 55px 0 0.2em;
  color: ${Colors.white};
  text-shadow: 1px 1px 2px ${Colors.shadow};
`;

const Date = styled.span`
  font-size: 1.11111rem;
  color: ${Colors.white};
  text-shadow: 1px 1px 2px ${Colors.shadow};
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
    <section className={className}>
      <Content>
        <GettingMarried />
        <SaveTheDate>
          <Title>Agenda la fecha</Title>
          <Date>08 OCT 2022</Date>
        </SaveTheDate>
      </Content>
    </section>
  );
}

const StyledHero = styled(Hero)`
  display: block;
  position: relative;
  height: calc(100vh - ${Sizes.menuDefault}px);
  min-height: 700px;
  overflow: hidden;
  background-image: url(${Images.hero1});
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
