import React from 'react';
import { useDfpSlot } from './useDfpSlot';

const Ad = ({ adUnit }) => {
  useDfpSlot({
    path: `/267424269/${adUnit}`,
    size: [300, 250],
    id: 'div-gpt-ad-1622514703529-0',
  });
  return (
    <div
      id="div-gpt-ad-1622514703529-0"
      style={{ width: '300px', height: '250px' }}
    />
  );
};

export default Ad;
