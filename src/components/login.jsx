import React from 'react';

const Login = ({ setToken }) => {
  const handleLogin = () => {
    const authUrl = `https://trello.com/1/authorize?response_type=token&key=c6f34b581c35de2ce1660c00e4a2a027&return_url=http://localhost:5173/syllabus&scope=read,write,account&expiration=never`;
    window.open(authUrl, '_blank');
  };

  const handleAuthCallback = () => {
    const hashParams = window.location.hash.substring(1).split('&').reduce((acc, cur) => {
      const [key, value] = cur.split('=');
      acc[key] = value;
      return acc;
    }, {});
    if (hashParams) {
      setToken(hashParams.token);
      localStorage.setItem('token', hashParams.token);
    } else {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Trello</button>
      {window.location.hash && handleAuthCallback()}
    </div>
  );
};

export default Login;
