import { v4 as uuidv4 } from 'uuid'
import { store } from './store'

const Task = {
    add: text => {

        let newTask = { 
                id: uuidv4(),
                text,
            }

        let taskList = store.load()

        taskList.push( newTask )
        store.save( taskList )
    },

    getAll: () => store.load(),

    update: () => {

    },

    delete: ( id ) => {
        let list = store.load()
        let newList = list.filter( ( task ) => task.id !== id )

        store.save( newList )
    }
}

export default Task