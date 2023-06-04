import React from 'react';

import clsxm from '@/lib/clsxm';

export interface TicketTypesProps {
  // it is list of dictionary where key is name of ticket type and value is relative path to tickets of that type
  types: Record<string, string>[];
  className?: string;
}

function TicketTypes({ types, className }: TicketTypesProps) {
  return (
    <div
      className={clsxm(
        'z-10 flex w-full items-center justify-evenly',
        className
      )}
    >
      {types.map((type, index) => {
        const [name, path] = Object.entries(type)[0];
        return (
          <div
            key={name}
            className='flex flex-col items-center justify-center space-y-2 p-4'
          >
            <h3
              className={clsxm(
                'cursor-pointer rounded-lg bg-white bg-opacity-[0.4] px-3 py-2 text-xl font-bold',
                index === 0 &&
                  'hover: bg-[#AA77FF] text-[#AA77FF] hover:bg-opacity-75 hover:text-white',
                index === 1 &&
                  'hover: bg-[#FE6244] text-[#fff] hover:bg-opacity-75 hover:text-white',
                index === 2 &&
                  'hover: bg-[#00FFCA] text-[#00FFCA] hover:bg-opacity-75 hover:text-white',
                index === 3 &&
                  'hover: bg-[#FEFF86] text-[#FEFF86] hover:bg-opacity-75 hover:text-white'
              )}
            >
              {name}
            </h3>
            <a
              href={path}
              className={clsxm(
                'rounded-full px-4 py-2 transition-all duration-300 ease-in-out',
                index === 0 && 'bg-[#AA77FF] hover:bg-opacity-75',
                index === 1 && 'bg-[#FE6244] hover:bg-opacity-75 ',
                index === 2 && 'bg-[#00FFCA] hover:bg-opacity-75',
                index === 3 && 'bg-[#FEFF86] hover:bg-opacity-75'
              )}
            >
              Buy now
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default TicketTypes;
