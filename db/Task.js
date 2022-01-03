import { v4 as uuidv4 } from 'uuid'


const store = {
    save: ( list ) => {
        localStorage.setItem( "taskList", JSON.stringify( list ) )
    },
    load: () => {
        let taskList = typeof window === 'undefined'
            ? []
            : JSON.parse( localStorage.getItem( "taskList" ) )

        return taskList ? taskList : []
    },
}



const Task = {
    add: ( text ) => {

        let add = { 
                id: uuidv4(),
                text,
            }

        let taskList = store.load()

        taskList.push( add )
        store.save( taskList )
    },

    getAll: () => {
        // let taskList = typeof window === 'undefined'
        //     ? []
        //     : JSON.parse( localStorage.getItem( "taskList" ) )
        // return taskList

        return store.load()
    },

    update: () => {

    },

    delete: ( id ) => {
        let list = store.load()
        let newList = list.filter( ( task ) => task.id !== id )

        store.save( newList )
    }
}

export default Task