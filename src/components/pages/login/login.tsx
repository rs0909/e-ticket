import React, { useState } from 'react';

import Header from '@/components/layout/Header';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/auth-token/', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      // Handle any network or server errors
      console.log('An error occurred:', error);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <Header className='absolute w-screen bg-blue-400 bg-opacity-50' />

      <div w-screen>
        <div className='container my-3'>
          <p className='mb-4 text-center text-xl'>Welcome to E-ticket!</p>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label
                htmlFor='username'
                className='mb-1 block text-lg font-medium text-gray-700'
              >
                ID
              </label>
              <input
                type='text'
                className='rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
                name='username'
                id='username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='password'
                className='mb-1 block text-lg font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                className='rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
                name='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='flex justify-between'>
              <div className='badge rounded-full bg-gray-200 px-3 py-1 text-gray-800'>
                <button type='submit' className='text-blue-500 hover:underline'>
                  Login
                </button>
              </div>
              <div className='badge rounded-full bg-gray-200 px-3 py-1 text-gray-800'>
                <a href='\signup' className='text-blue-500 hover:underline'>
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
