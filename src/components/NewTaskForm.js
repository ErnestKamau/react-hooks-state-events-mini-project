import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(CATEGORIES[0]);

  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new task data back to the parent
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    setTaskText(""); // Reset text field after submission
    setTaskCategory(CATEGORIES[0]); // Reset category to default
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

