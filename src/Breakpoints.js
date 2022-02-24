import { css } from 'styled-components';
import Sizes from './Sizes';

export const smallBreakpoint = styles => css`
  @media (max-width: ${Sizes.screenMediumMax}px) {
    ${styles}
  }
`;

export const mediumBreakpoint = styles => css`
  @media (min-width: ${Sizes.screenMediumMax +
    1}px) and (max-width: ${Sizes.screenLargeMax}px) {
    ${styles}
  }
`;

export const smallAndMediumBreakpoint = styles => css`
  @media (max-width: ${Sizes.screenLargeMax}px) {
    ${styles}
  }
`;

export const largeBreakpoint = styles => css`
  @media (min-width: ${Sizes.screenLargeMax + 1}px) {
    ${styles}
  }
`;
