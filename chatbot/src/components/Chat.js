import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (input.trim() !== '') {
        console.log(input);
      setMessages([...messages, { text: input, sender: 'user' }]);
      

      // Simulate the bot response (replace this with your actual backend API call)
     setTimeout(() => {
        console.log(messages);
        let copyOfDynos = [].concat(messages);
        copyOfDynos.push( { text: 'I am a chatbot!', sender: 'bot' });
        console.log(messages);
        setMessages(copyOfDynos);
        console.log(messages);
      }, 9000); 



    
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;