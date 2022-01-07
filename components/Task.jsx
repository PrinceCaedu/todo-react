import styles from '../styles/Task.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ( { id, text, deleteFn } ) => {

  function handleClick() {
    deleteFn( id )
  }

  return (
    <div className={styles.container}>
      <span className={ styles.text }> { text }</span>
      <button
        className={ styles.deletebtn }
        onClick={ handleClick }
      >
        <FontAwesomeIcon icon={ faTrash } />
      </button>
    </div>
  )
}

export default Task
