import React from 'react';

const ErrorPage = () => {
  return (
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Error</h1>
      <p>Sorry, you must be logged in to access this page.</p>
      <p>Please <a href="/sign-in">sign in</a> to continue.</p>
    </main>
  );
};

export default ErrorPage;
