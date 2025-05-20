// signup.js
export async function signup(name, setToken, setLocation) {
  const response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  const data = await response.json();
  setToken(data.token); // Save token to state
  setLocation('TABLET'); // Navigate to Tablet
}
