import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ filteredTodos, actions }) => (
    <div className="ui cards">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </div>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList
