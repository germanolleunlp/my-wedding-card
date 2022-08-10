import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Images from './Images';
import Fonts from './Fonts';
import Colors from './Colors';
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
        <FontAwesomeIcon icon={solid('grip-lines-vertical')} />
        <p>
          El 08.10.22 será un día muy importante para nosotros, celebrar tantos
          años de amor no sería lo mismo sin ustedes.
          <br />
          <br />
          Los esperamos para festejar juntos nuestra historia, gracias por ser
          parte.
        </p>
        <a
          className="link"
          target="_blank"
          href="https://forms.gle/R7jJkZYRp1x5TQDi6"
          rel="noreferrer"
        >
          Confirma tu asistencia
        </a>
      </div>
    </section>
  );
}

const StyledNamesBox = styled(NamesBox)`
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  padding: 20px 0;
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
  .link {
    display: inline-block;
    color: ${Colors.white};
    background: ${Colors.black};
    text-decoration: none;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 4px;
    font-size: 1.5rem;
  }
`;

export default StyledNamesBox;
