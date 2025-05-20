// authenticate.js
export async function authenticate(token, setLocation) {
  if (!token) {
    throw new Error('No token');
  }

  const response = await fetch('/authenticate', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Authentication failed');
  }

  setLocation('TUNNEL'); // Navigate to Tunnel
}
