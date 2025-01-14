import React from "react";

import { create, act } from "react-test-renderer";

import sampleToDos from "../sampleTodos.json";

import AllTodos from "../Components/AllTodos";

import TodoForm from "../Components/TodoForm";

jest.mock("../Components/utils/DateCreated.jsx", () => {

  const MockDateCreated = () => {

    return <span testid="dateCreated">Date Created Component</span>;

  };

  return MockDateCreated;

});

 

describe("TodoForm test suite", () => {
  let submitTodo
  beforeEach(() => {
    submitTodo = jest.fn()
  })

  describe("Form Submission tests", () => {
    test("it should call submit todo with a prescribed parameter on submission", async () => {
        const testRenderer = create(<TodoForm submitTodo={submitTodo}/>)
        const testInstance = testRenderer.root
        const descInput = testInstance.findByProps({ name: "todoDescription" });
        const completedInput = testInstance.findByProps({ name: "todoCompleted" });
        const descTestValue = "Test"
        const compTestValue = false
        const form = testInstance.findByType('form')
        await act(() => completedInput.props.onChange({target: { checked: compTestValue}}))
        await act(() => descInput.props.onChange({target: { value: descTestValue }}))
        await act(() => form.props.onSubmit(new Event('form')))
        expect(submitTodo).toHaveBeenCalledTimes(1)
        expect(submitTodo).toHaveBeenCalledWith(descTestValue, null, compTestValue)
        expect(descInput.props.value).toBe('')
        expect(completedInput.props.checked).toBe(false)
    })
  })

  describe("DateCreated function and render tests", () => {

    test("", () => {

      const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);

      const testInstance = testRenderer.root;

      const dateCreated = testInstance.find(

        (el) => el.type === "span" && el.props.testid == "dateCreated"

      );

      expect(dateCreated).toBeTruthy();

      expect(dateCreated.children).toContain("Date Created Component");

    });

  });

  describe("onchange event tests", () => {

    test("should render the new value in the input when the todoDescription onChange function fires", () => {

      const testValue = "test";

      const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);

      const testInstance = testRenderer.root;

      const descInput = testInstance.findByProps({ name: "todoDescription" });

      expect(descInput.props.value).toBe("");

      act(() => descInput.props.onChange({ target: { value: testValue } }));

      expect(descInput.props.value).toBe(testValue);

    });

  });

 

  test("it should render the new value in the checkbox when the toDoCompleted onChange function fires", () => {

    const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);

    const testInstance = testRenderer.root;

    const completedInput = testInstance.findByProps({ name: "todoCompleted" });

    expect(completedInput.props.checked).toBeFalsy();

    act(() => completedInput.props.onChange({ target: { checked: true } }));

    expect(completedInput.props.checked).toBeTruthy();

  })

 

  test("it should enable submit button when the todo description is populated", () => {

    const testValue = "test"

    const testRenderer = create(<TodoForm submitTodo={submitTodo}/>);

    const testInstance = testRenderer.root;

    const descInput = testInstance.findByProps({ name: "todoDescription" });

    const submitBtn = testInstance.findByProps({ type: "submit" });

    expect(submitBtn.props.disabled).toBeTruthy();

    act(() => descInput.props.onChange({ target: { value: testValue } }));

    expect(submitBtn.props.disabled).toBeFalsy();

  })

});