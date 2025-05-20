// Entrance.js
import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';
import { signup } from './signup';

function Entrance() {
  const [name, setName] = useState('');
  const { setToken, setLocation } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, setToken, setLocation);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Entrance;
