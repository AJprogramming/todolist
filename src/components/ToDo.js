const ToDo = (props) => {
  const toDoItemClass = ["bold", "italic"];

  if (props.toDoItem.complete) {
    toDoItemClass.push("strike-through");
  }

  return (
    <div>
      <input
        onChange={(e) => {
          props.handleToggleToDoItemComplete(props.index);
        }}
        checked={props.toDoItem.complete}
        type="checkbox"
      ></input>
      {/* 
   classes need to have a "space" in the html (inside the join method)
  */}
      <span className={toDoItemClass.join(" ")}>{props.toDoItem.text}</span>
      <button
        onClick={(e) => props.handleDelete(props.index)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
