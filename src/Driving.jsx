import React from 'react';
import styled from 'styled-components';
import Fonts from './Fonts';
import Sizes from './Sizes';
import { smallBreakpoint } from './Breakpoints';

function Driving({ className }) {
  return (
    <section id="#/driving" className={className}>
      <h3>Como llegar</h3>
      <p>
        Esta ubicado en AV. CARBALLO 178, o podes usar este link para saber como
        llegar:
        <a
          href="https://goo.gl/maps/pYf1XS3BTqnqLoqEA"
          target="_blank"
          rel="noreferrer"
        >
          https://goo.gl/maps/pYf1XS3BTqnqLoqEA
        </a>
      </p>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/nfHeeYEG-LE"
        title="Salones Puerto Norte"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}

const StyledDriving = styled(Driving)`
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  height: calc(100vh - ${Sizes.menu}px);
  padding-top: 1rem;
  ${smallBreakpoint(`
    height: 100vh;
  `)}
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${Fonts.subtitle};
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${Fonts.subtitle};
    word-break: break-all;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
    display: block;
    margin: 1rem;
  }
`;

export default StyledDriving;
