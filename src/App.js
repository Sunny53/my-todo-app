import Form from './Components/Form';
import Header from './Components/Header';
import List from './Components/List';
import React, {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([{id:0,todo:"this is a sample task"}])


  return (
    <div className="App">
      <Header/>
      <Form setTodo={setTodos} len={todos.length}/>
      <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}

export default App;