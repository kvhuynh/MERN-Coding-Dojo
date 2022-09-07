export const Todo = (props) => {

    const todoClasses =["bold"];

    if (props.todo.isComplete) {
      todoClasses.push("line-through")
    }
    return (
        <div>
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <input onChange={(e) => {props.handleCompletion(props.i)}} checked={props.todo.isComplete} type="checkbox" />
        <button onClick={(e) => {props.handleDeleteItem(e, props.i)}}>delete</button>
      </div>)
      }



export default Todo;