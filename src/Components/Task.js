import { useState } from 'react';

export const Task = ({ createTask }) => {

  const [newTask, setNewTask] = useState("")

  const handleSubmit = (e) => {
    if (newTask.trim() === "") {
      alert("Please enter a task name")
      return
    }

    e.preventDefault();
    createTask(newTask);
    setNewTask("")
  }

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex align-items-center">
        <button className="btn btn-primary btn-sm" type="submit">
          Save task
        </button>
      </div>
    </form>
  )
}
