import { GetServerSideProps } from 'next/types';
import React, { useState } from 'react';

import Header from '@/components/layout/Header';

function TicketPurchase({ ticket }: { ticket: any }) {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  console.log(ticket);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
    // It's a good idea to validate the inputs and provide feedback
  };

  return (
    <div className='bg-linear flex h-screen items-center justify-center bg-gray-50'>
      <Header className='fixed top-0 h-16 w-full bg-blue-500 text-white' />

      <form
        className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='name'
          >
            Full Name
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='name'
            type='text'
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email'
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='card-number'
          >
            Card Number
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='card-number'
            type='text'
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='expiration-date'
          >
            Expiration Date
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='expiration-date'
            type='text'
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='cvv'
          >
            CVV
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='cvv'
            type='text'
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='submit'
          >
            Buy Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default TicketPurchase;

export const getServerSideProps: GetServerSideProps<{ ticket: any }> = async (
  context
) => {
  const id = context.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(`http://127.0.0.1:8000/api/ticket/event/${id}`);
  const data = await res.json();

  return {
    props: { ticket: data },
  };
};
