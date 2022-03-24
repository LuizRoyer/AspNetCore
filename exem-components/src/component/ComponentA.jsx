import React from "react"

export default props=>{
    return(
        <div>
            Componente A
           <div>{props.children}</div>
        </div>
    )
}