import React from "react"
import { create } from "react-test-renderer"
import sampleTodos from '../sampleTodos.json'
import AllTodos from "../Components/AllTodos"
import TodoModel from "../Components/utils/Todo.model"
import ToDo from "../Components/ToDo"

jest.mock('../Components/utils/Todo.model', () => {
    return class TodoModel {
        constructor() {
            this.todoDescription = "Test Todo";
            this.todoDateCreated = "2019-05-04T15:30:00.000Z";
            this.todoCompleted = true
        }
    }
})

test('it should render 2 tds with className completed if props.todo.todoCompleted is true', () => {
    const testTodo = new TodoModel
    const testRenderer = create(<ToDo todo={testTodo}/>)
    const testInstance = testRenderer.root
    const cells = testInstance.findAllByType('td')
    for (let i = 0, j = cells.length - 1; i < j; i++) { 
        expect(cells[i].props.className).toBe("completed"); 
    }
})

test('it should render 2 tds with className false if props.todo.todocompleted is false', () => {
    const testTodo = new TodoModel
    testTodo.todoCompleted = false
    const testRenderer = create(<ToDo todo={testTodo}/>)
    const testInstance = testRenderer.root
    const cells = testInstance.findAllByType('td')
    for (let i = 0, j = cells.length - 1; i < j; i++) { 
        expect(cells[i].props.className).toBeFalsey; 
    }
})

test('it should N/A in last collumn if completed', () => {
    const testTodo = new TodoModel
    const testRenderer = create(<ToDo todo={testTodo}/>)
    const testInstance = testRenderer.root
    const cells = testInstance.findAllByType('td')
    expect(cells[cells.length - 1].children).toContain('N/A'); 

})

test('it should Edit in last collumn if NOT completed', () => {
    const testTodo = new TodoModel
    testTodo.todoCompleted = false
    const testRenderer = create(<ToDo todo={testTodo}/>)
    const testInstance = testRenderer.root
    const cells = testInstance.findAllByType('td')
    const links = testInstance.findByType(`a`); 
    expect(links.children).toContain(`Edit`);
})