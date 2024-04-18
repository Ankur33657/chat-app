import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('Person 1');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const fromMe = selectedPerson === 'Person 1';
      setMessages([...messages, { text: inputValue, fromMe }]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat Application</h1>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message-box ${message.fromMe ? 'right' : 'left'}`}>
            <div className={`message ${message.fromMe ? 'from-me' : 'from-others'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-box">
        <select
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
        >
          <option value="Person 1">Person 1</option>
          <option value="Person 2">Person 2</option>
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
