import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Fonts from './Fonts';

function Transportation({ className }) {
  return (
    <section className={className}>
      <h3>Te dejamos informacion de Taxis y Remises</h3>
      <div className="boxes">
        <div className="box">
          <h2>
            <FontAwesomeIcon icon={solid('taxi')} />
            Taxis
          </h2>
          <ul>
            <li>Radio Taxi - (0341) 455-6666 / (0341) 438-2222</li>
            <li>Taxi Rosario - (0341) 456-6666 / (0341) 456-6639</li>
            <li>Fono Taxi - (0341) 481-5738 / (0341) 482-3098</li>
          </ul>
        </div>
        <div className="box">
          <h2>
            <FontAwesomeIcon icon={solid('car')} />
            Remises
          </h2>
          <ul>
            <li>Aguila Real - (0341) 435-1000 / (0341) 435-1103</li>
            <li>Primera Clase - (0341) 442-4300 / (0341) 443-7555</li>
            <li>Full Car ́s Remis - (0341) 453-3061 / (0341) 453-5050</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const StyledTransportation = styled(Transportation)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  .boxes {
    display: flex;
    flex-direction: column;
  }
  .box {
    text-align: center;
    margin-bottom: 2rem;
  }
  h3 {
    font-family: ${Fonts.secondary};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
  }
  h2 {
    font-family: ${Fonts.subtitle};
    font-size: 2rem;
    margin: 0 0 1rem;
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
  }
`;

export default StyledTransportation;
