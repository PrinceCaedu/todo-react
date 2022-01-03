import styles from '../styles/TaskList.module.css'
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

    function renderTasks() {
        if ( show ) {
            return (
                <div className={ styles.taskcontainer } >
                    {
                        taskList.map( ( task, i ) => {

                            const props = {
                                id: task.id,
                                text: task.text,
                                deleteFn: deleteTask
                            }

                            return <Task key={ i } { ...props } />
                        } )
                    }
                </div >
            )
        }
    }

    return (
        <div className={ styles.container }>
            <div>
                <button
                    className={ styles.showbutton }
                    onClick={ () => toggleList() }
                >
                    { show ? "hide" : "show" }
                </button>
            </div>
            { renderTasks() }

        </div>
    )
}


export default TaskList