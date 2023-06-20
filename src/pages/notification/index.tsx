import React from 'react';

import NotificationList from '@/components/pages/notification/list';

export interface NotificationType {
  title: string;
  message: string;
  updated_at: string;
  created_at: string;
  user: string;
  id: string;
}

function List({ notifications }: { notifications: NotificationType[] }) {
  return (
    <div className='w-screen'>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default List;

export async function getServerSideProps(/*context: GetServerSidePropsContext*/) {
/*
  const { notificationId } = context.query; // Get the notification ID from the context
  let apiUrl = 'http://127.0.0.1:8000/api/notification/notifications'; // Default API URL for fetching all notifications

  if (notificationId) {
    apiUrl = `http://127.0.0.1:8000/api/notification/notification/${notificationId}`; // API URL for fetching a specific notification
  }

  const res = await fetch(apiUrl);
  */
  const res = await fetch('http://127.0.0.1:8000/api/notification/notifications');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { notifications: data },
  };
}
