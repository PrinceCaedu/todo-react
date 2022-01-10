import styles from '../styles/CornerData.module.css'

export default function CornerData( { date, type, startingBalance, updateDataFn } ) {

    function handleChange( { target: { value } } ) {
        updateDataFn( { type, startingBalance: value } )
    }

    function handleSelect( { target: { value } } ) {
        updateDataFn( { type: value, startingBalance } )
    }


    return (
        <div className={ styles.container }>
            <div>{ date }</div>
                <select value={ type } onChange={ handleSelect } >
                    <option>Open</option>
                    <option>Mid</option>
                    <option>Close</option>
                </select>
                <input
                    value={ startingBalance }
                    onChange={ handleChange }
                />
        </div>
    )
}