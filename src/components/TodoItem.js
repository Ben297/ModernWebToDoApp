import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, title) => {
    if (title.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, title)
    }
    this.setState({ editing: false })
  }

  render() {
      const {todo, completeTodo, deleteTodo} = this.props

      let card, edit
      if (this.state.editing) {
          edit = (
              <TodoTextInput title={todo.title}
                             editing={this.state.editing}
                             onSave={(title) => this.handleSave(todo.id, title)}/>
          )
      } else{
          edit = (
          <div className="header">
              {todo.title}
          </div>)
        }

      card = (

          <div className="ui card" style={{margin: 1 +'em'}}>
            <div className="content">
                <div class="right floated " >
                    <div className="ui slider checkbox">

                    <input className=""
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                        <label>
                            Done?
                        </label>
                     </div>
                </div>
                {edit}

                <div className="description">



                    <label onDoubleClick={this.handleDoubleClick}>
                      {todo.description}
                    </label>
                  </div>

            </div>
            <div className="extra content">
              <div className="ui two buttons">
                  <div className="ui basic green button" onClick={this.handleDoubleClick}>Edit</div>
                <div className="ui basic red button"
                        onClick={() => deleteTodo(todo.id)} >Delete</div>
              </div>
            </div>
          </div>
      )
    

    return (
      <div className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {card}
      </div>
    )
  }
}
