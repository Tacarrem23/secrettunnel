// Tablet.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { authenticate } from './authenticate';

function Tablet() {
  const { token, setLocation } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticate(token, setLocation);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Authenticate</button>
    </form>
  );
}

export default Tablet;
