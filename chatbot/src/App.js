import React from 'react';
import './App.css';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot App</h1>
      </header>
      <main className="App-main">
        <Chat />
      </main>
    </div>
  );
}

export default App;