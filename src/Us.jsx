import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import CardBox from './CardBox';

function Us({ className }) {
  return (
    <section className={className}>
      <CardBox img={Images.terraza1} key="groom" title="El novio" />
      <CardBox img={Images.fiesta1} key="bride" title="La novia" inverted />
    </section>
  );
}

const StyledUs = styled(Us)`
  display: flex;
  gap: 1em;
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export default StyledUs;
