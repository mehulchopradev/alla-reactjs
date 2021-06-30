import CalculatorForm from '../components/calculator-form/calculator-form.component';
import CalcResults from '../components/calc-results/calc-results.component';
import { Component } from 'react';

class Calculator extends Component {

  constructor() {
    super();

    this.state = {
      firstNo: '10',
      secondNo: '20',
      ans: '30',
      operation: '+',
    }
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