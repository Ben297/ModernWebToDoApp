import React from "react";
import TodoCardList from "./TodoCardList";
import TodoForm from "./addTodoForm"
const App = () => (
    <>
        <div>
            <h2>TODOS</h2>
            <TodoCardList />
        </div>
        <div>
            <h2>Add a new ToDO</h2>
            <TodoForm />
        </div>
    </>
);
export default App;