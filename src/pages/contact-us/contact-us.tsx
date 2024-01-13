import React, { Suspense } from 'react';
import { TestAsync } from 'shared';

export const ContactUs = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <TestAsync />
      </Suspense>
    </div>
  );
};
