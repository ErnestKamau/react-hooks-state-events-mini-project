import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection change
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  // Handle deleting a task
  const handleDeleteTask = (taskText) => {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  };

  // Handle adding a new task
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleCategorySelect} 
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
