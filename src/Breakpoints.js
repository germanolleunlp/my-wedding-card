import { css } from 'styled-components';
import Sizes from './Sizes';

export const ipadAndMobileBreakpoint = styles => css`
  @media (max-width: ${Sizes.screenDesktopMax}px) {
    ${styles}
  }
`;

export const onlyDesktopBreakpoint = styles => css`
  @media (min-width: ${Sizes.screenDesktopMax + 1}px) {
    ${styles}
  }
`;
