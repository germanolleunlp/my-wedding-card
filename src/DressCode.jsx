import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit';
import Images from './Images';
import Colors from './Colors';
import Fonts from './Fonts';

const OUTFITS = [
  {
    key: 'w2',
    imgSrc: Images.dressCodeWomen2,
    content: (
      <ul>
        <li>Vestidos de Noche</li>
        <li>Tacos</li>
      </ul>
    )
  },
  {
    key: 'm1',
    imgSrc: Images.dressCodeMan1,
    content: (
      <ul>
        <li>Smoking Negro</li>
        <li>Moño</li>
        <li>Zapatos Formales</li>
      </ul>
    )
  },
  {
    key: 'w1',
    imgSrc: Images.dressCodeWomen1,
    content: (
      <ul>
        <li>Mono Elegante</li>
        <li>Tacos</li>
      </ul>
    )
  },
  {
    key: 'm2',
    imgSrc: Images.dressCodeMan2,
    content: (
      <ul>
        <li>Traje Oscuro</li>
        <li>Corbata</li>
        <li>Zapatos Formales</li>
      </ul>
    )
  }
];

function DressCode({ className }) {
  return (
    <section id="#/dresscode" className={className}>
      <h3>Dress Code</h3>
      <div className="outfits">
        {OUTFITS.map(({ key, imgSrc, content }) => (
          <Outfit key={key} alt={key} imgSrc={imgSrc}>
            {content}
          </Outfit>
        ))}
      </div>
    </section>
  );
}

const StyledDressCode = styled(DressCode)`
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 350px;
  h3 {
    color: ${Colors.black};
    font-family: ${Fonts.subtitle};
    font-size: 2rem;
    margin: 1rem;
  }
  .outfits {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }
`;

export default React.memo(StyledDressCode);
