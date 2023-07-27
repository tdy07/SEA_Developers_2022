import React from "react"
import { create } from "react-test-renderer"
import FooterComponent from "../Components/FooterComponent"

test('Footer matches snapshot', () => {
    const footer = create(<FooterComponent/>)
    expect(footer.toJSON()).toMatchSnapshot()
})