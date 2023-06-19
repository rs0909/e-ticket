/* TODO: FETCH the information */
import {GetServerSideProps} from 'next';

import DisComponent from '@/components/pages/event/disComponent';
import { Event } from '@/pages/event/';


export default function DetailPage({event}: {event : Event}){
  return(
  <div className= "w-screen">
    <DisComponent events={event} />
  </div>);
}

export const getServerSideProps: GetServerSideProps<{event:any}> = async (context) => {
  const id = context.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(`http://127.0.0.1:8000/api/events/event/${id}`);
  const data = await res.json();
  console.log(data);
  const data2 = data.organizer;
  delete data.organizer
  const data3 = data;
  const data4 = data2.first_name + " " + data2.last_name;
  data3.organizer = data4;

  return {
    props: { event: data3 },
  };
}
