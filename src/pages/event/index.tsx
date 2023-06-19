import React from 'react';

import DisComponent from '@/components/pages/event/disComponent';

export interface EventType {
  id: string;
  title: string;
  date: string;
  updated_at: string;
  created_at: string;
  location: string;
  capacity: number;
  remaining_capacity: number;
  organizer: string;
}

export class Event implements EventType {
  id: string;
  title: string;
  date: string;
  updated_at: string;
  created_at: string;
  location: string;
  capacity: number;
  remaining_capacity: number;
  organizer: string;
  event_description : string;
  constructor(id : string, title : string, date : string, updated_at: string , created_at : string, location: string, capacity : number, remaining_capacity : number, organizer : string, event_description : string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.updated_at = updated_at;
    this.created_at = created_at;
    this.location = location;
    this.capacity = capacity;
    this.remaining_capacity = remaining_capacity;
    this.organizer = organizer;
    this.event_description = event_description;
  }
}

function EventComponent({event}: {event: Event}) {
  return (
    <div className='w-screen'>
      <DisComponent events = {event} />
    </div>
    
  );
};

export default EventComponent;




