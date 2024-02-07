import React from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

// Add the following polyfill
global.Buffer = global.Buffer || require('buffer').Buffer;

const Connect = () => {
  return (
    <div className='connect-btn'>
      <DynamicWidget/>
    </div>
  );
};

export default Connect;
