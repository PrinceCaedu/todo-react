import styles from './Employees.module.css'

export default function Employees( props ) {

    return (
        <>
            <h3>Employees</h3>
            <div className={ styles.table }>
                <div className={ styles.row }>
                    <span>Name</span>
                    <span>Cash Sales</span>
                    <span>CC Tips</span>
                </div>
                <div className={ styles.row }>
                    <input />
                    <input />
                    <input />
                </div>
            </div>
        </>
    )
}