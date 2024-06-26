import React from "react";
import styles from "./TaskInput.module.css";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  editTask,
  selectEditedTask,
  fetchAsyncCreate,
  fetchAsyncUpdate,
} from "./taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const editedTask = useSelector(selectEditedTask);
  const handleInpugtChange = (e) => {
    editedTask.id === 0
      ? dispatch(editTask({ id: 0, title: e.target.value }))
      : dispatch(editTask({ id: editedTask.id, title: e.target.value }));
  };
  const isDisabled = editedTask.title.length === 0;
  const createClicked = () => {
    dispatch(fetchAsyncCreate(editedTask));
    dispatch(editTask({ id: 0, title: "" }));
  };
  const updateClicked = () => {
    dispatch(fetchAsyncUpdate({editedTask}));
    dispatch(editTask({ id: 0, title: "" }));
  };

  return (
    <div>
      <input
        type="text"
        className={styles.taskInput}
        placeholder="Please input task"
        value={editedTask.title}
        onChange={handleInpugtChange}
      />
      <div className={styles.switch}>
        {editedTask.id === 0 ? (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={createClicked}
            color="primary"
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={updateClicked}
            color="primary"
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskInput;
