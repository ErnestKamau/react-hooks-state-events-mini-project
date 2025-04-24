import React from "react";

function Task( { text, category, onDeleteTask } ) {


  function handleDeleteClick() {
    onDeleteTask(text); // using `text` to identify the task (as in App.js)
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
