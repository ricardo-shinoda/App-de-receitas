import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './pages/Provider';
import Main from './Routes';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Provider>
          <Main />
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
