import { v4 as uuidv4 } from 'uuid'


const store = {
    save: ( list ) => {
        localStorage.setItem( "taskList", JSON.stringify( list ) )
    },
    load: () => {
        let taskList = typeof window === 'undefined'
            ? []
            : JSON.parse( localStorage.getItem( "taskList" ) )

        return taskList
    },
}



const Task = {
    add: ( text ) => {

        let add = { text, id: uuidv4() }
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

    delete: () => {

    }
}

export default Task