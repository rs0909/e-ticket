import React from 'react';

import clsxm from '@/lib/clsxm';

export interface HomeFooterProps {
  className?: string;
}

function HomeFooter({ className }: HomeFooterProps = {}) {
  return (
    <div className={clsxm('mt-10 flex justify-center', className)}>
      <div className='flex w-full max-w-[1200px] items-start justify-between gap-6'>
        <div className='gap- flex flex-1 flex-col items-center justify-start text-center text-white'>
          <h4>Find the perfect ticket</h4>
          <p className='mt-4 max-w-full text-sm'>
            Search over 4,000,000 tickets to popular concert, sport, theatre and
            festival events in over 50 countries.
          </p>
        </div>
        <div className='flex flex-1 flex-col items-center justify-start text-center text-white'>
          <h4>Find the perfect ticket</h4>
          <p className='mt-4 max-w-full text-sm'>
            We deliver to any country around the world, including yours.
          </p>
        </div>
        <div className='flex flex-1 flex-col items-center justify-start text-center text-white'>
          <h4>Find the perfect ticket</h4>
          <p className='mt-4 max-w-full text-sm'>
            Join millions of happy customers that have attended their favourite
            events, thanks to viagogo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
