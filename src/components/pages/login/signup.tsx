import React, { useState } from 'react';

import Header from '@/components/layout/Header';

function Signup() {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password1 === password2) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password1,
            // email: email,
            // phone_number: phone_number,
          }),
        });

        const data = await response.json();

        console.log(data);
        // setCookie('token', response.json(), { path: '/' });
        window.location.href = '/login';
      } catch (error) {
        console.log('An error occurred:', error);
      }
    } else {
      setError('Passwords do not match');
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword2(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <Header className='absolute w-screen bg-blue-400 bg-opacity-50' />
      <div w-screen className='w-[600px]'>
        <p className='mb-4 text-center text-xl'>Please Join Us!</p>
        <div className='container mx-auto my-3'>
          <div className='rounded-lg bg-white px-6 py-4 shadow-md'>
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
                  className='form-control rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none'
                  name='username'
                  id='username'
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='password1'
                  className='mb-1 block text-lg font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  className='form-control rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none'
                  name='password1'
                  id='password1'
                  value={password1}
                  onChange={handlePassword1Change}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='password2'
                  className='mb-1 block text-lg font-medium text-gray-700'
                >
                  Check Password
                </label>
                <input
                  type='password'
                  className='form-control rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none'
                  name='password2'
                  id='password2'
                  value={password2}
                  onChange={handlePassword2Change}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='mb-1 block text-lg font-medium text-gray-700'
                >
                  E-mail
                </label>
                <input
                  type='text'
                  className='form-control rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none'
                  name='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='phone_number'
                  className='mb-1 block text-lg font-medium text-gray-700'
                >
                  Phone Number
                </label>
                <input
                  type='text'
                  className='form-control rounded-lg border border-gray-300 px-6 py-2 focus:border-blue-500 focus:outline-none'
                  name='phone_number'
                  id='phone_number'
                  value={phone_number}
                  onChange={handlePhoneChange}
                />
              </div>
              {error && <p className='mb-3 text-red-500'>{error}</p>}
              <div className='flex justify-between'>
                <div className='badge rounded-full bg-gray-200 px-3 py-1 text-gray-800'>
                  <button
                    type='submit'
                    className='text-blue-500 hover:underline'
                  >
                    Make Account
                  </button>
                </div>
                <div className='badge rounded-full bg-gray-200 px-3 py-1 text-gray-800'>
                  <a href='\login' className='text-blue-500 hover:underline'>
                    Return Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
