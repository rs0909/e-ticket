import React from 'react';

import HomeComponent from '@/components/pages/home/HomeComponent';

export interface EventType {
  id: string;
  title: string;
  date: string;
  updated_at: string;
  created_at: string;
  location: string;
  capacity: number;
  remaining_capacity: number;
  organizer: number;
}

function HomePage({ events }: { events: EventType[] }) {
  return (
    <div className='w-screen'>
      <HomeComponent eventss={events} />
    </div>
  );
}

export default HomePage;

// server side rendering. For now, we don't need it.So, just example.
export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:8000/api/events/events');
  const data = await res.json();

  // const users = await fetch('http://localhost:8000/api/users');
  // const usersData = await users.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events: data },
  };
}
