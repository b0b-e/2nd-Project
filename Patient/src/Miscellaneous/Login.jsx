import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/app">Go to App Page</Link>
    </div>
  );
}

export default Login;
