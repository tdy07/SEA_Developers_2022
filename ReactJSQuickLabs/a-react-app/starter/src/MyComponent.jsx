import React from 'react'
import AnotherComponent from './AnotherComponent'
import MyClassComponent from './MyClassComponent'
import ComponentWithProps from './ComponentWithProps'

const MyComponent = () => {
  return (
    <div>
        <ComponentWithProps content="This is the new content overwritten by the component" number={10}/>
        <h1>Hello World!</h1>
        <AnotherComponent/>
        <MyClassComponent/>
    </div>
  )
}

export default MyComponent