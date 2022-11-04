import {useState} from "react";

const AddToDo = (props) => {
    const [inputValue, setInputValue] = useState("");
    const addListItem = (evt) => {
        evt.preventDefault();
        if(inputValue !== ""){
            props.setTodolist([...props.todos,
                {
                    id: Math.random(),
                    text: inputValue,
                    isChecked: false
                }]);
            setInputValue("");
        }
    };
    const getValue = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value)
    }
    return (
        <form className="AddToDo" onSubmit={addListItem}>
            <input type="text" value={inputValue} placeholder="What needs to be done?" onChange={getValue}/>
            <button>Add</button>
        </form>
    )
};

export default AddToDo;