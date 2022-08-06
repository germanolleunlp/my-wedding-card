import React from 'react';
import styled from 'styled-components';
import Images from './Images';
import CardBox from './CardBox';
import Sizes from './Sizes';

function Us({ className }) {
  return (
    <section className={className}>
      <div className="content">
        <CardBox img={Images.groom} key="groom" title="El novio" />
        <CardBox img={Images.bride} key="bride" title="La novia" inverted />
      </div>
    </section>
  );
}

const StyledUs = styled(Us)`
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  .content {
    display: flex;
    flex-wrap: wrap;
    max-width: ${Sizes.screenLargeMax}px;
    margin: 0 auto;
    > * {
      display: flex;
      align-items: end;
      justify-content: center;
      flex: 1;
    }
  }
`;

export default StyledUs;
