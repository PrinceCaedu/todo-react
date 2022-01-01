import { useState } from 'react'
import TaskDb from '../db/Task'

const AddTaskBar = ({ refreshTaskListFn }) => {
    let [ val, setValue ] = useState( '' )

    const updateInput = ( value ) => {
        setValue( value )
    }

    function addTask() {
        TaskDb.add( val )
        setValue( '' )
        refreshTaskListFn()
    }

    return [
        <input
            value={ val }
            onChange={ ({ target: { value }}) => updateInput( value ) }
        />,
        <button onClick={ () => addTask() }> + </button>
    ]
}

export default AddTaskBar