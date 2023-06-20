import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Register' },
  // { href: '/about', label: 'About' },
  // { href: '/help', label: 'Help Center' },
];

export default function Header({ className = '' }: { className?: string }) {
  const router = useRouter();
  return (
    <header className={clsxm('sticky top-0 z-50 bg-transparent', className)}>
      <div className='layout flex h-14 items-center justify-between'>
        <Link
          href='/home'
          className='text-xl font-bold text-orange-400'
          onClick={() => {
            alert(
              'clicked. In dev mode, it will take some time to redirec. Please be patient.'
            );
            router.push('/home');
          }}
        >
          E-Ticket
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }, index) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsxm(
                    'px-3 py-2 text-orange-500 transition-all duration-300 ease-in-out hover:bg-orange-400 hover:text-white',
                    index === 0 && 'bg-orange-400 text-white'
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
