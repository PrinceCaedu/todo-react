import TaskDb from '../db/Task'
import Task from "./TaskComponent"


function TaskList( { show, taskList, refreshTaskListFn } ) {

    function deleteTask( id ) {
        TaskDb.delete( id )
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