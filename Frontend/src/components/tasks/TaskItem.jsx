import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import classes from '../../Scss/TaskItem.module.scss'

const TaskItem = ({task, deleteTask}) => {
    const [isCompleted, setIsCompleted] = useState(task.isCompleted)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckboxClick = async () => {
        try{
            setIsLoading(true)
            await axios.put(`/api/tasks/${task._id}`,{
                completed: !isCompleted,
            })
            setIsCompleted(!isCompleted)
            toast.success('Task updated')
        } catch(err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <tr className={classes.task_item}>
        <td className={classes.task_name}>
            <div className={classes.checkbox} role='checkbox' aria-checked onChange={handleCheckboxClick} disabled={isLoading}>
                <input type='checkbox' checked={isCompleted} tabIndex={-1} readOnly disabled={isLoading} />
            </div>
            <p>{task.title} </p>
        </td>
        <td className={classes.task_status}>{isCompleted ? 'Complete' : 'Incomplete'} </td>
        <td>
            <button className={classes.deleteBtn} type='button' onClick={() => deleteTask(task._id)}>Delete</button>
        </td>
    </tr>
  )
}

export default TaskItem