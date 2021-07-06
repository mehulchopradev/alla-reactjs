import CalculatorForm from '../components/calculator-form/calculator-form.component';
import CalcResults from '../components/calc-results/calc-results.component';
import { Component } from 'react';

class Calculator extends Component {

  constructor() {
    super();

    console.log('constructor()');

    this.state = {
      firstNo: '',
      secondNo: '',
      ans: '',
      operation: '',
    }
  }

  // lifecycle methods (class based components)
  async componentDidMount() {
    // api calls for the data ?
    console.log('componentDidMount()');

    const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    this.setState(jsonResponse);
  }

  componentDidUpdate() {
    // whenever state/props change in a component
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    // clear up/close resources
    console.log('componentWillUnmount()');
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    // the above will cause render() to run again
  }

  handleOperationChange = ({ target: { value } }) => {
    this.setState({
      operation: value
    }); // render
  }

  handleAns = ans => {
    this.setState({
      ans,
    }) // render
  }

  render() {
    console.log('render()');
    return (
      <div className='calculator'>
        <CalculatorForm
          firstNo={this.state.firstNo}
          secondNo={this.state.secondNo}
          ans={this.state.ans}
          operation={this.state.operation}
          handleChange={this.handleChange}
          handleOperationChange={this.handleOperationChange}
          handleAns={this.handleAns}
        />
        <CalcResults
          firstNo={this.state.firstNo}
          secondNo={this.state.secondNo}
          operation={this.state.operation}
          ans={this.state.ans}
        />
      </div>
    )
  }
}

export default Calculator;