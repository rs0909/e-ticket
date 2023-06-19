import React from 'react';

import clsxm from '@/lib/clsxm';

export default function ProfileNavbar({
  className = '',
}: {
  className?: string;
}) {
  return (
    <header className={clsxm('', className)}>
      <nav className='flex flex-col'>
        {[
          ['My Profile', '/myprofile'],
          ['My Ticket', '/myticket'],
          ['My Event', '/myevent'],
        ].map(([title, url]) => (
          <li key={`${title}&{url}`}>
            <a
              href={url}
              className='rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              {title}
            </a>
          </li>
        ))}
      </nav>
    </header>
  );
}
