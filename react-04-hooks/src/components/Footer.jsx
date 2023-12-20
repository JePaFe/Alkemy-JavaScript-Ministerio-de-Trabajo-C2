import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function Footer() {
  const { tasks } = useContext(TaskContext);

  return (
    <footer>
      <h2>Footer</h2>
      <p>Cantidad de tareas: {tasks.length} </p>
    </footer>
  );
}

export default Footer;
