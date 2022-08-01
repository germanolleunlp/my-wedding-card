import React from 'react';
import styled from 'styled-components';

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

function Places({ className }) {
  return (
    <section id="#/housing" className={className}>
      {ITEMS.map(({ id }) => (
        <div key={id} className="item" />
      ))}
    </section>
  );
}

const StyledPlaces = styled(Places)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
  .item {
    height: 250px;
    width: 250px;
    background: gray;
  }
`;

export default React.memo(StyledPlaces);
