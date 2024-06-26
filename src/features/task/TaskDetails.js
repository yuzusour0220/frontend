import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedTask } from './taskSlice'
import styles from './TaskDetails.module.css'
const TaskDetails = () => {
    const selectedTask = useSelector(selectSelectedTask)
  return (
    <div className={styles.details}>
        {selectedTask && (
            <div>
            <h2>{selectedTask.title}</h2>
            <p>Created at</p>
            <h3>{selectedTask.created_at}</h3>
            <p>Updated at</p>
            <h3>{selectedTask.updated_at}</h3>
            </div>
        )}
    </div>
  )
}

export default TaskDetails