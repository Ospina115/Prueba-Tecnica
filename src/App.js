import React from 'react';
import UserList from './components/UserList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <UserList />
    </div>
  );
};

export default App;
