import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(AddTodo)
