import React from 'react';
import styled from 'styled-components';
import Fonts from './Fonts';

function Confirm({ className }) {
  return (
    <section id="#/confirm" className={className}>
      <h3>Confirma Tu Asistencia</h3>
      <a
        target="_blank"
        href="https://forms.gle/R7jJkZYRp1x5TQDi6"
        rel="noreferrer"
      >
        Confirmar Asistencia
      </a>
    </section>
  );
}

const StyledConfirm = styled(Confirm)`
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
  a {
    display: inline-block;
    font-family: ${Fonts.subtitle};
    color: ${({ theme }) => theme.colors.textInverted};
    background: ${({ theme }) => theme.colors.backgroundOneInverted};
    text-decoration: none;
    padding: 1rem;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export default StyledConfirm;
