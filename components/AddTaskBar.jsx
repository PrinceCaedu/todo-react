import { useState } from 'react'
import Task from '../pages/Task'

const AddTaskBar = ( props ) => {
    let [ val, setValue ] = useState( '' )
    
    const updateInput = ( value ) => {
        setValue( value )
    }

    function addTask () {
        Task.add( val )
        setValue( '' )
        // setTaskList( Task.getAll() )
    }

    console.log( props )
    return <div className="add-task-container">
        <input
            value={ val }
            onChange={ ( e ) => updateInput( e.target.value ) }
        />
        <button onClick={ () => addTask() }> + </button>
    </div>
}

export default AddTaskBar