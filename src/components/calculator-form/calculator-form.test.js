import { render, screen, fireEvent } from '@testing-library/react';

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

describe('calculator-form test suite', () => {
  test('it renders the component in the right initial state', () => {
    render(<CalculatorForm egFirstNo="10" egSecondNo="20" egAns="30"/>);

    expect(screen.getByTestId(selectors.input.first)).toHaveValue('10');
    expect(screen.getByTestId(selectors.input.second)).toHaveValue('20');
    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('30');
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();
  });

  test('it enables/disables button based on input', () => {
    render(<CalculatorForm egFirstNo="10" egSecondNo="20" egAns="30"/>);

    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: '' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: 'mehul' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: '74' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();


    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: '' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: 'mehul' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: '74' }
    });
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();
  });
});