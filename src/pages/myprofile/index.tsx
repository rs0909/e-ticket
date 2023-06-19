import React from 'react';

import ProfileComponent from '@/components/pages/myprofile/ProfileComponent';

export interface UserType {
  id: string;
  password: string;
  last_login: string;
  is_superuser: string;
  username: string;
  email: string;
  date_joined: string;
  name: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  phone_number: string;
  gender: string;
  is_admin: boolean;
  is_organizer: boolean;
}

function ProfilePage({ users }: { users: UserType }) {
  return (
    <div className='w-screen'>
      <ProfileComponent users={users} />
    </div>
  );
}

export default ProfilePage;

export async function getServerSideProps() {
  const users = await fetch('http://localhost:8000/api/users/me/', {
    headers: {
      Authorization: `Token 56b97a5cf0f232019179a81bcef0b588358379e5`,
      // Other headers if needed
    },
  });
  const usersData = await users.json();

  if (!usersData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: usersData },
  };
}
