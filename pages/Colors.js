import { useState } from 'react'

import Box from '../components/Box'


function Colors() {

    const [show, setShow] = useState(false)




    return (
        <div>
            <h1>COLORS</h1>

            <button onClick={() => setShow( !show ) } >Show Boxes</button>

            <div style={{display: "flex"}}>
                <Box show={show} color="black" text="yes" />
                <Box show={show } color="yellow" text="no"/>
                <Box show={show} color="pink" text="maybe"/>
            </div>
        </div>
    )
}

export default Colors