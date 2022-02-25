import React, { useEffect } from 'react';
import Sizes from './Sizes';

function InstagramFeed() {
  useEffect(window.iFrameResize, []);

  return (
    <div style={{ maxWidth: `${Sizes.screenLargeMax}px`, margin: '2rem auto' }}>
      <iframe
        title="#bodacaroger2022"
        style={{ border: 0, width: '100%', height: '100%' }}
        scrolling="no"
        src="https://embedsocial.com/facebook_album/pro_hashtag/e4705212c62211256be78997b8b3bac5ca545905"
      />
    </div>
  );
}

export default InstagramFeed;
