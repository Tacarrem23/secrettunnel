// App.js
import React, { useState } from 'react';
import { AppContext } from './AppContext';
import Entrance from './Entrance';
import Tablet from './Tablet';
import Tunnel from './Tunnel';

function App() {
  const [token, setToken] = useState(null);
  const [location, setLocation] = useState('ENTRANCE');

  return (
    <AppContext.Provider value={{ token, setToken, location, setLocation }}>
      {location === 'ENTRANCE' && <Entrance />}
      {location === 'TABLET' && <Tablet />}
      {location === 'TUNNEL' && <Tunnel />}
    </AppContext.Provider>
  );
}

export default App;

