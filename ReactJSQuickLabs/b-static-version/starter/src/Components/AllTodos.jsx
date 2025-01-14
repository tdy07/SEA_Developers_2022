import React, { useState, useEffect } from 'react'
import './css/AllTodos.css'
// import sampleTodos from  '../sampleTodos.json'
import ToDo from './ToDo'
import TodoModel from './utils/Todo.model'
import PropTypes from 'prop-types'

function AllTodos({data}) {
    // const todos = data.todos?.map((currentTodo) => {
    //     const todo = new TodoModel(currentTodo.todoDescription, currentTodo.todoDateCreated, currentTodo.todoCompleted, currentTodo._id)
    //     return <ToDo todo={todo} key={todo._id}/>
    // })
    const [dataStatus, setDataStatus] = useState({name: 'loading', message: 'Data is loading...'})
    useEffect(() => {
        if (data?.error) {
            setDataStatus({name: 'error', message: data.error})
        } else if (data?.todos) {
            const ds = data.todos.length > 0 ? {name: 'data', message: null} : {name: 'no data', message: 'There were no todos previously saved'}
            setDataStatus(ds)
        } else {
            setDataStatus({name: 'loading', message: 'Data is loading...'})
        }
    }, [data])

    const populateTable = () => {
        if (data?.todos?.length > 0){
            return data.todos.map((currentTodo) => {
                const {todoDescription, todoDateCreated, todoCompleted, _id} = currentTodo
                const todo = new TodoModel(todoDescription, todoDateCreated, todoCompleted, _id)
                return <ToDo todo={todo} key={todo._id}/>
            })
        }
        return (
            <tr>
                <td id={dataStatus.name} colSpan="3">{dataStatus.message}</td>
            </tr>
        )
    }
  return (
    <div className="row">
        <h3> ToDo List </h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th> Description </th>
                    <th> Date Created </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {populateTable()}
            </tbody>
        </table>
    </div>
  )
}

AllTodos.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.exact({
            todos: PropTypes.arrayOf(
                PropTypes.exact({
                    _id: PropTypes.string,
                    todoDescription: PropTypes.string,
                    todoDateCreated: PropTypes.string,
                    todoCompleted: PropTypes.bool
                })
            )
        }),
        PropTypes.exact({
            error: PropTypes.string
        }),
        PropTypes.exact({})
    ])
}

export default AllTodos