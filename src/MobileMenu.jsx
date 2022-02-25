import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import MenuItems from './MenuItems';
import Colors from './Colors';
import Sizes from './Sizes';

function MobileMenu({ className }) {
  return (
    <div className={className}>
      <Menu burgerButtonClassName="bm-menu-btn">
        {MenuItems.map(item => (
          <Link key={item.href} to={item.href}>
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
      background: rgba(255, 255, 255, 0.4);
    }
  }
  .bm-burger-bars {
    background: ${Colors.darkgray2};
  }
  .bm-menu-wrap {
    background: ${Colors.gray};
  }
  .bm-item {
    padding: 1rem;
    color: ${Colors.darkgray};
    border: none;
    outline: none;
    &:hover,
    &:focus {
      color: ${Colors.lightgray2};
      background: ${Colors.darkgray};
    }
  }
`;

export default React.memo(StyledMobileMenu);
