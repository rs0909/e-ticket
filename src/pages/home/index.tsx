import React from 'react';

import HomeComponent from '@/components/pages/home/HomeComponent';

function HomePage() {
  return (
    <div className='w-screen'>
      <HomeComponent />
    </div>
  );
}

export default HomePage;

// server side rendering. For now, we don't need it.So, just example.
export async function getServerSideProps() {
  return {
    props: {},
  };
}
