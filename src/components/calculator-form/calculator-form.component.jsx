import './calculator-form.styles.scss';

function CalculatorForm() {
  return (
    <div className='calculator-form'>
      <div className='row'>
        <input type="text" name="firstNo" placeholder="Enter first no" value="5"/>
        <select name="operation">
          <option>+</option>
          <option>-</option>
          <option>*</option>
        </select>
        <input type="text" name="secondNo" placeholder="Enter second no" value="6"/>
      </div>
      <div className='row'>
        <button>Calculate</button>
      </div>
      <div className='row'>
        <input type="text" name="ans" value="11" readOnly/>
      </div>
    </div>
  )
}

export default CalculatorForm;