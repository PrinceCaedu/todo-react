import TaskDb from '../db/Task'
import Task from "./TaskComponent"


function TaskList( { show, taskList, refreshTaskListFn } ) {

    function deleteTask( text ) {
        TaskDb.delete( text )
        refreshTaskListFn()
    }

    if ( show ) {
        return taskList.map( ( task, i ) => {

            const props = {
                key: i,
                text: task.text,
                deleteFn: deleteTask
            }

            return <Task { ...props } />
        } )
    } else {
        return []
    }
}


export default TaskList