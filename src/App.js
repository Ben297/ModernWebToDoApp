import React from 'react';
import CardCreator from "./components/CardCreator";
import './App.css';
import CardForm from "./components/addTodoForm";
import App from "react-scripts/template-typescript/src/App";

const app = () => (
    <>
    <div>
        <CardCreator/>
    </div>
    <div>
        <h2>Add a new Card</h2>
        <CardForm/>
    </div>

    </>
);


export default App;
