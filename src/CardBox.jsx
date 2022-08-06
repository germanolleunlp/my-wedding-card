import React from 'react';
import styled from 'styled-components';
import { largeBreakpoint } from './Breakpoints';
import Keyframes from './Keyframes';

function CardBox({ className, img, key, title = '', inverted = false }) {
  const prefix = inverted ? 'inverted' : 'normal';
  const words = title.split(' ').map((word, index) => (
    <span
      key={`${key}-word-${index + 1}`}
      className={`${prefix}-word-${index + 1}`}
    >
      {word}
    </span>
  ));

  return (
    <div className={className} style={{ backgroundImage: `url(${img})` }}>
      <h3 className="title">{words}</h3>
    </div>
  );
}

const StyledCardBox = styled(CardBox)`
  height: 320px;
  color: ${({ theme }) => theme.colors.text};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  .title {
    font-size: 4rem;
    letter-spacing: 1rem;
    text-align: center;
    margin: 0;
    > span {
      animation: ${Keyframes.colorAnimation} 4s linear infinite;
      &.normal-word-1 {
        --color-1: #df8453;
        --color-2: #3d8dae;
        --color-3: #e4a9a8;
      }
      &.normal-word-2 {
        --color-1: #dbad4a;
        --color-2: #accfcb;
        --color-3: #17494d;
      }
      &.inverted-word-1 {
        --color-1: #dbad4a;
        --color-2: #accfcb;
        --color-3: #17494d;
      }
      &.inverted-word-2 {
        --color-1: #df8453;
        --color-2: #3d8dae;
        --color-3: #e4a9a8;
      }
    }
  }
  ${largeBreakpoint(`
  height: 600px;
    .title {
      font-size: 10rem;
    }
  `)}
`;

export default React.memo(StyledCardBox);
