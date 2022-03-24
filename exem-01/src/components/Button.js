import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {

    static defaultProps = {
        title: 'Null',
        description: 'undefined'
    }

    // declara os parametros que o componente precisa 
    static propTypes = { 
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>

                <button>
                    {this.props.children}
                </button>
            </div>)
    }


}
