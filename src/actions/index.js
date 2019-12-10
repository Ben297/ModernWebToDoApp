import * as types from '../constants/ActionTypes'

export const addTodo = (title,description) => ({ type: types.ADD_TODO, title,description });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, title) => ({ type: types.EDIT_TODO, id, title })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })

