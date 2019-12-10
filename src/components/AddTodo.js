import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

const AddTodo = ({ addTodo }) => (
  <header className="header">
    <h1>Simple Todo-App</h1>
    <TodoTextInput
      newTodo
      onSave={(title,description) => {
        if (title.length !== 0) {
          addTodo(title,description)
        }
      }}
      placeholder="Add your next Todo"
    />
  </header>
)

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
