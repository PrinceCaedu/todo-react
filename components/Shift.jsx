import { useReducer } from 'react'
import styles from '../styles/Shift.module.css'

import { Breakdown, CornerData, PaidOut } from '../components'


const employeeData = {
    name: '',
    cashSales: 0,
    totalTips: 0,
}

const drawerCountData = {
    balance: 0,
    variance: 0,
    counts: {
        pennies: [ 0, 0.00 ],
        nickles: [ 0, 0.00 ],
        dimes: [ 0, 0.00 ],
        quarters: [ 0, 0.00 ],
        ones: [ 0, 0.00 ],
        twos: [ 0, 0.00 ],
        fives: [ 0, 0.00 ],
        tens: [ 0, 0.00 ],
        twenties: [ 0, 0.00 ],
        fifties: [ 0, 0.00 ],
        hundreds: [ 0, 0.00 ],
    }
}

const initialPaidOutsData = {
    total: 0.0,
    amounts: []
}

const shiftData = {
    date: "Friday January 7, 2022",
    type: 'Open',

    employees: {
        totalCashSales: 0,
        totalTips: 0,
        employees: [],
    },
    paidOuts: { ...initialPaidOutsData },
    cuts: [],
    startDrawerCount: Object.assign( {}, drawerCountData ),
    endDrawerCount: Object.assign( {}, drawerCountData ),

    totalCash: 0,   //? the sum of the starting balance and the total cash sales from all employees
    totalDeficit: 0,    //? the sum of all employees tips and all paid outs
    expectedEndingBalance: 0,   //? the result of total cash - total deficit
    endingBalance: 0,   //? the balance of the end of shift drawer count
    startingBalance: 0,    //? from user input, is also the expected balance of the start of shift drawer count
}

const breakdownData = ({ 
    totalCash, 
    totalDeficit, 
    expectedEndingBalance, 
    endingBalance, 
    startingBalance,
}) => ({
    totalCash, 
    totalDeficit, 
    expectedEndingBalance, 
    endingBalance,
    startingBalance,
})

function initialState() {
    return { ...shiftData }
}

function reducer( state, action ) {
    switch ( action.type ) {
        case 'updateCornerData': {
            const newState = { ...state, ...action.data }
            return newState
        }

        case 'updatePaidOuts': {
            const newState = { ...state, paidOuts: { ...action.data } }
            // newState.paidOuts = { ...action.data }
            return newState
        }

        default:
            return state;
    }
}




export default function Shift() {

    const [ state, dispatch ] = useReducer( reducer, initialState() )


    return (
        <div className={ styles.grid }>

            <div className={ styles.dataone } >
                <CornerData
                    date={ state.date }
                    type={ state.type }
                    startingBalance={ state.startingBalance }
                    updateDataFn={ data => dispatch( { type: 'updateCornerData', data } ) }
                />
            </div>
            <div className={ styles.employees } ></div>
            <div className={ styles.paidouts } >
                <PaidOut
                    total={ state.paidOuts.total }
                    amounts={ state.paidOuts.amounts }
                    updateDataFn={ data => dispatch( { type: 'updatePaidOuts', data } ) }
                />
            </div>
            <div className={ styles.cuts } ></div>
            <div className={ styles.startdrawer } ></div>
            <div className={ styles.enddrawer } ></div>
            <div className={ styles.breakdown } >
                <Breakdown { ...breakdownData( state ) } />
            </div>
        </div>
    )
}