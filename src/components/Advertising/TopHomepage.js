import React from 'react';
import { useDfpSlot } from '../useDfpSlot';

const TopHomepage = () => {
  useDfpSlot({
    path: `/267424269/dd-homepageTop-desktop`,
    size: [970, 90],
    id: 'div-gpt-ad-1624025481226-0',
  });
  return (
    <div style={{height: '90px'}}>
      {/* <p className="text-center text-sm -mb-2">Anuncio</p> */}
      <div
        id="div-gpt-ad-1624025481226-0"
        style={{ width: '100%', height: '90px', maxWidth: '970px' }}
      />
    </div>
  );
};

export default TopHomepage;
