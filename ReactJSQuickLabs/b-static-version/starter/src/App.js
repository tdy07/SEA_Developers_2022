import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
import sampleTodos from './sampleTodos.json'

function App() {
  const [todos, setTodos] = useState(sampleTodos)
  const submitTodo = (todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
  }
  return (
    <div className="container">
        <HeaderComponent/>
        <div className = "container">
        <AllTodos data={{todos}}/>
        <AddEditTodo submitTodo={submitTodo}/>
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
