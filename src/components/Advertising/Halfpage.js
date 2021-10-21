import React from 'react';
import { useDfpSlot } from '../useDfpSlot';

const Halfpage = () => {
  useDfpSlot({
    path: `/267424269/dd-halfpage`,
    size: [300, 600],
    id: 'div-gpt-ad-1622582140405-0',
  });
  return (
    <div>
      {/* <p className="text-center text-sm -mb-2">Anuncio</p> */}
      <div
        id="div-gpt-ad-1622582140405-0"
        style={{ width: '100%', height: '600px' }}
      />
    </div>
  );
};

export default Halfpage;
