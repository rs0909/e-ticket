import React from 'react';

function Login() {
  return (
    <div className="container my-3">
=        <div className="mb-3">
          <label htmlFor="username">사용자ID</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          로그인
        </button>
    </div>
  );
};

export default Login;