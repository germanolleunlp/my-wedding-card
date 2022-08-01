import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import Fonts from './Fonts';
import Colors from './Colors';

function Gifts({ className }) {
  return (
    <section id="#/gifts" className={className}>
      <h3>Obsequios</h3>
      <h2>Si tienen un regalo en mente...</h2>
      <p>
        Numero de CBU: XXXXXXXXXXXXXXXXXXXXXX
        <br />
        Alias de CBU: alias-alias-alias
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
  color: ${({ theme }) => theme.colors.textInverted};
  &:before {
    content: '';
    position: absolute;
    background-color: ${Colors.blackAlpha};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  h3 {
    font-family: ${Fonts.secondary};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0 0 1rem;
    z-index: 1;
  }
  h2 {
    font-family: ${Fonts.subtitle};
    font-size: 2rem;
    margin: 0 0 1rem;
    z-index: 1;
  }
  p {
    font-family: ${Fonts.text};
    font-size: 1rem;
    margin: 0;
    z-index: 1;
  }
`;

export default React.memo(StyledGifts);
