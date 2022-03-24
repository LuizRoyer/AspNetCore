import React, { Component } from "react";

export default class Count extends Component {

    state = {}

    //para executar um processo antes de carregar a tela
    componentWillMount() {
        console.log("executando antes de renderizar")
    }

    //para executar um processo depois de carregar a tela
    componentDidMount() {
        console.log("executando depois de renderizar")
    }



    render() {
        return (
            <div>
                <p />
                <button onClick={this.props.press}>{this.props.children}</button>
            </div>
        )
    }
}