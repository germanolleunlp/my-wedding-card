import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Colors from './Colors';
import Images from './Images';
import Fonts from './Fonts';
import { smallBreakpoint, mediumBreakpoint } from './Breakpoints';

function NamesBox({ className }) {
  return (
    <section id="#/us" className={className}>
      <h2 className="names">
        Caro &amp;
        <br />
        Ger
      </h2>
      <div className="welcome">
        <h3>Bienvenidos</h3>
        <FontAwesomeIcon icon={solid('grip-lines-vertical')} />
        <p>
          El 19.02.22 será un día muy importante para nosotros, celebrar tantos
          <br />
          años de amor no sería lo mismo sin ustedes. Los esperamos para
          <br />
          festejar juntos nuestra historia, gracias por ser parte.
        </p>
      </div>
    </section>
  );
}

const StyledNamesBox = styled(NamesBox)`
  background-color: ${Colors.white};
  padding: 20px 0;
  .names {
    margin: 0;
    text-align: center;
    background-image: url(${Images.hero1});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    font-size: 300px;
    font-weight: bold;
    line-height: 270px;
    text-transform: uppercase;
    ${mediumBreakpoint(`
      font-size: 250px;
      line-height: 220px;
    `)}
    ${smallBreakpoint(`
      font-size: 200px;
      line-height: 170px;
    `)}
  }
  .welcome {
    text-align: center;
    margin 0 1rem;
    h3 {
      font-family: ${Fonts.subtitle};
      font-size: 1.2rem;
      letter-spacing: 4px;
      margin: 0 0 2rem;
    }
    svg {
      font-size: 1.5rem;
    }
    p {
      font-family: ${Fonts.text};
      font-size: 1rem;
      margin: 1rem 0;
    }
  }
`;

export default React.memo(StyledNamesBox);