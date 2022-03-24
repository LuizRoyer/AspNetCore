import React from "react"

export default props=>{
    return(
        <div>
            Componente B
            <div>{props.children}</div>
        </div>
    )
}