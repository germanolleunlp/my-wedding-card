import React from 'react';
import styled from 'styled-components';
import Sizes from './Sizes';
import { largeBreakpoint } from './Breakpoints';

function CardBox({ className, img, title, description, inverted = false }) {
  const content = [
    <div
      key="img"
      className="img"
      style={{ backgroundImage: `url(${img})` }}
    />,
    <div key="desc" className="desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ];

  return (
    <div className={className}>
      {((inverted && content.reverse()) || content).map(item => item)}
    </div>
  );
}

const StyledCardBox = styled(CardBox)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;
  padding: 0 15px;
  .img {
    height: 455px;
    background-size: cover;
    background-position: center center;
  }
  .desc {
    padding: 50px;
    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    p {
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.8em;
    }
  }
  ${largeBreakpoint(`
    flex-direction: row;
    width: ${Sizes.screenLargeMax}px;
    margin: 0 auto;
    .img, .desc {
      width: 50%;
    }
  `)}
`;

export default React.memo(StyledCardBox);
