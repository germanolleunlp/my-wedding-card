import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import Images from './Images';

const SaveTheDate = styled.div`
  display: block;
  bottom: -185px;
  color: ${Colors.white};
  opacity: 1;
  z-index: 50;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
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
    -webkit-animation: pulse 1s infinite;
    animation: pulse 1s infinite;
    -webkit-box-sizing: border-box;
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
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

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

const GettingMarried = styled.div`
  display: table-cell;
  vertical-align: middle;
  h4 {
    font-size: 1.44444rem;
    color: ${Colors.white};
    text-shadow: 1px 1px 2px ${Colors.shadow};
    text-transform: uppercase;
    margin: 0;
    display: inline;
    border-top: 1px solid ${Colors.white};
    border-bottom: 1px solid ${Colors.white};
    padding: 12px 20px;
    position: relative;
    letter-spacing: 2px;
  }
`;

function Hero({ className }) {
  return (
    <section className={className}>
      <Content>
        <GettingMarried>
          <h4>Nos casamos</h4>
        </GettingMarried>
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
  height: calc(100vh - ${Sizes.menuDefault});
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

export default StyledHero;
