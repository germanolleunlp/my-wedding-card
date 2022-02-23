import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';

function Header({ className }) {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop);
      setFixed(true);
    };
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  return (
    <header className={className} fixed={fixed}>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#home">Pareja</a>
        </li>
        <li>
          <a href="#home">Historia</a>
        </li>
        <li>
          <a href="#home">Eventos</a>
        </li>
        <li>
          <a href="#home">Gente</a>
        </li>
        <li>
          <a href="#home">Galeria</a>
        </li>
        <li>
          <a href="#home">Confirmacion</a>
        </li>
      </ul>
    </header>
  );
}

const StyledHeader = styled(Header)`
  display: block;
  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  li > a {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: ${Colors.darkgray};
    padding: 35px 17px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s;
    &:hover,
    &:focus {
      color: ${Colors.primary};
    }
  }
`;

export default React.memo(StyledHeader);
