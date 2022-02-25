import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ReactiveButton from 'reactive-button';
import Colors from './Colors';

function PasswordForm({ className, socket }) {
  const [state, setState] = useState('idle');
  const inputRef = useRef();

  const onAcceptedPassword = () => {
    setState('success');
  };

  const onInvalidPassword = () => {
    setState('error');
  };

  useEffect(() => {
    socket.on('invalid_password', onInvalidPassword);
    socket.on('accepted_password', onAcceptedPassword);
    return () => {
      socket.off('invalid_password', onInvalidPassword);
      socket.off('accepted_password', onAcceptedPassword);
    };
  }, [socket]);

  const onSubmit = event => {
    event.preventDefault();
    const password = inputRef?.current?.value?.trim();
    if (password) {
      setState('loading');
      setTimeout(() => {
        socket.emit('add_password', password);
      }, 1500);
    }
  };

  const onClick = () => {
    inputRef?.current?.focus();
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="field" onClick={onClick} aria-hidden="true">
        <input
          ref={inputRef}
          className="password"
          type="password"
          name="password"
          onClick={onClick}
          required
        />
        <label htmlFor="password">
          <span>What&apos;s your password?</span>
        </label>
      </div>
      <ReactiveButton
        buttonState={state}
        color="teal"
        idleText="Submit"
        loadingText="Loading"
        successText="Success"
        errorText="Error"
        type="submit"
        size="large"
        messageDuration={2000}
        block={false}
        disabled={false}
        width="25%"
        outline
        rounded
        shadow
        animation
      />
    </form>
  );
}

const StyledPasswordForm = styled(PasswordForm)`
  width: 100%;
  text-align: center;
  margin: 0 5rem;
  .field {
    margin-bottom: 2rem;
    input,
    span,
    label {
      display: block;
      margin: 10px;
      padding: 5px;
      border: none;
      font-size: 22px;
    }
    input:focus {
      outline: 0;
    }
    input.password {
      font-size: 48px;
      font-weight: 300;
      border-radius: 2px;
      margin: 0;
      border: none;
      width: 100%;
      color: ${Colors.white};
      background: rgba(0, 0, 0, 0);
      transition: padding-top 0.2s ease, margin-top 0.2s ease;
      overflow-x: hidden;
    }
    input.password + label {
      display: block;
      position: relative;
      white-space: nowrap;
      padding: 0;
      margin: 0;
      width: 25%;
      border-top: 1px solid ${Colors.neonLightBlue};
      transition: width 0.4s ease;
      height: 0px;
    }
    input.password:focus + label {
      width: 100%;
    }
    input.password:focus,
    input.password:valid {
      padding-top: 35px;
    }
    input.password:focus + label > span,
    input.password:valid + label > span {
      top: -100px;
      font-size: 22px;
      color: ${Colors.white};
    }
    input.password + label > span {
      font-weight: 300;
      margin: 0;
      position: absolute;
      color: ${Colors.white};
      font-size: 48px;
      top: -66px;
      left: 0px;
      -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
      transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    }
  }
`;

export default React.memo(StyledPasswordForm);
