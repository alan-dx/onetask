import React from 'react';
import './App.css';
import Routes from './routes/index';

import { AuthProvider }from './contexts/auth';

function App() {
  return (
    <AuthProvider /*Provendo o contexto e suas informações para todos os elementos filhos */>
      <Routes />
    </AuthProvider>
  );
};

export default App;
