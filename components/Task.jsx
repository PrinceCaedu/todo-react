import styles from '../styles/Task.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Task = ( { id, text, deleteFn } ) => {

  return (
    <div className={styles.container}>
      <span className={ styles.text }> { text }</span>
      <button
        className={ styles.deletebtn }
        onClick={ () => deleteFn( id ) }
      >
        <FontAwesomeIcon icon={ faTrash } />
      </button>
    </div>
  )
}


export default Task

