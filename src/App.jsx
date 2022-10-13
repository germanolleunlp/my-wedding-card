import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import party from 'party-js';
import { light, dark } from './themes';
import useImages from './useImages';
import useFonts from './useFonts';
import useSize from './useSize';
import Fonts from './Fonts';
import Sizes from './Sizes';
import Loader from './Loader';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import Home from './Home';
import Phones from './Phones';
import Driving from './Driving';
import Housing from './Housing';
import DriveRoot from './DriveRoot';
import ThemeButton from './ThemeButton';

function App({ className }) {
  useFonts();
  const loading = useImages();
  const isMediumSize = useSize(Sizes.screenMediumMax);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      party.confetti(event);
    });
  }, []);

  const paddingTop = isMediumSize ? 0 : Sizes.menu;

  const toggleTheme = () => {
    if (theme.name === dark.name) {
      setTheme(light);
      return;
    }

    setTheme(dark);
  };

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div
          className={className}
          style={{ paddingTop, backgroundColor: theme.colors.backgroundOne }}
        >
          <Loader show={loading}>
            {isMediumSize ? <MobileMenu /> : <Menu />}
            <Routes>
              <Route path="/phones" element={<Phones />} />
              <Route path="/driving" element={<Driving />} />
              <Route path="/housing" element={<Housing />} />
              <Route path="/fotos" element={<DriveRoot />} />
              <Route path="*" element={<Home theme={theme} />} />
            </Routes>
            <ThemeButton theme={theme} onClick={toggleTheme} />
          </Loader>
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

const StyledApp = styled(App)`
  display: block;
  min-width: ${Sizes.screenSmallMax}px;
  font-family: ${Fonts.primary};
`;

export default StyledApp;
