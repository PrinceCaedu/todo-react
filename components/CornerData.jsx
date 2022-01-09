import styles from '../styles/CornerData.module.css'

export default function CornerData( { date, type, startingBalance, updateDataFn } ) {

    function handleChange( { target: { value } } ) {
        updateDataFn( { type, startingBalance: value } )
    }

    function handleSelect( { target: { value } } ) {
        updateDataFn( { type: value, startingBalance } )
    }

    // const formattedDate = new Date( date ).toString()

    return (
        <div className={ styles.container }>
            <div>{ date }</div>
            <div>
                <select value={ type } onChange={ handleSelect } >
                    <option>Open</option>
                    <option>Mid</option>
                    <option>Close</option>
                </select>
            </div>
            <div>
                <input
                    value={ startingBalance }
                    onChange={ handleChange }
                />
            </div>
        </div>
    )
}