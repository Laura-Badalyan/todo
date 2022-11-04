const ToDoFooter = ({todos},onClear) => {
    let completedCount = todos.filter(todo => todo.isChecked).length;
    return (
        <div className="ToDoFooter">
            <span>{completedCount}/{todos.length} Completed</span>
            <button onClick={onClear}>Clear Completed</button>
        </div>
    )
};

export default ToDoFooter;