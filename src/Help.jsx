import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Fonts from './Fonts';

function Help({ className }) {
  return (
    <section id="#/help" className={className}>
      <h3>Informacion Util</h3>
      <div className="boxes">
        <Link to="/driving" className="box">
          <h4>
            <FontAwesomeIcon icon={solid('location-dot')} />
            Como llegar
          </h4>
        </Link>
        <Link to="/phones" className="box">
          <h4>
            <FontAwesomeIcon icon={solid('taxi')} />
            Taxis / Remises
          </h4>
        </Link>
        <Link to="/housing" className="box">
          <h4>
            <FontAwesomeIcon icon={solid('hotel')} />
            Hospedaje
          </h4>
        </Link>
      </div>
    </section>
  );
}

const StyledHelp = styled(Help)`
  text-align: center;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${Fonts.subtitle};
    font-size: 1.5rem;
    margin: 1rem;
    text-align: center;
  }
  h4 {
    font-family: ${Fonts.subtitle};
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-family: ${Fonts.subtitle};
    margin: 0;
  }
  a {
    color: inherit;
  }
  svg {
    margin-right: 1rem;
  }
  .boxes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 350px;
    color: ${({ theme }) => theme.colors.textInverted};
    background: ${({ theme }) => theme.colors.backgroundOneInverted};
    word-break: break-all;
    border-radius: 4px;
  }
`;

export default StyledHelp;
