import { Component } from 'react';
import './calculator-form.styles.scss';

class CalculatorForm extends Component {

  constructor(props) {
    super(props);

    // state is available as a attribute in the Component class
    // initial state
    this.state = {
      isDisabled: false,
      firstNo: props.egFirstNo,
      secondNo: props.egSecondNo,
      ans: props.egAns,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      isDisabled: !value || isNaN(parseInt(value))
    });
    // the above will cause render() to run again
  }

  handleOperationChange = ({ target: { value } }) => {
    this.operation = value;
  }

  calculate = () => {
    const { operation } = this;
    const { firstNo, secondNo } = this.state;

    const iFirstNo = parseInt(firstNo);
    const iSecondNo = parseInt(secondNo);

    let ans;
    switch(operation) {
      case '+': ans = iFirstNo + iSecondNo;
        break;
      case '-': ans = iFirstNo - iSecondNo;
        break;
      default: ans = iFirstNo * iSecondNo;
    }

    this.setState({
      ans,
    });
  }

  render() {
    // const { egFirstNo, egSecondNo, egAns } = this.props; // props is available as a attribute in the Component class

    return (
      <div className='calculator-form'>
        <div className='row'>
          <input type="text" data-testid="firstNo" name="firstNo" onChange={this.handleChange} placeholder="Enter first no" value={this.state.firstNo}/>
          <select name="operation" onChange={this.handleOperationChange}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
          </select>
          <input type="text" data-testid="secondNo" name="secondNo" onChange={this.handleChange} placeholder="Enter second no" value={this.state.secondNo}/>
        </div>
        <div className='row'>
          <button data-testid="calculate" onClick={this.calculate} disabled={this.state.isDisabled}>Calculate</button>
        </div>
        <div className='row'>
          <input type="text" data-testid="ans" name="ans" value={this.state.ans} readOnly/>
        </div>
      </div>
    )
  }
}

export default CalculatorForm;