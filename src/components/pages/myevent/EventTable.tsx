import React from 'react';

import { EventType } from '@/pages/myevent';
import { UserType } from '@/pages/myprofile';

function EventTable({
  events,
  users,
}: {
  events: EventType[];
  users: UserType;
}) {
  const filteredEvents = events.filter(
    (event) => event.organizer.id == users.id
  );

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Event
            </th>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Date
            </th>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Location
            </th>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Remaining Seats
            </th>
            {/* <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Event Organizer
            </th> */}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {/* Loop over the Event data and generate table rows */}
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td className='px-4 py-3'>{event.title}</td>
              <td className='px-4 py-3'>{event.date}</td>
              <td className='px-4 py-3'>{event.location}</td>
              <td className='px-4 py-3'>{event.remaining_capacity}</td>
              {/* <td className='px-4 py-3'>{event.organizer}</td> */}
              {/* <td className='px-4 py-3'>{event.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
