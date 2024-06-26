import React from "react";
import styles from "./App.module.css";
import { FaSignInAlt } from "react-icons/fa";
import TaskList from "./features/task/TaskList";
import TaskDetails from "./features/task/TaskDetails";
import TaskInput from "./features/task/TaskInput";
import Header from "./features/login/Header";

function App() {
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className={styles.ContainerTasks}>
      <div className={styles.appTasks}>
        <button onClick={Logout} className={styles.sighBtn}>
          <FaSignInAlt />
        </button>
        <Header />
        <TaskInput/>
        <TaskList />

      </div>
      <div className={styles.appDetails}>
        <TaskDetails />
      </div>
    </div>
  );
}

export default App;
