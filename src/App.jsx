import React from 'react';
import Agents from './Features/Agents';
import Maps from './Features/Maps';

function App() {
  return (
    <div className="App">
      <header>Valorant</header>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Agents />
      </React.Suspense>
      <Maps />
    </div>
  );
}

export default App;
