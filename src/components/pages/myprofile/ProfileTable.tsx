import React from 'react';

import { UserType } from '@/pages/myprofile';

// const dummyUser = {
//   id: '0',
//   password: '1',
//   username: 'shinrs',
//   email: '@gmail.com',
//   name: 'rimsoo',
//   first_name: 'shin',
//   last_name: 'rimsoo',
//   birthdate: '0909',
//   phone_number: '01088',
// };

function ProfileTable({ users }: { users: UserType }) {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div
          className='rounded-lg bg-white p-6 shadow-lg'
          style={{ width: '500px' }}
        >
          <div className='mb-4 flex justify-between'>
            <h1 className='text-2xl font-bold'>Profile</h1>
            <a
              href='/myprofile/editprofile'
              className='text-blue-500 hover:underline'
            >
              Edit Profile
            </a>
          </div>
          <div>
            <div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Username
                </label>
                <p className='text-lg'>{users.username}</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Name
                </label>
                <p className='text-lg'>{users.name}</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  First Name
                </label>
                <p className='text-lg'>{users.first_name}</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Last Name
                </label>
                <p className='text-lg'>{users.last_name}</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Birth Date
                </label>
                <p className='text-lg'>{users.birthdate}</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Password
                </label>
                <p className='text-lg'>********</p>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Phone Number
                </label>
                <p className='text-lg'>{users.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTable;
