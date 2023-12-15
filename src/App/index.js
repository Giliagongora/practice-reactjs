import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}


export default App;



// const defaultTodos = [
//   { text: 'Cortar 1 Cebolla', completed: true},
//   { text: 'Cortar 2 Cebollas', completed: false},
//   { text: 'Cortar 3 Cebollas', completed: false},
//   { text: 'Cortar 4 Cebollas', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');