import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import CardBox from './CardBox';

function Us({ className }) {
  return (
    <section className={className}>
      <CardBox img={Images.groom} key="groom" title="El novio" />
      <CardBox img={Images.bride} key="bride" title="La novia" inverted />
    </section>
  );
}

const StyledUs = styled(Us)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  > * {
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 1;
  }
`;

export default StyledUs;
