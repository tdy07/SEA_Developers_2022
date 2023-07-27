import React from "react"
import { create } from "react-test-renderer"
import HeaderComponent from "../Components/HeaderComponent"

test('Header matches snapshot', () => {
    const header = create(<HeaderComponent/>)
    expect(header.toJSON()).toMatchSnapshot()
})