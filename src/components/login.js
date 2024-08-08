// src/pages/Login.js
import React, { useState } from 'react';
import './login.css'; // 스타일을 위한 CSS 파일

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 처리 로직 추가
    if (email && password) {
      // 로그인 성공 시 메인 페이지 또는 대시보드로 리다이렉트
      window.location.href = '/'; // 적절한 경로로 이동
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
