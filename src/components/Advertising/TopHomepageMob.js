import React from 'react';
import { useDfpSlot } from '../useDfpSlot';

const TopHomepageMob = () => {
  useDfpSlot({
    path: `/267424269/dd-HPTopBanner-mobile`,
    size: [300, 250],
    id: 'div-gpt-ad-1624851422484-0',
  });
  return (
    <div>
    {/* <p className="text-center text-sm -mb-2">Anuncio</p> */}
    <div
      id="div-gpt-ad-1624851422484-0"
      style={{ width: '300px', height: '250px' }}
    />
    </div>
  );
};

export default TopHomepageMob;
