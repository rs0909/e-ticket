import React from 'react';

import TicketComponent from '@/components/pages/myticket/TicketComponent';

export interface DetailTicketType {
  event: string;
  price: string;
}

export interface TicketType {
  price: number;
  ticket: DetailTicketType;
  updated_at: string;
  created_at: string;
  id: string;
}

function TicketPage({ tickets }: { tickets: TicketType[] }) {
  return (
    <div className='w-screen'>
      <TicketComponent tickets={tickets} />
    </div>
  );
}

export default TicketPage;

export async function getServerSideProps() {
  const users = await fetch('http://localhost:8000/api/users/me/', {
    headers: {
      Authorization: `Token 56b97a5cf0f232019179a81bcef0b588358379e5`,
      // Other headers if needed
    },
  });

  const usersData = await users.json();
  const userId = usersData.id;

  const tickets = await fetch(
    `http://localhost:8000/api/payment/user/payments/${userId}/`
  ); //URL have to be user ticket
  const ticketData = await tickets.json();
  if (!ticketData) {
    return {
      notFound: true,
    };
  }

  console.log('Ticket data is ', ticketData);

  return {
    props: { tickets: ticketData },
  };
}
