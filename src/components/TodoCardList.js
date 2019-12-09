import React from 'react'
import {connect} from "react-redux"

const mapStateToProps = state => {
    return {todos: state.todos}
};

const ConnectedList = ({ todos }) => (
    <div>
        {todos.map(el => (
            <div className="card">

                <div className="content">
                    <div className="header">{el.id}</div>
                    <div className="description">
                        {el.title}
                    </div>
                </div>
                <div className="ui two bottom attached fluid buttons">
                    <div className="ui right labeled icon button">
                        <i className="pen square icon"/>
                        Edit
                    </div>
                    <div className="ui right labeled icon button">
                        <i className="trash alternate icon"/>
                        Delete
                    </div>
                </div>
            </div>

        ))}
    </div>
);

const TodoCardList = connect(mapStateToProps)(ConnectedList);

export default TodoCardList

