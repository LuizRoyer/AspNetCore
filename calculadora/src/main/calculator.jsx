import { Component } from 'react'
import './calculator.css'

import Button from '../components/button'
import Display from '../components/display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setFunc = this.setFunc.bind(this)
        this.setOption = this.setOption.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }
    setFunc(operation) {

        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperator = this.state.operation

            const values = [...this.state.values]
            values[0] = resultOperation(values[0], currentOperator, values[1])
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    setOption(opt) {
        // para evitar que o usuario coloque 2 pontos
        if (opt === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + opt
        this.setState({ displayValue, clearDisplay: false })

        if (opt !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [... this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className='calc'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} ac />
                <Button label="/" click={this.setFunc} operation />
                <Button label="7" click={this.setOption} />
                <Button label="8" click={this.setOption} />
                <Button label="9" click={this.setOption} />
                <Button label="*" click={this.setFunc} operation />
                <Button label="4" click={this.setOption} />
                <Button label="5" click={this.setOption} />
                <Button label="6" click={this.setOption} />
                <Button label="-" click={this.setFunc} operation />
                <Button label="1" click={this.setOption} />
                <Button label="2" click={this.setOption} />
                <Button label="3" click={this.setOption} />
                <Button label="+" click={this.setFunc} operation />
                <Button label="0" click={this.setOption} double />
                <Button label="." click={this.setOption} />
                <Button label="=" click={this.setFunc} operation />
            </div>
        )
    }
}

function resultOperation(number, op, number1) {
    switch (op) {
        case '/': return number / number1
        case '*': return number * number1
        case '+': return number + number1
        case '-': return number - number1
    }
}
