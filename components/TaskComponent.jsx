
const TaskComponent = ({ text, deleteFn }) => {

  return <div className="task-container">
    <span> { text }</span>
    <button className="delete-task-btn"
      onClick={ () => deleteFn( text ) }
    >
      -
    </button>
  </div>

}


export default TaskComponent

