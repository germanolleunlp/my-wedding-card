import { keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate3d(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0.95, 0.95, 0.95);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export default { rotating, pulse, fadeIn, fadeInUp, slideInUp };
