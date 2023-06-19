/*
import React from 'react';

import { NotificationType } from '@/pages/notification';

export interface PropType {
  notifications: NotificationType[];
}

title: string;
message: string;
updated_at: string;
created_at: string; 
user: string;

function NotificationList({ notifications }: { notifications: NotificationType[] }) {
  return (
    <div className="container my-3">
      <p>공지 사항</p>
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th>번호</th>
            <th>제목</th>
            <th>생성 일시</th>
            <th>변경 일시</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <tr key={notification.id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <a href={`notification/${notification.id}`}>{notification.title }</a>
                </td>
                <td>{notification.created_at}</td>
                <td>{notification.updated_at}</td>
                <td>
                  <a href={`delete/${notification.id}`}>삭제</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>공지가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationList;
*/