import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import Card from '@/components/Card';
import Header from '@/components/layout/Header';
import SearchBar from '@/components/layout/SearchBar';
import HomeFooter from '@/components/pages/home/HomeFooter';
import TicketTypes from '@/components/pages/home/TicketTypes';

import banner from '@/assets/banner2.jpeg';
import { EventType } from '@/pages/home';

export interface PropType {
  eventss: EventType[];
}

function HomeComponent({ eventss }: { eventss: EventType[] }) {
  const [search, setSearch] = React.useState('');
  const [events, setEvents] = React.useState<EventType[]>(eventss);

  React.useEffect(() => {
    setEvents(eventss);
  }, [eventss]);

  React.useEffect(() => {
    const filteredEvents = eventss?.filter((event) => {
      return event.title.toLowerCase().includes(search.toLowerCase());
    });
    setEvents(filteredEvents);
  }, [eventss, search]);

  const router = useRouter();
  return (
    <div className='flex h-full w-full flex-col items-center overflow-scroll scroll-smooth'>
      <Header className='fixed top-0 h-16 w-full bg-blue-300 bg-opacity-[0.35]' />
      {/* the Following parts includes main page banner and search bar  */}
      <div
        className='relative flex h-[600px] w-full flex-col items-center  justify-start overflow-hidden'
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <Image
          src={banner}
          alt='banner'
          layout='fill'
          objectFit='cover'
          className='absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-cover bg-bottom'
        />
        <div className='z-10 mt-20 max-w-[1200px] overflow-hidden'>
          <TicketTypes
            className='z-10 mt-24'
            types={[
              { 'Concert Tickets': '#concerts' },
              {
                'Sport Tickets': '#sports',
              },
              {
                'Theater Tickets': '#theater',
              },
              {
                'Festival Tickets': '#festivals',
              },
            ]}
          />
          <SearchBar className='mt-10' search={search} setSearch={setSearch} />
        </div>
      </div>
      {/* This part included top events */}
      {search !== '' ? (
        <div className='flex w-full max-w-[1200px] flex-col items-center justify-start gap-6'>
          <p className='mt-8 text-center text-2xl'>
            Showing {events.length} results for `{search}`
          </p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {events?.slice(0, 20).map((event, index) => (
              <Card
                key={index}
                className='shadow'
                title={event.title}
                src={getRandomImage()}
                isTop={true}
                onClick={() => {
                  router.push(`/event/${event.id}`);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='flex w-full max-w-[1200px] flex-col items-center justify-start gap-6'>
          <p className='mt-8 text-center text-2xl'>Top Events</p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {eventss?.slice(0, 20).map((event, index) => (
              <Card
                key={index}
                className='shadow'
                title={event.title}
                src={getRandomImage()}
                isTop={true}
                onClick={() => {
                  router.push(`/event/${event.id}`);
                }}
              />
            ))}
          </div>

          {/* This part included events in korea */}
          <p className='mt-8 text-center text-xl' id='concerts'>
            Concerts in South Korea
          </p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {eventss?.slice(20, 40).map((src, index) => (
              <Card
                key={index}
                className='shadow'
                title={src.title}
                // description={src.description}
                src={getRandomImage()}
                isTop={false}
                onClick={() => {
                  router.push(`/event/${src.id}`);
                }}
              />
            ))}
          </div>

          {/* This part includes top international events */}
          <p className='mt-8 text-center text-xl' id='festivals'>
            Festivals in South Korea
          </p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {eventss?.slice(40, 60).map((src, index) => (
              <Card
                key={index}
                className='shadow'
                title={src.title}
                src={getRandomImage()}
                isTop={false}
                onClick={() => {
                  router.push(`/event/${src.id}`);
                }}
              />
            ))}
          </div>

          <p className='mt-8 text-center text-xl' id='sports'>
            Sports Events in South Korea
          </p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {eventss?.slice(60, 80).map((src, index) => (
              <Card
                key={index}
                className='shadow'
                title={src.title}
                src={getRandomImage()}
                isTop={false}
                onClick={() => {
                  router.push(`/event/${src.id}`);
                }}
              />
            ))}
          </div>
          <p className='mt-8 text-center text-xl' id='theater'>
            Theater Events in South Korea
          </p>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-4'>
            {eventss?.slice(60, 100).map((src, index) => (
              <Card
                key={index}
                className='shadow'
                title={src.title}
                src={getRandomImage()}
                isTop={false}
                onClick={() => {
                  router.push(`/event/${src.id}`);
                }}
              />
            ))}
          </div>
        </div>
      )}
      {/* This is a footer */}
      <HomeFooter className='mt-10 h-[200px] w-full bg-[#A3D165] p-5' />

      {/* This part asks user for email */}
      <div className='flex h-[200px] w-full max-w-[1200px] items-center justify-between'>
        <p className='text-3xl'>Stay Up to Date</p>
        <div className='flex items-center justify-start'>
          <input
            type='text'
            placeholder='Email Address'
            className='flex h-14 w-[400px] items-center justify-start border-slate-500 text-3xl placeholder:text-3xl placeholder:text-slate-300 focus:outline-none focus:ring-0'
          />
          <button className='h-14 bg-[#A3D165] p-4 text-white'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

export function getRandomImage() {
  return srcs[Math.floor(Math.random() * srcs.length)];
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
