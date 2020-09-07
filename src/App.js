import React from 'react';
import Layout from './components/Layout'
import Weather from './components/Weather'
import Clock from './components/Clock'
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Weather />
          <Clock />
          <Quote />
        </Layout>
      </header>
    </div>
  );
}

export default App;
