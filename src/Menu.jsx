import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sizes from './Sizes';
import Fonts from './Fonts';
import { largeBreakpoint } from './Breakpoints';
import MenuItems from './MenuItems';

function Menu({ className }) {
  return (
    <header className={className}>
      <ul>
        {MenuItems.map(item => (
          <li key={item.href}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

const StyledMenu = styled(Menu)`
  position: fixed;
  width: 100%;
  height: ${Sizes.menu}px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundOne};
  font-size: 0.75rem;
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
    color: ${({ theme }) => theme.colors.text};
    padding: 15px 17px;
    margin: 10px 0;
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    transition: all 0.5s;
    &:hover,
    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.text};
    }
  }
  ${largeBreakpoint(`
    ul {
      width: ${Sizes.screenLargeMax}px;
    }
  `)}
`;

export default StyledMenu;
