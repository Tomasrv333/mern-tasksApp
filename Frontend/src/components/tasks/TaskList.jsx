import React, { useEffect, useState } from "react";
import classes from '../../Scss/TaskList.module.scss'

function TaskList() {
    const [taskList, setTaskList] = useState([])

    const getTasks = async () => {
        try{
            const {data} = await axios.get('/api/tasks/myTasks');
            setTaskList(
                data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
            )
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            <div className={classes.topBar}>
                <button type="button" className={classes.addNew}>Add new</button>
            </div>
        </div>
    )
}

export default TaskList