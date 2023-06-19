import React from 'react';

import Header from '@/components/layout/Header';
import ProfileNavbar from '@/components/pages/myprofile/ProfileNavbar';
import TicketTable from '@/components/pages/myticket/TicketTable';

import { TicketType } from '@/pages/myticket';

function TicketComponent({ tickets }: { tickets: TicketType[] }) {
  return (
    <div className='flex h-full w-full flex-col items-center overflow-scroll'>
      <Header className='top-0 h-16 w-full bg-blue-300 bg-opacity-[0.35]' />
      <ProfileNavbar className='absolute left-1 top-16 h-screen w-32 flex-col items-center rounded-lg bg-white text-white shadow-md' />
      <div className=' absolute left-32 top-16 w-screen border border-gray-200 bg-white'>
        <TicketTable tickets={tickets} />
      </div>
    </div>
  );
}

export default TicketComponent;
