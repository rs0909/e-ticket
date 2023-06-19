import React from 'react';

import { NotificationType } from '@/pages/notification';

function Detail({ notification }: { notification: NotificationType }) {
  if (!notification) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-3">
      <h2 className="border-b-2 py-2 text-2xl font-semibold">{notification.title}</h2>
      <div className="card my-3">
        <div className="card-body">
          <div className="card-text leading-7 whitespace-pre-line">{notification.message}</div>
          <div className="mb-4" /> {/* Add a margin at the bottom */}

          <div className="flex justify-between">
            <div className="badge bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              <a href="\notification" className="text-blue-500 hover:underline">
                Return to list
              </a>
            </div>
            <div className="badge bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              <div className="flex items-center">
                <div className="mr-2">
                  created: {notification.created_at.substring(0, 16)}
                </div>
                <div>
                  updated: {notification.updated_at.substring(0, 16)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
