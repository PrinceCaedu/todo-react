import styles from '../styles/PaidOut.module.css'
import { useState } from 'react'
import Box from './Box'
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons"
export default function PaidOut ( props ) {

    const pretendState = {
        total: 0,
        amounts: [42, 35, 44]
    }


    let { total, amounts } = pretendState
    // const { total, amounts, updateDataFn } = props
    console.log(total, amounts)

    function updateTotal (){

        total = 0

        function addAmount (takeAmount){

            total += takeAmount

        }

        amounts.map (addAmount)

    }

    function showList () {
        updateTotal()
        return (
            <div className={ styles.rectangle } >
                { amounts.map( amount => (
                <div>
                    <input value={amount} className={ styles.inputStyle } />
                </div>
                
        
                ) )}
                {total}
            </div>

        )


    }

    return showList()

}

