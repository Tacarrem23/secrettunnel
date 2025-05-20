// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import Entrance from './Entrance';
import Tablet from './Tablet';

function App() {
  return (
    <AuthProvider>
      <Entrance />
      <Tablet />
    </AuthProvider>
  );
}

export default App;

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

