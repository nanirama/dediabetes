import React from 'react';
import { useDfpSlot } from '../useDfpSlot';

const TopBlogMob = () => {
  useDfpSlot({
    path: `/267424269/blogTopBannerMob`,
    size: [300, 250],
    id: 'div-gpt-ad-1622583729448-0',
  });
  return (
    <div>
    {/* <p className="text-center text-sm -mb-2">Anuncio</p> */}
    <div
      id="div-gpt-ad-1622583729448-0"
      style={{ width: '300px', height: '250px' }}
    />
    </div>
  );
};

export default TopBlogMob;
