import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Fonts from './Fonts';

function Phones({ className }) {
  return (
    <section id="#/help" className={className}>
      <h3>Telefonos</h3>
      <p>
        Te dejamos algunos telefonos de taxis y remises para que disfrutes al
        maximo.
      </p>
      <div className="boxes">
        <div className="box">
          <h4 className="title">
            <FontAwesomeIcon icon={solid('taxi')} />
            Taxis
          </h4>
          <ul>
            <li>
              Radio Taxi - <a href="tel:03414556666">(0341) 455-6666</a> /{' '}
              <a href="tel:03414382222">(0341) 438-2222</a>
            </li>
            <li>
              Taxi Rosario - <a href="tel:03414566666">(0341) 456-6666</a> /{' '}
              <a href="tel:03414566639">(0341) 456-6639</a>
            </li>
            <li>
              Fono Taxi - <a href="tel:03414815738">(0341) 481-5738</a> /{' '}
              <a href="tel:03414823098">(0341) 482-3098</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h4 className="title">
            <FontAwesomeIcon icon={solid('car')} />
            Remises
          </h4>
          <ul>
            <li>
              Aguila Real - <a href="tel:03414351000">(0341) 435-1000</a> /{' '}
              <a href="tel:03414351103">(0341) 435-1103</a>
            </li>
            <li>
              Primera Clase - <a href="tel:03414424300">(0341) 442-4300</a> /{' '}
              <a href="tel:03414437555">(0341) 443-7555</a>
            </li>
            <li>
              Full Car ́s Remis - <a href="tel:03414533061">(0341) 453-3061</a> /{' '}
              <a href="tel:03414535050">(0341) 453-5050</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h4 className="title">
            <FontAwesomeIcon icon={solid('mobile-screen-button')} />
            Aplicaciones
          </h4>
          <ul>
            <li>
              <a
                href="https://shetaxi.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                She Taxi
              </a>
            </li>
            <li>
              <a
                href="https://www.movitaxi.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Movi Taxi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const StyledPhones = styled(Phones)`
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
  .location {
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    font-family: ${Fonts.subtitle};
  }
`;

export default StyledPhones;
