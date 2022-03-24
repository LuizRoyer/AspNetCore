import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

import Button from "./component/Button"
import ComponentA from "./component/ComponentA"
import ComponentB from "./component/ComponentB"

const Sum = (a, b) => alert(a + b);

const App = () => {
    return (
        <div className="app">
            Welcome to React
            <Button onClick={() => Sum(2, 5)} name="Click" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => Sum(7, 2)} name="Click 2" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)