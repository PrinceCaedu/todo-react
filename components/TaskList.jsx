import { useState } from 'react'
import { Task } from "./index"
import TaskDb from '../db/Task'


//? deconstruction: finds values in an object whose keys match the argument names here
function TaskList( { taskList, refreshTaskListFn } ) {

    const [ show, setShow ] = useState( true )


    function deleteTask( id ) {
        TaskDb.delete( id )
        refreshTaskListFn()
    }

    function toggleList() {
        setShow( !show )
    }

    return (
        <div className="task-list">
            <div>
                <button
                    className="task-list-show-button"
                    onClick={ () => toggleList() }
                >
                    { show ? "hide" : "show" }
                </button>
            </div>
            <div className="task-list-tasks-container">
                {
                    show && taskList.map( ( task, i ) => {

                        const props = {
                            id: task.id,
                            text: task.text,
                            deleteFn: deleteTask
                        }

                        return <Task key={ i } { ...props } />
                    } )
                }
            </div>
        </div>
    )
}


export default TaskList