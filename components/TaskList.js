import { useState } from 'react'
import Task from '../pages/Task'
import TaskComponent from "./TaskComponent"



function TaskList ( props ) {
    let [ taskList, setTaskList ] = useState( Task.getAll() )

    function deleteTask ( text ) {
        Task.delete( text )
        setTaskList( Task.getAll() )
    }
    if ( props.show ) {

        return (
            <div className="task-list-container">
                { taskList &&
                    taskList.map( ( task, i ) => {
                        return <TaskComponent key={ i } text={ task.text } deleteFn={ deleteTask } />
                    } )
                }
            </div>

        )
    } else {
        return []
    }
}


export default TaskList