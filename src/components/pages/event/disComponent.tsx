import Image from 'next/image';
import React from 'react';

import Card from '@/components/Card';
import Header from '@/components/layout/Header';
import SearchBar from '@/components/layout/SearchBar';
import HomeFooter from '@/components/pages/home/HomeFooter';
import TicketTypes from '@/components/pages/home/TicketTypes';

import banner from '@/assets/banner2.jpeg';
import { Event } from '@/pages/event';

const commonClasses = "bg-white rounded-lg p-4 shadow-md mt-4 relative";
const commonTextClasses = "text-gray-700 mb-1";

function DisComponent({ events }: { events: Event }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
    <Header className='fixed top-0 h-16 w-full bg-blue-300 bg-opacity-[0.35]' />
    <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap my-6">
            <div className="w-full lg:w-full p-4 lg:pr-6 flex flex-col items-start">
                <div className="flex items-start justify-between">
                    <img src={getRandomImage()} alt="banner" className="mt-16 w-96 h-auto" />
                    <div className={`${commonClasses} mt-auto w-256 h-64 mr-4 ml-4 flex-grow`}>
                        <h1 className="font-bold text-xl mb-2">{events.title}</h1>
                        <p className={commonTextClasses}>Event Date: {events.date}</p>
                        <p className={commonTextClasses}>Event Director: {events.organizer}</p>
                        <p className="text-green-500 mt-2 font-semibold">Currently {events.remaining_capacity} Remaining</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded absolute bottom-4 right-4 mt-4">Purchase Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  );
}
export default DisComponent;

function getRandomImage() {
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
