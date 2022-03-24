import { MouseEventHandler } from "react"
import './Button.css'

type ButtonProps = {
    text: string,
    onclick: MouseEventHandler
}


export function Button(props: ButtonProps) {
    return (
        <button onClick={props.onclick}>{props.text}</button>
    )
}