import Image from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

export interface CardProps {
  className?: string;
  isTop?: boolean;
  title?: string;
  description?: string;
  src: string;
  onClick?: () => void;
}

function Card({ className, isTop, title, description, src, onClick}: CardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={clsxm(
        'relative flex w-[250px] cursor-pointer flex-col items-start justify-start overflow-hidden bg-white hover:shadow-lg',
        isTop ? 'h-[170px]' : 'h-[300px]',
        'transition-all duration-300 hover:scale-105',
        className
      )}
      onClick={handleClick}
    >
      <div className='h-[170px] w-full'>
        <Image
          src={src}
          alt='banner'
          width={250}
          height={170}
          className='h-full w-full flex-1'
        />
      </div>

      {isTop && (
        <h4
          className={clsxm(
            'z-30 text-lg font-bold',
            'line-clamp-2 truncate overflow-ellipsis',
            isTop ? 'w-full pb-4 text-center text-white' : 'text-blue-600'
          )}
        >
          {title}
        </h4>
      )}

      {!isTop && (
        <div className='flex flex-1 flex-col items-start justify-start bg-white p-2'>
          <h3
            className={clsxm(
              'z-30 w-full text-center text-base font-bold',
              'line-clamp-2 truncate overflow-ellipsis',
              isTop ? 'text-white' : 'text-blue-600'
            )}
          >
            {title}
          </h3>
          <p className='text-sm text-gray-500'>
            {description ||
              'React is a JavaScript library for building user interfaces.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
