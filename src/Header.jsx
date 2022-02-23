import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import { onlyLargeBreakpoint } from './Breakpoints';

const ITEMS = [
  { href: '/home', text: 'Inicio' },
  { href: '/couple', text: 'Pareja' },
  { href: '/story', text: 'Historia' },
  { href: '/events', text: 'Eventos' },
  { href: '/people', text: 'Gente' },
  { href: '/gallery', text: 'Galeria' },
  { href: '/rsvp', text: 'Confirmacion' }
];

function Header({ className }) {
  return (
    <header className={className}>
      <ul>
        {ITEMS.map(item => (
          <li key={item.href}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  background-color: ${Colors.white};
  margin-bottom: 20px;
  border-bottom: 1px solid ${Colors.lightgray};
  ul {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  li > a {
    display: block;
    font-weight: 600;
    color: ${Colors.darkgray};
    padding: 35px 17px;
    text-transform: uppercase;
    transition: all 0.5s;
    &:hover,
    &:focus {
      color: ${Colors.primary};
    }
  }
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${Colors.lightgray};
    position: absolute;
    bottom: 2px;
  }
  ${onlyLargeBreakpoint(`
    ul {
      width: ${Sizes.screenLargeMax}px;
    }
  `)}
`;

export default React.memo(StyledHeader);
