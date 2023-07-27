import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
// import sampleTodos from './sampleTodos.json'
import axios from 'axios'
import Modal from './Components/utils/Modal.jsx';
const TODOSURL = 'http://localhost:4000/todos'

function App() {
  const [getError, setGetError] = useState('')
  const [todos, setTodos] = useState({})
  const [postError, setPostError] = useState('')
  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos())
    }
    setTimeout(() => {
      getData()
    }, 5000)
  }, [])
  const getTodos = async () => {
    try{
    const res = await axios.get(TODOSURL)
    return res.data.length ? {todos: res.data} : {error: 'There are no todos stored'}
    }
   catch (e) {
      setGetError(`Data not available from server ${e.message}`)
      return {error: `Data not available from server ${e.message}`}
    }
  }

  const submitTodo = async (todo) => {
    setPostError('')
    try{
      await axios.post(TODOSURL, todo)
    } catch (e) {
      setPostError(`There was a problem adding the todo: ${e.message}`)
    } finally {
      setTodos(await getTodos())
    }

  }
  return (
    <>
      <div className="container">
          <HeaderComponent/>
          <div className = "container">
          <AllTodos data={todos}/>
          <AddEditTodo submitTodo={submitTodo}/>
          </div>
        <FooterComponent/>
      </div>
      {getError && <Modal handleClose={() => {setGetError('')}} message={getError}/>}
      {postError && <Modal handleClose={() => {setPostError(false)}} message={postError}/>}
    </>
  );
}

export default App;
