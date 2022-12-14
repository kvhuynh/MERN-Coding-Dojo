import "./App.css"

import Todo from "./components/Todo";

import React, { useState } from "react";

function App() {
  // input box
  const [newTodo, setNewTodo] = useState("");

  const [currentListTodos, setCurrentListTodos] = useState([]);

  const handleNewTodo = (e) => {
    e.preventDefault() // always prevent default when submmiting form

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      isComplete: false
    }

    setCurrentListTodos([...currentListTodos, todoItem]);
    setNewTodo("");
  }

  const handleDeleteItem = (e, index) => {
    const filteredTodos = currentListTodos.filter((todo, i) => {
      return i !== index
    });

    setCurrentListTodos(filteredTodos)
  }

  const handleCompletion = (index) => {
    const updatedTodos = currentListTodos.map((todo, i) => {
      if (index === i) {
        // todo.complete = !todo.complete;
        const alteredTodo = {...todo, isComplete: !todo.isComplete};
        return alteredTodo
      }
      return todo;
    });

    setCurrentListTodos(updatedTodos)
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        handleNewTodo(e);
      }}>
        <input onChange={(e) => { setNewTodo(e.target.value)}} type="text" value={newTodo} />
        <br />
        <button>add</button>
      </form>

      {currentListTodos.map((todo, i) => {
        // const todoClasses =["bold"];

        // if (todo.isComplete) {
        //   todoClasses.push("line-through")
        // }

        return ( 
          <Todo key={i} todo={todo} handleCompletion={handleCompletion} handleDeleteItem={handleDeleteItem} i={i}></Todo>
        )
      })}


    </div>
  );
}

export default App;
