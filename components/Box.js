

function Box( props ) {

    if (props.show === true) {

        
        return (
            <div style={{
                width: "200px", 
                height: "200px",
                backgroundColor: props.color,
                color: props.color==="black" ? "white" : "black"
            }}>
            {props.text}
        </div>
    )
    } else {
        return <h1>Nope</h1>
    }
    
}

export default Box