import { useState } from 'react'
import TaskDb from '../db/Task'


// ({ refreshTaskListFn }) is an example of deconstruction
const AddTaskBar = ( { refreshTaskListFn } ) => {
    let [ inputValue, setInputValue ] = useState( '' )

    const updateInput = ( value ) => {

        setInputValue( value )
    }

    function addTask() {
        if ( inputValue === '' ) {
            return
        }
        TaskDb.add( inputValue )
        setInputValue( '' )
        refreshTaskListFn()
    }

    return [
        <input
            className="add-task-input"
            value={ inputValue }
            onChange={ ( { target: { value } } ) => updateInput( value ) }
            onKeyUp={ ( { key } ) => key === 'Enter' ? addTask() : null }
        />,
        <button onClick={ () => addTask() }> + </button>
    ]
}

export default AddTaskBar