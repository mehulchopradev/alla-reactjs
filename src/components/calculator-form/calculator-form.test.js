import { render, screen, fireEvent, act } from '@testing-library/react';

import CalculatorForm from './calculator-form.component';

const selectors = {
  input: {
    first: 'firstNo',
    second: 'secondNo',
    ans: 'ans',
  },
  button: {
    calculate: 'calculate',
  }
}

function handleChange() {

}

describe('calculator-form test suite', () => {
  test('it renders the component in the right initial state', () => {
    render(<CalculatorForm firstNo="10" secondNo="20" ans="30" operation="+" handleChange={handleChange}/>);

    expect(screen.getByTestId(selectors.input.first)).toHaveValue('10');
    expect(screen.getByTestId(selectors.input.second)).toHaveValue('20');
    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('30');
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();
  });

  test('it enables/disables button based on input', () => {
    const { rerender } = render(<CalculatorForm firstNo="" secondNo="20" ans="30" handleChange={handleChange}/>);
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    rerender(<CalculatorForm firstNo="10" secondNo="" ans="30" handleChange={handleChange}/>);
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    rerender(<CalculatorForm firstNo="10" secondNo="20" ans="30" handleChange={handleChange}/>);
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

    rerender(<CalculatorForm firstNo="mehul" secondNo="20" ans="30" handleChange={handleChange}/>);
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();
  });

  test('it calculates based on passed in props and returns the ans in the callback function', () => {
    let actualAns;
    const handleAns = ans => {
      actualAns = ans;
    }

    render(<CalculatorForm firstNo="20" secondNo="30" operation="*" handleChange={handleChange} handleAns={handleAns}/>);
    fireEvent.click(screen.getByTestId(selectors.button.calculate));
    expect(actualAns).toBe(600);
  });
});