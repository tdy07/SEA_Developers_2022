import React from 'react'
import './css/AddEditTodo.css'
import TodoForm from './TodoForm'
import PropTypes from 'prop-types'
import generateTodoId from './utils/generateId'
import TodoModel from './utils/Todo.model'

const AddEditTodo = (props) => { 
    const submitTodo = (todoDescription, todoDateCreated, todoCompleted) => {
        const _id = generateTodoId()
        const newTodo = new TodoModel(todoDescription, todoDateCreated?.toISOString(), todoCompleted, _id)
        props.submitTodo(newTodo)
    }
    return ( 
    <> 
        <div className="addEditTodo row"> 
            <h3>Add/Edit Todo</h3> 
        </div> 
        <TodoForm submitTodo={submitTodo}/> 
    </> 
    )}

AddEditTodo.propTypes = {
    submitTodo : PropTypes.func.isRequired
}

export default AddEditTodo