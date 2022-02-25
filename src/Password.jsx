import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

function Password({ className, password, state }) {
  return <li className={`${className} ${state}`}>{password}</li>;
}

const StyledPassword = styled(Password)`
  padding: 10px;
  margin: 10px;
  background: ${Colors.lightgray};
  border: 1px solid ${Colors.gray};
  list-style: none;
  &.accepted {
    background: ${Colors.neonLightBlue};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default React.memo(StyledPassword);
