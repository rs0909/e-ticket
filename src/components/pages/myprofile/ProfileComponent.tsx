import React from 'react';

import Header from '@/components/layout/Header';
import ProfileNavbar from '@/components/pages/myprofile/ProfileNavbar';
import ProfileTable from '@/components/pages/myprofile/ProfileTable';

import { UserType } from '@/pages/myprofile';

function ProfileComponent({ users }: { users: UserType[] }) {
  return (
    <div className='flex h-full w-full flex-col items-center overflow-scroll'>
      <Header className='top-0 h-16 w-full bg-blue-300 bg-opacity-[0.35]' />
      <ProfileNavbar className='absolute left-1 top-20 h-screen w-32 flex-col items-center rounded-lg bg-white text-white shadow-md' />
      <div className=' h-screen w-screen flex-col border border-gray-200 bg-white'>
        <ProfileTable users={users} />
      </div>
    </div>
  );
}

export default ProfileComponent;
