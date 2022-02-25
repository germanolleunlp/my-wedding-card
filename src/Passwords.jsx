import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Colors from './Colors';

function Passwords({ className, socket }) {
  const [passwords, setPasswords] = useState({});
  const [message, setMessage] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    socket.on('passwords', setPasswords);
    socket.on('invalid_password', setMessage);
    socket.on('accepted_password', setMessage);
    return () => {
      socket.off('passwords', setPasswords);
      socket.off('invalid_password', setMessage);
      socket.off('accepted_password', setMessage);
    };
  }, [socket]);

  const onSubmit = () => {
    const password = inputRef?.current?.value?.trim();
    if (password) {
      socket.emit('add_password', password);
    }
  };

  return (
    <div className={className}>
      <h2>Passwords</h2>
      {!!message && <h4>{message}</h4>}
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="password" />
        <button type="submit">send</button>
      </form>
      <ul className="passwords">
        {Object.keys(passwords).map(password => {
          const state = passwords[password];
          return (
            <li className={`password ${state}`} key={password}>
              {password}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const StyledPasswords = styled(Passwords)`
  width: 100%;
  padding: 0 2rem;
  .passwords {
    display: flex;
    flex-flow: wrap;
    padding: 0;
  }
  .password {
    padding: 10px;
    margin: 10px;
    background: ${Colors.lightgray};
    border: 1px solid ${Colors.gray};
    list-style: none;
    &.accepted {
      background: ${Colors.accepted};
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default React.memo(StyledPasswords);
