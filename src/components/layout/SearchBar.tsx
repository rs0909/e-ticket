import React from 'react';
import { BsSearch } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

export interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps) {
  const [search, setSearch] = React.useState('');

  return (
    <div
      className={clsxm(
        'relative flex h-16 w-full items-center justify-start overflow-hidden rounded-md bg-white bg-opacity-[0.7]',
        className
      )}
    >
      <BsSearch className='absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-slate-700' />

      <input
        type='text'
        placeholder='Search for an event, venue or city'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='relative h-full flex-1 appearance-none rounded-l-md border-transparent bg-transparent bg-opacity-75 pl-10 outline-none ring-0 placeholder:text-xl placeholder:text-slate-700 hover:outline-none hover:ring-0 focus:border-transparent focus:outline-none focus:ring-0'
      />

      <button className='h-full w-16 rounded-r-md bg-yellow-400'>Search</button>
    </div>
  );
}

export default SearchBar;
