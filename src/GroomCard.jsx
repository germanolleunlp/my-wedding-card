import React from 'react';
import Images from './Images';
import CardBox from './CardBox';

function GroomCard() {
  return (
    <CardBox
      img={Images.cruceroBlanco1}
      title="THE GROOM"
      description="Hi I am suntina, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    />
  );
}

export default React.memo(GroomCard);
