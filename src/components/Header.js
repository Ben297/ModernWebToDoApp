import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => (
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

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
