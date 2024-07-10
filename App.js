import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  const teamMembers = [
    { name: 'Alice', role: 'Developer', photo: 'alice.jpg' },
    { name: 'Bob', role: 'Designer', photo: 'bob.jpg' },
    { name: 'Charlie', role: 'Product Manager', photo: 'charlie.jpg' }
  ];

  return (
    <div className="App">
      <Header />
      <Gallery members={teamMembers} />
    </div>
  );
}

export default App;
