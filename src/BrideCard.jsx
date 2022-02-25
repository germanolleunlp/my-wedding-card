import React from 'react';
import Images from './Images';
import CardBox from './CardBox';

function BrideCard() {
  return (
    <CardBox
      img={Images.terraza1}
      title="THE BRIDE"
      description="Hi I am suntina, dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      inverted
    />
  );
}

export default React.memo(BrideCard);
