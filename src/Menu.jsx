import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './Colors';
import Sizes from './Sizes';
import Fonts from './Fonts';
import { largeBreakpoint } from './Breakpoints';

const ITEMS = [
  { href: '/home', text: 'Inicio' },
  { href: '/couple', text: 'Pareja' },
  { href: '/story', text: 'Historia' },
  { href: '/events', text: 'Eventos' },
  { href: '/people', text: 'Gente' },
  { href: '/gallery', text: 'Galeria' },
  { href: '/rsvp', text: 'Confirmacion' }
];

function Menu({ className }) {
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

const StyledMenu = styled(Menu)`
  position: sticky;
  top: 0;
  background-color: ${Colors.black};
  z-index: 50;
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
    font-family: ${Fonts.secondary};
    letter-spacing: 1.5px;
    color: ${Colors.white};
    padding: 15px 17px;
    margin: 10px 0;
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    transition: all 0.5s;
    &:hover,
    &:focus {
      border-bottom-color: ${Colors.white};
    }
  }
  ${largeBreakpoint(`
    ul {
      width: ${Sizes.screenLargeMax}px;
    }
  `)}
`;

export default React.memo(StyledMenu);
