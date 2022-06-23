import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { light, dark } from './themes';
import Colors from './Colors';

const { white, black } = Colors;

function ThemeButton({ className, onClick, theme }) {
  const sun = solid('sun');
  const moon = solid('moon');
  const icon = theme.name === light.name ? moon : sun;

  return (
    <button className={className} type="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

const StyledThemeButton = styled(ThemeButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background: ${({ theme }) => (theme.name === dark.name ? white : black)};
  color: ${({ theme }) => (theme.name === dark.name ? black : white)};
  border: none;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
`;

export default React.memo(StyledThemeButton);
