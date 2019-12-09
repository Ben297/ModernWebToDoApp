import React from 'react'
import TodoCard from "./TodoCardList";

class CardCreator extends React.Component {

    render() {
        return (
            <div className="ui four cards">
                <TodoCard/>
            </div>
        );
    }

}
export default CardCreator;