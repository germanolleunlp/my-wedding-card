import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import Fonts from './Fonts';
import Colors from './Colors';

function Gifts({ className }) {
  return (
    <section id="#/gifts" className={className}>
      <h2>Si queres hacernos un regalo</h2>
      <p>
        Nombre: Dutto Sergio Daniel
        <br />
        Banco: Banco Macro
        <br />
        CBU: 2850721940094783455768
      </p>
    </section>
  );
}

const StyledGifts = styled(Gifts)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 420px;
  background-image: url(${Images.gifts});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.text};
  &:before {
    content: '';
    position: absolute;
    background-color: ${Colors.blackAlpha};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  h2 {
    font-family: ${Fonts.subtitle};
    font-size: 1.5rem;
    margin: 0 0 1rem;
    z-index: 1;
  }
  p {
    font-family: ${Fonts.text};
    font-size: 1rem;
    margin: 0;
    z-index: 1;
    line-height: 2rem;
  }
`;

export default StyledGifts;
