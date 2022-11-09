import React from "react";

function TodoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="ToDoFooter-container">
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    );
};

export default TodoFooter;