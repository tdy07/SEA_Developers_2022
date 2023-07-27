import React from "react"
import { create } from "react-test-renderer"
import ComponentWithProps from "./ComponentWithProps"

test('It should render the correct heading from props when supplied', () => {
    const headerText = "Hello this is the header text"
    const testRenderer = create(<ComponentWithProps header={headerText}/>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType('h1').children).toContain(headerText)
})

test('It should render the correct paragraph with props supplied', () => {
    const contentText = "Hello this is the content text that will be supplied"
    const testRenderer = create(<ComponentWithProps content={contentText}/>)
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType('p')[0].children).toContain(contentText)
})

test('It should render the correct number', () => {
    const number = 5
    const testRenderer = create(<ComponentWithProps number={number}/>)
    const testInstance = testRenderer.root
    expect(testInstance.findAllByType('p')[1].children).toContain(number.toString())
})