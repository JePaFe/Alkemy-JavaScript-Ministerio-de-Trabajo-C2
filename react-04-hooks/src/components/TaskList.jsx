import { useContext, useRef } from "react";
import TaskContext from "../context/TaskContext";
import Task from "./Task";

function TaskList() {
  //   const mensaje = useContext(TaskContext);
  const inputRef = useRef("");
  const parrafoRef = useRef("");
  const { tasks, addTask, countTaskRef } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Date.now(),
      title: inputRef.current.value,
    };
    addTask(task);
    inputRef.current.value = "";

    countTaskRef.current = tasks.length;
    parrafoRef.current.textContext = `Cantidad de tareas: ${countTaskRef.current}`;
  };

  return (
    <>
      <h2>Lista de tareas</h2>

      <p ref={parrafoRef}>Cantidad de tareas: {countTaskRef.current}</p>
      {/* <p>{mensaje}</p> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="tarea">Tarea: </label>
        <input type="text" ref={inputRef} id="tarea" required />
        <button type="submit">Crear</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <Task key={`task-${task.id}`} task={task} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
