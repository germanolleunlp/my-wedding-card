import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import Loader from './Loader';
import Passwords from './Passwords';
import Colors from './Colors';

function GameBox({ className }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_WS_SERVER_URL);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className={className}>
      <Loader show={!socket}>
        <Passwords socket={socket} />
      </Loader>
    </div>
  );
}

const StyledGameBox = styled(GameBox)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.black};
`;

export default StyledGameBox;
