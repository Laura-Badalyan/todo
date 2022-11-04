import './App.css'
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import ToDoFooter from "./components/ToDoFooter";
import {useState} from "react";

const App = () => {
    const [todolist, setTodolist] = useState([
        {
            id: Math.random(),
            text: "Learn React",
            isChecked: false
        },
        {
            id: Math.random(),
            text: "Learn Redux",
            isChecked: false
        }
    ]);
    const onClear = () => {
        todolist.filter(todo => !todo.isChecked)
    };
    return (
        <div className="App">
            <div className="title">todos</div>
            <div className="Todo-container">
                <AddToDo todos={todolist} setTodolist={setTodolist}></AddToDo>
                <ToDoList todos={todolist}></ToDoList>
                <ToDoFooter todos={todolist} onClear={onClear}></ToDoFooter>
            </div>
        </div>
    )
}

export default App;