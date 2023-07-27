import React, { useState } from 'react'
import DateCreated from './utils/DateCreated'
import PropTypes from 'prop-types'

function TodoForm(props) {
    const [todoDescription, setTodoDescription] = useState('')
    const [todoDateCreated, setTodoDateCreated] = useState(null)
    const [todoCompleted, setTodoCompleted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        props.submitTodo(todoDescription, todoDateCreated, todoCompleted)
        setTodoDescription('')
        setTodoDateCreated(null)
        setTodoCompleted(false)
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="todoDescription">Description:&nbsp;</label>
            <input type='text' name='todoDescription' placeholder='Todo Description' className='form-control' value={todoDescription} onChange={(e) => {setTodoDescription(e.target.value)}}></input>
        </div>
        <div className="form-group">
            <label htmlFor="todoCreated">Created on:&nbsp;</label>
            <DateCreated updateDateCreated={(dateCreated) => setTodoDateCreated(dateCreated)}/>
        </div>
        <div className="form-group">
            <label htmlFor="todoCompleted">Completed:&nbsp;</label>
            <input type='checkbox' checked={todoCompleted} name='todoCompleted' onChange={(e) => {setTodoCompleted(e.target.checked)}}></input>
        </div>
        <div className="form-group"> 
            <input type="submit" value="Submit" className={"btn ${!todoDescription ? btn-danger : btn-primary}"}  disabled={!todoDescription}/> 
        </div>
    </form>
  )
}

TodoForm.propTypes = {
    submitTodo : PropTypes.func.isRequired
}
export default TodoForm