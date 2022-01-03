
const TaskComponent = ( { id, text, deleteFn } ) => {

  return (
    <div className="task-container">
      <span> { text }</span>
      <button
        className="delete-task-btn"
        onClick={ () => deleteFn( id ) }
      >
        -
      </button>
    </div>
  )
}


export default TaskComponent

