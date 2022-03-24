import React from 'react';
import { render } from 'react-dom';

import Button from './components/Button';
import Count from './components/Count';

class App extends React.Component {

  state = {
    count: 0,
    negative: 0,
    name: ''
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeField = (event) => {
    // pega o imput do campo e coloca no parametro nome
    this.setState({
      name: event.target.value
    })
  }

  subtraction = () => {
    this.setState({
      negative: this.state.negative - 1
    })
  }


  render() {
    return (
      <div>
        <h1>  try old react</h1>
        <div>
          <h6> components stateLess </h6>

          <h6>Total de Votos contra {this.state.negative}</h6>
          <Count press={this.subtraction}>Vote to Subtraction </Count>



        </div>
        <div>
          <h6> components stateFull</h6>
          <p />
          <input onChange={this.changeField} />

          <br />
          Nome :{this.state.name}
          <h6>Total de Votos {this.state.count}</h6>
          <Count press={this.add}>Vote to Add</Count>

          <Button title="first button" description="just old version ">button type</Button>
          <Button title="required">Other</Button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));