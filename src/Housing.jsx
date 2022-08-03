import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Fonts from './Fonts';

function Housing({ className }) {
  return (
    <section id="#/help" className={className}>
      <h3>Hospedaje</h3>
      <p>Te dejamos opciones para hospedarte.</p>
      <div className="boxes">
        <div className="box">
          <h4 className="title">
            <FontAwesomeIcon icon={solid('hotel')} />
            Hoteles
          </h4>
          <ul>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/riviera-rosario.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Hotel Solans Riviera
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/urquiza-apart-suites.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Urquiza Apart Hotel & Suites
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/apart-alvear.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Apart Hotel Alvear
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/holiday-inn-express-rosario.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Holiday Inn Express
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/presidente-rosario.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Hotel Solans Presidente
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h4 className="title">
            <FontAwesomeIcon icon={solid('house')} />
            Departamentos
          </h4>
          <ul>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/monoambiente-super-moderno-a-estrenar.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Monoambiente super moderno a estrenar
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/dpto-con-piscina-a-mts-de-orono-centro-y-rio-para-2-0-3-personas.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Dpto con piscina en el Centro! A mts de Oroño y el Río! Para 2 0
                3 personas
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/departamento-1-dormitorio-a-200-mts-del-rio.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Departamento 1 dormitorio a 200 mts del río
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/balcarce-rio.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Balcarce Rio
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/catamarca-suites-land.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Catamarca Suites Land
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/9-de-julio-2200.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                9 de Julio 2200
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/catamarca-1673.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Catamarca Rio
              </a>
            </li>
            <li>
              <a
                href="https://www.booking.com/hotel/ar/departamento-fabuloso-4.es-ar.html"
                target="_blank"
                rel="noreferrer"
              >
                Departamento Fabuloso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const StyledHousing = styled(Housing)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  .boxes {
    display: flex;
    flex-direction: column;
  }
  .box {
    margin-bottom: 2rem;
  }
  .title {
    font-family: ${Fonts.secondary};
    font-size: 1.5rem;
    margin: 0 0 1rem;
    svg {
      margin-right: 0.5rem;
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${Fonts.subtitle};
    font-size: 1.5rem;
    margin: 1rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    color: ${({ theme }) => theme.colors.textInverted};
    background: ${({ theme }) => theme.colors.backgroundOneInverted};
    border-radius: 7px;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-family: ${Fonts.text};
    font-size: 1rem;
    a {
      color: inherit;
    }
  }
  p {
    font-family: ${Fonts.subtitle};
  }
`;

export default StyledHousing;
