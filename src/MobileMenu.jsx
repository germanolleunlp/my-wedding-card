import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import MenuItems from './MenuItems';
import Sizes from './Sizes';

function MobileMenu({ className }) {
  const closeMenu = () => {
    const overlay = document.getElementsByClassName('bm-menu-overlay')[0];
    overlay?.click();
  };

  return (
    <div className={className}>
      <Menu
        burgerButtonClassName="bm-menu-btn"
        overlayClassName="bm-menu-overlay"
      >
        {MenuItems.map(item => (
          <Link key={item.href} to={item.href} onClick={closeMenu}>
            {item.text}
          </Link>
        ))}
      </Menu>
    </div>
  );
}

const StyledMobileMenu = styled(MobileMenu)`
  .bm-menu-btn {
    position: fixed;
    width: 36px;
    height: 30px;
    top: 20px;
    left: 20px;
    &::before {
      content: ' ';
      position: fixed;
      top: -15px;
      left: -5px;
      height: ${Sizes.menu + 15}px;
      width: ${Sizes.menu + 15}px;
      background: ${({ theme }) => theme.colors.backgroundAlphaTwo};
    }
  }
  .bm-burger-bars {
    background: ${({ theme }) => theme.colors.text};
  }
  .bm-menu-wrap {
    background: ${({ theme }) => theme.colors.backgroundTwo};
  }
  .bm-item {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    outline: none;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.textInverted};
      background: ${({ theme }) => theme.colors.backgroundOneInverted};
    }
  }
`;

export default StyledMobileMenu;
