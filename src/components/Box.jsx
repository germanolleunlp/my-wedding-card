import React from 'react';
import styled from 'styled-components';

function Box({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StyledBox = styled(Box)`
  display: flex;
`;

export default StyledBox;
