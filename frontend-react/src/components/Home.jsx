import React, { useState } from "react";
import axios from "axios";

const Home = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const response = await axios.post("http://localhost:5000/submit", {
        text: task,
        completed: false,
      });

      addTask(response.data); // add task in manager
      setTask("");
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <h2>Simple Task Manager</h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter task here"
          value={task}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Add task</button><br /><br />
      </form>
    </div>
  );
};

export default Home;
