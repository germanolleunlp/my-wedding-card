import React from 'react';
import styled from 'styled-components';
import PasswordForm from './PasswordForm';

function Passwords({ className, socket }) {
  return (
    <div className={className}>
      <PasswordForm socket={socket} />
    </div>
  );
}

const StyledPasswords = styled(Passwords)`
  width: 100%;
  padding: 0 2rem;
  margin: auto;
`;

export default React.memo(StyledPasswords);
