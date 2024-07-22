import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: 'さようなら' }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={sendMessage}>Send Message</button>
      <p>{message}</p>
    </div>
  );
}
