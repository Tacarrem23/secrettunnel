// Tablet.js
import React from 'react';
import { useAuth } from './AuthContext';

const Tablet = () => {
  const { authenticate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticate();
    } catch (err) {
      alert('Authentication failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Authenticate</button>
    </form>
  );
};

export default Tablet;
