import React from 'react';
import Layout from './components/Layout'
import Weather from './components/Weather'
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Weather />
          <Quote />
        </Layout>
      </header>
    </div>
  );
}

export default App;
