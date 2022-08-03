import React from 'react';
import styled from 'styled-components';
import Fonts from './Fonts';

const ITEMS = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
];

function Housing({ className }) {
  return (
    <section id="#/housing" className={className}>
      <h3>Hospedaje</h3>
      <div className="housing">
        {ITEMS.map(({ id }) => (
          <div key={id} className="item" />
        ))}
      </div>
    </section>
  );
}

const StyledHousing = styled(Housing)`
  margin: 1rem;
  text-align: center;
  .housing {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .item {
    height: 250px;
    width: 250px;
    background: gray;
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${Fonts.subtitle};
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export default StyledHousing;
