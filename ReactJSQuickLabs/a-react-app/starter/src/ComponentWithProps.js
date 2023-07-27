import React from 'react'
import PropTypes from 'prop-types'

function ComponentWithProps(props) {
  return (
    <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>Your chosen number is: {props.number}</p>
        <p>{props.nonexistent} is not going to show.</p>
    </>
  )
}

ComponentWithProps.propTypes = {
    header : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired
}

ComponentWithProps.defaultProps = {
    header: "Default Header",
    content: "This is the content of my page come from the default prop",
    number: 5
}

export default ComponentWithProps