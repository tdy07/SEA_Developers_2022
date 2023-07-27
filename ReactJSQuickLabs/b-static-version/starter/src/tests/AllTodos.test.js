import React from "react"
import { create } from "react-test-renderer"
import sampleTodos from '../sampleTodos.json'
import AllTodos from "../Components/AllTodos"

test('It should render the correct number of todo items', () => {
    const sampleToDoLength = sampleTodos.length
    const testRenderer = create(<AllTodos data={{todos: sampleTodos}}/>)
    const testInstance = testRenderer.root
    const tableBody = testInstance.findByType('tbody')
    expect(tableBody.children.length).toBe(sampleToDoLength)
})