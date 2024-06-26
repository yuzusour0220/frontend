import React, { useEffect } from "react";
import styles from "./TaskList.module.css";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { fetchAsyncGet, selectTasks } from "./taskSlice";
import { fetchAsyncProf } from "../login/loginSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet());
      await dispatch(fetchAsyncProf());
    };
    fetchTaskProf();
  }, [dispatch]);
  return (
    <div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
