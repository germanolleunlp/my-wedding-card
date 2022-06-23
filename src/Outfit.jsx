import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ReactTooltip from 'react-tooltip';
import Fonts from './Fonts';

function Outfit({ className, imgSrc, alt, theme, children }) {
  return (
    <div className={className}>
      <img src={imgSrc} alt={alt} />
      <FontAwesomeIcon
        className="plus-icon"
        icon={solid('circle-plus')}
        data-for={alt}
        data-tip
      />
      <ReactTooltip id={alt} place="top" type={theme.name}>
        <div className="outfit-content">{children}</div>
      </ReactTooltip>
    </div>
  );
}

const StyledOutfit = styled(Outfit)`
  position: relative;
  margin: 0 1rem;
  .plus-icon {
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    right: 0;
    font-size: 25px;
    opacity: 0.5;
    transition: opacity 0.35s;
    color: ${({ theme }) => theme.colors.text};
    &:hover,
    &:focus {
      opacity: 1;
    }
  }
  .outfit-content > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
    li {
      margin: 5px 0;
      font-family: ${Fonts.secondary};
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
`;

export default React.memo(StyledOutfit);
