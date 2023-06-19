import React from 'react';

function Signup() {
  return (
    <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password1">비밀번호</label>
          <input
            type="password"
            className="form-control"
            name="password1"
            id="password1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2">비밀번호 확인</label>
          <input
            type="password"
            className="form-control"
            name="password2"
            id="password2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          생성하기
        </button>
    </div>
  );
};

export default Signup;