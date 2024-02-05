import React from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

// Add the following polyfill
global.Buffer = global.Buffer || require('buffer').Buffer;

const Connect = () => {
  return (
    <div className='connect-btn'>
      <DynamicWidget/>
      {/* No button for manual signing since automatic signing is removed */}
    </div>
  );
};

export default Connect;
