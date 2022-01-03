import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Task = ( { id, text, deleteFn } ) => {

  return (
    <div className="task-container">
      <span> { text }</span>
      <button
        className="delete-task-btn"
        onClick={ () => deleteFn( id ) }
      >
        <FontAwesomeIcon icon={ faTrash } />
      </button>
    </div>
  )
}


export default Task

