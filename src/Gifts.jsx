import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Images from './Images';
import Fonts from './Fonts';

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
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 420px;
  background-image: url(${Images.terraza2});
  background-size: cover;
  background-position: center center;
  color: ${Colors.white};
  h3 {
    font-family: ${Fonts.secondary};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  h2 {
    font-family: ${Fonts.subtitle};
    font-size: 2rem;
    margin: 0 0 1rem;
  }
  p {
    font-family: ${Fonts.text};
    font-size: 1rem;
    margin: 0;
  }
`;

export default React.memo(StyledGifts);
