import { useState } from 'react'
import styles from '../styles/Shift.module.css'


const employeeData = {
    name: '',
    cashSales: 0,
    totalTips: 0,
}

const drawerCountData = {
    expectedBalance: 0,
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

const shiftData = {
    date: Date.now(),
    type: null,
    employees: {
        totalCashSales: 0,
        totalTips: 0,
        employees: [],
    },
    paidOuts: { total: 0, amounts: [] },
    cuts: [],
    startDrawerCount: Object.assign( {}, drawerCountData ),
    endDrawerCount: Object.assign( {}, drawerCountData ),
    data: {
        totalCash: 0,   //? the sum of the starting balance and the total cash sales from all employees
        totalDeficit: 0,    //? the sum of all employees tips and all paid outs
        expectedEndingBalance: 0,   //? the result of total cash - total deficit
        endingBalance: 0,   //? the balance of the end of shift drawer count
        startingBalance: 0,    //? from user input, is also the expected balance of the start of shift drawer count
    },
}

function createState() {
    const state = Object.assign( {}, shiftData )

    return state
}


/*
    TODO: look into useReducer, most likely better than useState and tons of custom functions
    
*/

export default function Shift() {

    // get data if data exists and load into state
    // if data does not exist, create empty data object and load into state
    const blankState = createState()

    const [ state, setState ] = useState( blankState )





    return (
        <div className={ styles.grid }>

            <div className={ styles.dataone } ></div>
            <div className={ styles.employees } ></div>
            <div className={ styles.paidouts } ></div>
            <div className={ styles.cuts } ></div>
            <div className={ styles.startdrawer } ></div>
            <div className={ styles.enddrawer } ></div>
            <div className={ styles.breakdown } ></div>



        </div>
    )
}