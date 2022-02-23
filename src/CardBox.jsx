import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import { onlyDesktopBreakpoint } from './Breakpoints';

function CardBox({ className, img, title, description, inverted = false }) {
  const content = [
    <div className="img" style={{ 'background-image': `url(${img})` }} />,
    <div className="desc">
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
  color: ${Colors.darkgray2};
  margin: 0 auto 25px auto;
  padding: 0 15px;
  .img {
    height: 455px;
    background-size: cover;
    background-position: center center;
  }
  .desc {
    padding: 50px;
    background-color: ${Colors.lightgrayAlpha};
    p {
      color: ${Colors.darkgray};
      line-height: 1.8em;
    }
  }
  ${onlyDesktopBreakpoint(`
    flex-direction: row;
    width: ${Sizes.screenDesktopMax}px;
    margin: 0 auto;
    .img, .desc {
      width: 50%;
    }
  `)}
`;

export default React.memo(StyledCardBox);
