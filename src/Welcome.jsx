import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Images from './Images';
import Fonts from './Fonts';
import { smallBreakpoint, mediumBreakpoint } from './Breakpoints';

function NamesBox({ className }) {
  return (
    <section id="#/us" className={className}>
      <h2
        className="names"
        style={{ backgroundAttachment: isMobile ? 'scroll' : 'fixed' }}
      >
        Caro
        <br />
        &amp; Ger
      </h2>
      <div className="welcome">
        <h3>Bienvenidos</h3>
        <FontAwesomeIcon icon={solid('grip-lines-vertical')} />
        <p>
          El 08.10.22 será un día muy importante para nosotros, celebrar tantos
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
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  padding: 20px 0;
  margin-bottom: 2rem;
  .names {
    margin: 0;
    text-align: center;
    background-image: url(${Images.welcome});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-clip: text;
    background-repeat: no-repeat;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 300px;
    line-height: 290px;
    ${mediumBreakpoint(`
      font-size: 220px;
      line-height: 210px;
    `)}
    ${smallBreakpoint(`
      font-size: 120px;
      line-height: 110px;
    `)}
  }
  .welcome {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 1rem;
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
