import React, { useState } from 'react';

import { NotificationType } from '@/pages/notification';

function NotificationList({ notifications }: { notifications: NotificationType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = notifications.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /*
  const deleteNotification = async (notificationId: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/notification/delete/${notificationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle successful deletion, e.g., show a success message or update the list of notifications
      } else {
        // Handle failed deletion, e.g., show an error message
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };
  */

  return (
    <div className="container my-3">
      <div className="w-screen">
      <p className="text-3xl font-semibold text-center mb-4">Notification</p>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Index</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Created time</th>
            <th className="py-2 px-4">Updated time</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.length > 0 ? (
            currentItems.map((notification, index) => (
              <tr key={notification.id}>
                <td className="py-2 px-4 text-center">{indexOfFirstItem + index + 1}</td>
                <td className="py-2 px-4">
                <a href={`notification/${notification.id}`} className="text-blue-500 hover:underline">
                  {notification.title}
                </a>
                </td>
                <td className="py-2 px-4 text-center">{notification.created_at.substring(0, 16)}</td>
                <td className="py-2 px-4 text-center">{notification.updated_at.substring(0, 16)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-2 px-4 text-center" colSpan={5}>
                There is no notification
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {notifications.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="pagination flex">
              {Array(Math.ceil(notifications.length / itemsPerPage))
                .fill(null)
                .map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => paginate(i + 1)}
                    style={{ marginRight: '0.5rem' }} // Add spacing between items
                  >
                    <a href="#" className="page-link">
                      {i + 1}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      )}

    </div>
    </div>
  );
}

export default NotificationList;
