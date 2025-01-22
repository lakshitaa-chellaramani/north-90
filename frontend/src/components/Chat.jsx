import React, { useState, useEffect } from "react";

const Chat = ({ roomName }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const chatSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`);
    
        chatSocket.onopen = () => {
            console.log("WebSocket connection opened");
        };
    
        chatSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Message received:", data.message);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };
    
        chatSocket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };
    
        chatSocket.onclose = () => {
            console.warn("WebSocket connection closed");
        };
    
        setSocket(chatSocket);
    
        return () => {
            chatSocket.close();
        };
    }, [roomName]);
    

    const sendMessage = () => {
        if (socket && newMessage.trim() !== "") {
            socket.send(JSON.stringify({ message: newMessage }));
            setNewMessage(""); // Clear input field
        }
    };

    return (
        <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
            <h2>Chat Room: {roomName}</h2>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    height: "300px",
                    overflowY: "scroll",
                    marginBottom: "1rem",
                }}
            >
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{ width: "70%", marginRight: "1rem" }}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
