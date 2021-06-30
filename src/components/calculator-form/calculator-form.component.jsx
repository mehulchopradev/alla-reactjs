import './calculator-form.styles.scss';

function CalculatorForm ({ firstNo, secondNo, ans, operation, handleOperationChange, handleChange, handleAns }) {

  const calculate = () => {
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

    handleAns(ans);
  }

  const isDisabled = !firstNo || !secondNo || isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));

  return (
    <div className='calculator-form'>
      <div className='row'>
        <input type="text" data-testid="firstNo" name="firstNo" onChange={handleChange} placeholder="Enter first no" value={firstNo}/>
        <select name="operation" onChange={handleOperationChange}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
        </select>
        <input type="text" data-testid="secondNo" name="secondNo" onChange={handleChange} placeholder="Enter second no" value={secondNo}/>
      </div>
      <div className='row'>
        <button data-testid="calculate" disabled={isDisabled} onClick={calculate}>Calculate</button>
      </div>
      <div className='row'>
        <input type="text" data-testid="ans" name="ans" value={ans} readOnly/>
      </div>
    </div>
  )
}

export default CalculatorForm;