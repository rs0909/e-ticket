import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/auth-token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to home page
        window.location.href = '/home';
      } else {
        // Handle failed login, e.g., show an error message
        console.log('Login failed');
      }
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
    <div className="flex items-center justify-center h-screen">
      <div w-screen>
        <div className="container my-3">
          <p className="text-xl text-center mb-4">Welcome to E-ticket!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="block mb-1 text-lg font-medium text-gray-700">
                ID
              </label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="username"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block mb-1 text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="badge bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                <button type="submit" className="text-blue-500 hover:underline">
                  Login
                </button>
              </div>
              <div className="badge bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                <a href="\signup" className="text-blue-500 hover:underline">
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
