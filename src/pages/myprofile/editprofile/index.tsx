import React, { useState } from 'react';

import { UserType } from '@/pages/myprofile';

function EditProfilePage({ users }: { users: UserType }) {
  const [formData, setFormData] = useState({
    username: users?.username || '',
    name: users?.name || '',
    firstName: users?.first_name || '',
    lastName: users?.last_name || '',
    birthdate: users?.birthdate || '',
    phoneNumber: users?.phone_number || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to update the user's profile
    // You can make an API request or perform any necessary actions here
  };

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='rounded-lg bg-white p-6 shadow-lg'>
          <div className='mb-4 flex justify-between'>
            <h1 className='text-2xl font-bold'>Edit Profile</h1>
            <button
              type='submit'
              className='text-blue-500 hover:underline'
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Birth Date
                </label>
                <input
                  type='date'
                  name='birthdate'
                  value={formData.birthdate}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='text-sm font-semibold text-gray-600'>
                  Phone Number
                </label>
                <input
                  type='text'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className='text-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
