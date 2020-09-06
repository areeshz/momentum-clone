import React from 'react';
import Weather from './components/Weather'
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Quote />
      </header>
    </div>
  );
}

export default App;
