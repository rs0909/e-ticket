import React from 'react';

import Header from '@/components/layout/Header';
import EventTable from '@/components/pages/myevent/EventTable';
import ProfileNavbar from '@/components/pages/myprofile/ProfileNavbar';

import { EventType } from '@/pages/myevent';
import { UserType } from '@/pages/myprofile';

function EventComponent({
  events,
  users,
}: {
  events: EventType[];
  users: UserType;
}) {
  return (
    <div className='flex h-full w-full flex-col items-center overflow-scroll'>
      <Header className='top-0 h-16 w-full bg-blue-300 bg-opacity-[0.35]' />
      <ProfileNavbar className='absolute left-1 top-16 h-screen w-32 flex-col items-center rounded-lg bg-white text-white shadow-md' />
      <div className=' absolute left-32 top-16 w-screen border border-gray-200 bg-white'>
        <EventTable events={events} users={users} />
      </div>
    </div>
  );
}

export default EventComponent;
