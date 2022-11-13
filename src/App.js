import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [createToDo, setCreateToDo] = useState("");
  // change the [] into a '' at the end of project to see if it matters
  const [toDoList, setToDoList] = useState([]);

  const handleCreateToDoSubmit = (e) => {
    e.preventDefault();

    if (createToDo.length === 0) {
      return;
    }

    const toDoListItem = {
      text: createToDo,
      complete: false,
    };
    // there might need to be a space between the three dots and 'toDoList'
    setToDoList([...toDoList, toDoListItem]);
    setCreateToDo("");
  };

  /*
  the index is always the second parameter so even though we aren't
  using "toDoItem" parameter, we need it to let JS know which is the index (We can put an underscore under
  the first parameter to get rid of the greyout look)
  */

  const handleDelete = (deleteIndex) => {
    const filtertoDoList = toDoList.filter((_toDoItem, index) => {
      return index !== deleteIndex;
    });
    setToDoList(filtertoDoList);
  };

  const handleToggleToDoItemComplete = (index) => {
    const updatedToDoItems = toDoList.map((toDoItem, ind) => {
      if (index === ind) {
        toDoItem.complete = !toDoItem.complete;
        /*
        Here we are telling it to change everything in the toDoItem's key pairs, specifically the "complete" key pairs to become the opposite of what it currently is
        */
        // const updatedToDoItem = {
        //   ...toDoListItem,
        //   complete: !toDoListItem.complete,
        // };
        // return updatedToDoItem;
      }
      return toDoItem;
    });

    setToDoList(updatedToDoItems);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(e) => {
          handleCreateToDoSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setCreateToDo(e.target.value);
          }}
          value={createToDo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {toDoList.map((toDoItem, index) => {
        /*
        the first toDoItem is from our ToDo.js component span, the one in the
        curly brackets (our value) is from our ToDoList.map from right above
        */
        return (
          <ToDo
            key={index}
            index={index}
            toDoItem={toDoItem}
            handleToggleToDoItemComplete={handleToggleToDoItemComplete}
            handleDelete={handleDelete}
          ></ToDo>
        );
      })}
    </div>
  );
}

export default App;
