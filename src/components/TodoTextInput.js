import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    title: this.props.title || '',
    description: this.props.description || 'Penis'
  }

  handleSubmit = e => {
    const title = e.target.value.trim()
    const description  = "test";
    if (e.which === 13) {
      this.props.onSave(title,description)

      if (this.props.newTodo) {
        this.setState({ title: '',description: 'hello' })
      }
    }
  }

  handleChange = e => {
    this.setState({ title: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (<div>
        <div className="ui input">

          <input className={
            classnames({
              edit: this.props.editing,
              'new-todo': this.props.newTodo
            })}
                 type="text"
                 placeholder={this.props.placeholder}
                 autoFocus={true}
                 value={this.state.title}
                 onBlur={this.handleBlur}
                 onChange={this.handleChange}
                 onKeyDown={this.handleSubmit} />

        </div>
      </div>
    )
  }
}
