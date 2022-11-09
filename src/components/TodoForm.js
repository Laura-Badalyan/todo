import React from "react";
import {useState} from "react";

function TodoForm({onAdd}) {
    const [text, setText] = useState("");

    return (
        <form className="AddToDo"
              onSubmit={(e) => {
                  e.preventDefault();
                  if (text) {
                      onAdd(text);
                      setText("");
                  }
              }}>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button>Add</button>
        </form>
    );
};

export default TodoForm;