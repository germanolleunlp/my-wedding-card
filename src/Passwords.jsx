import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Password from './Password';
import PasswordForm from './PasswordForm';

function Passwords({ className, socket }) {
  const [passwords, setPasswords] = useState({});

  useEffect(() => {
    socket.on('passwords', setPasswords);
    return () => {
      socket.off('passwords', setPasswords);
    };
  }, [socket]);

  return (
    <div className={className}>
      <PasswordForm socket={socket} />
      <ul className="passwords">
        {Object.keys(passwords).map(password => (
          <Password
            key={password}
            password={password}
            state={passwords[password]}
          />
        ))}
      </ul>
    </div>
  );
}

const StyledPasswords = styled(Passwords)`
  width: 100%;
  padding: 0 2rem;
  margin: auto;
  .passwords {
    display: flex;
    flex-flow: wrap;
    padding: 0;
  }
`;

export default React.memo(StyledPasswords);
