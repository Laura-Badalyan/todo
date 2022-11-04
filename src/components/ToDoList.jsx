const ToDoList = (props) => {
    const removeItem = function() {
        // e.preventDefault();
        // props.todos.remove(props.todos[index])
    }

    console.log(props.todos);
    return (
        <div className="ToDoList">
            {
                props.todos.map((item) => {
                    return (
                        <div key={item.id} className="ToDoList-item">
                            <label>
                                <input type="checkbox" onChange={(e)=> {
                                    item.isChecked = true;
                                    e.target.checked = true;
                                }}/>
                                <span>{item.text}</span>
                            </label>
                            <button onClick={removeItem}>X</button>
                        </div>
                    )
                })

            }
        </div>)
};

export default ToDoList;