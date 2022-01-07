import styles from '../styles/AddTaskBar.module.css'
import { useState } from 'react'
import TaskDb from '../db/Task'

const AddTaskBar = ( { refreshTaskListFn } ) => {
    let [ inputValue, setInputValue ] = useState( '' )

    function addTask() {
        TaskDb.add( inputValue )
        setInputValue( '' )
        refreshTaskListFn()
    }

    function handleChange({ target: { value }}) {
        setInputValue( value )
    }

    function handleKeyUp({ key }) {
        const enterWasPressed = key === 'Enter'

        if ( enterWasPressed ) {
            addTask()
        }
    }

    function handleClick() {
        if ( inputValue === '' ) {
            return
        }
        
        addTask()
    }

    return (
        <div className={ styles.container }>
            <input
                className={ styles.input }
                value={ inputValue }
                onChange={ handleChange }
                onKeyUp={ handleKeyUp }
            />
            <button
                className={ styles.btn }
                onClick={ handleClick }
            >
                +
            </button>
        </div>
    )
}

export default AddTaskBar
