import react from 'react'


const TaskComponent = ( props ) => {

  return <div>
    <span> { props.text }</span>
    <button onClick={ () => props.deleteFn( props.text ) }> - </button>
  </div>

}


export default TaskComponent

