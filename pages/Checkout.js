import Head from 'next/head'
import styles from '../styles/Checkout.module.css'

export default function Checkout() {

    return (
        <div>
            <Head>
                <title></title>
                <meta />
                <link rel="icon" href="" />
            </Head>

            <div className={ styles.grid }>

                <div className={ styles.dataone } ></div>
                <div className={ styles.employees } ></div>
                <div className={ styles.paidouts } ></div>
                <div className={ styles.cuts } ></div>
                <div className={ styles.startdrawer } ></div>
                <div className={ styles.enddrawer } ></div>
                <div className={ styles.breakdown } ></div>



            </div>


        </div>
    )
}