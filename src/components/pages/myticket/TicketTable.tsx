import React from 'react';

import { TicketType } from '@/pages/myticket';

function TicketTable({ tickets }: { tickets: TicketType[] }) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Event
            </th>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Ticket Price
            </th>
            <th className='px-4 py-2 text-left font-semibold text-gray-600'>
              Date
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {/* Loop over the ticket data and generate table rows */}
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className='px-4 py-3'>{ticket.ticket.event}</td>
              <td className='px-4 py-3'>{ticket.ticket.price}</td>
              <td className='px-4 py-3'>{ticket.created_at}</td>
              {/* <td className='px-4 py-3'>{ticket.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketTable;
