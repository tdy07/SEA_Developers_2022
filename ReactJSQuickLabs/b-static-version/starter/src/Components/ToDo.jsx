import React from 'react'
import PropTypes from 'prop-types'
import TodoModel from './utils/Todo.model'

function ToDo({ todo }) {
    const dateCreated = new Date(todo.todoDateCreated).toUTCString()
    const completedClassName = todo.todoCompleted ? "completed" : ""
    let completed;
    if (todo.todoCompleted) {
        completed = "N/A"
    } else {
        completed = <a href="/">Edit</a>
    }
  return (
    <tr>
        <td className={completedClassName}>{todo.todoDescription}</td>
        <td className={completedClassName}>{dateCreated}</td>
        <td>{completed}</td>
    </tr>
  )
}

ToDo.propTypes = {
    todo : PropTypes.instanceOf(TodoModel)
}

export default ToDo