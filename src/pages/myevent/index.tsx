import React from 'react';

import EventComponent from '@/components/pages/myevent/EventComponent';

import { UserType } from '@/pages/myprofile';

export interface OrganizerType {
  id: string;
  name: string;
}

export interface EventType {
  id: string;
  title: string;
  date: string;
  updated_at: string;
  created_at: string;
  capacity: string;
  location: string;
  remaining_capacity: string;
  organizer: OrganizerType;
}

function EventPage({
  events,
  users,
}: {
  events: EventType[];
  users: UserType;
}) {
  return (
    <div className='w-screen'>
      <EventComponent events={events} users={users} />
    </div>
  );
}

export default EventPage;

export async function getServerSideProps() {
  const users = await fetch('http://localhost:8000/api/users/me/', {
    headers: {
      Authorization: `Token 56b97a5cf0f232019179a81bcef0b588358379e5`,
      // Other headers if needed
    },
  });
  const usersData = await users.json();

  const events = await fetch('http://localhost:8000/api/events/events/');
  const eventsData = await events.json();

  if (!eventsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events: eventsData, users: usersData },
  };
}
