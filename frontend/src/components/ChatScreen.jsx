import React, { useState, useEffect } from 'react';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [lastMessageId, setLastMessageId] = useState(null);

  const roomName = 'general'; // Example room name

  // Function to handle message submission
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        const response = await fetch(`/api/chat/${roomName}/`, {
          method: 'POST',
          body: new URLSearchParams({
            message: newMessage
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessages([...messages, data.message]); // Add new message to chat
          setNewMessage(''); // Clear input field
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  // Function to fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const url = `/api/chat/${roomName}/?last_message_id=${lastMessageId || ''}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        if (data.messages.length > 0) {
          // Update the messages array with new messages
          setMessages(prevMessages => [...prevMessages, ...data.messages]);
          setLastMessageId(data.messages[data.messages.length - 1].id); // Update the last message ID
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [lastMessageId]);

  return (
    <div>
      <h1>Chat Room: {roomName}</h1>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatScreen;
