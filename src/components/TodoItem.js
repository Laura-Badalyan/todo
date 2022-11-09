import React from "react";

function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label className="ToDoList-item">
                <input
                    type="checkbox"
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }}
                    checked={todo.isCompleted}
                />
                <span>{todo.text}</span>
                <button onClick={() => {
                    onDelete(todo)
                }}>X
                </button>
            </label>
        </div>
    );
};

export default TodoItem;