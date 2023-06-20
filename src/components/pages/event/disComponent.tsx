import { useRouter } from 'next/router';
import React from 'react';

import Header from '@/components/layout/Header';

import { Event } from '@/pages/event';

function DisComponent({ events }: { events: Event }) {
  const router = useRouter();

  return (
    <div className='bg-linear flex h-screen w-full flex-col items-center'>
      <Header className='fixed top-0 h-16 w-full bg-blue-500 text-white' />
      <div className='container mx-auto mt-24 px-4 lg:px-8'>
        <div className='flex flex-wrap justify-center'>
          <div className='m-4 flex flex-col rounded-lg bg-white p-6 shadow-md lg:w-1/2'>
            <img
              src={getRandomImage().src}
              alt='event banner'
              className='h-auto w-full rounded-lg object-cover'
            />
            <h1 className='mt-4 text-2xl font-bold'>{events.title}</h1>
            <p className='text-lg text-gray-700'>Event Date: {events.date}</p>
            <p className='text-lg text-gray-700'>
              Event Director: {events.organizer}
            </p>
            <p className='text-md mt-2 font-semibold text-green-500'>
              Currently {events.remaining_capacity} Remaining
            </p>
            <div className='w-full rounded-md border-l-8 border-blue-600 bg-blue-400 bg-opacity-50 p-5'>
              <p>
                Currently {events.capacity - events.remaining_capacity} people
                already bought a ticket!
              </p>
            </div>
            <button
              className='mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600'
              onClick={() => {
                router.push(`/event/ticket/${events.id}`);
              }}
            >
              Purchase Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisComponent;

function getRandomImage() {
  return {
    src: srcs[Math.floor(Math.random() * srcs.length)],
    alt: 'random event image',
  };
}

const srcs = [
  'https://plus.unsplash.com/premium_photo-1674898512376-0b73f2bd2e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  'https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3340&q=80',
  'https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  'https://images.unsplash.com/photo-1570053381569-78f606b5caab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  'https://images.unsplash.com/photo-1636057679238-8eb78cb0d040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80',
];
