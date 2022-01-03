//? decoupled the store from the app by refactoring it to be more generic 

const appName = 'to-do-app'

const store = {
    save: ( data ) => {
        localStorage.setItem( appName, JSON.stringify( data ) )
    },
    load: () => {
        let isClientSide = typeof window !== 'undefined'

        if ( isClientSide ) {
            let data = JSON.parse( localStorage.getItem( appName ) )
            return data ? data : []
        }

    },
}

export { store }
