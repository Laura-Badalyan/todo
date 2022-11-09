import React, {useReducer} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";
import "./App.css"

const App = () => {

    const [todos, dispatch] = useReducer(reducer, []);

    function reducer(state,action) {
        if(action.type === "add"){
            return [
                ...state,
                {
                    id:Math.random(),
                    text: action.payload.text,
                    isCompleted: false
                }
            ]
        }
        else if (action.type === "delete"){
            return state.filter((t) => t.id !== action.payload.id);
        }
        else if (action.type === "change"){
            return state.map((todo) => {
                if (todo.id === action.payload.newTodo.id) {
                    return {
                        ...todo,
                        isCompleted: action.payload.newTodo.isCompleted
                    };
                } else {
                    return todo;
                }
            })
        }
        else if (action.type === "onClearCompleted"){
            return state.filter((todo) => !todo.isCompleted)
        }
    }

    return (
        <div className="App Todo-container">
            <h1>TODO LIST</h1>
            <TodoForm
                onAdd={(text) => {
                    dispatch({
                            type: "add",
                            payload: {
                                id: Math.random(),
                                text: text,
                                isCompleted: false
                            }
                        });
                }}
            />
            <TodoList
                      todos={todos}
                      onDelete={(todo) => {
                          dispatch({
                              type: "delete",
                              payload: {
                                  id: todo.id
                              }
                          });
                      }}
                      onChange={(newTodo) => {
                          dispatch({
                              type: "change",
                              payload: {
                                  newTodo: newTodo
                              }
                          });
                      }}
            />
            <TodoFooter
                className="ToDoFooter"
                todos={todos}
                onClearCompleted={() => {
                    dispatch({
                        type: "onClearCompleted"
                    });
                }
                }
            />
        </div>
    )
};

export default App;
