import { useEffect, useRef, useState } from "react";
import TaskList from "./components/TaskList";
import TaskContext from "./context/TaskContext";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  // const texto = "Un texto del contexto";
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", completed: true },
    { id: 3, title: "Tarea 3", completed: false },
    { id: 6, title: "Tarea 6", completed: true },
    { id: 9, title: "Tarea 9", completed: false },
  ]);

  const countTaskRef = useRef(0);

  useEffect(() => {
    countTaskRef.current = tasks.length;
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const data = {
    tasks,
    addTask,
    countTaskRef,
  };

  return (
    <>
      <h1>App</h1>
      <TaskContext.Provider value={data}>
        <TaskList />
        <Footer />
      </TaskContext.Provider>
      {/* <Counter /> */}
    </>
  );
}

export default App;
