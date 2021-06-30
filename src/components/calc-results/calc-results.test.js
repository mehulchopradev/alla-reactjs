import { render, screen } from '@testing-library/react';

import CalcResults from './calc-results.component';

const selectors = {
  first: 'first',
  second: 'second',
  ans: 'ans',
  operation: 'operation'
}

describe('calc-results test suite', () => {
  test('it renders the component in the right initial state', () => {
    render(<CalcResults firstNo="10" secondNo="20" operation="*" ans="200" />);

    expect(screen.getByTestId(selectors.first)).toHaveTextContent('10')
    expect(screen.getByTestId(selectors.second)).toHaveTextContent('20');
    expect(screen.getByTestId(selectors.operation)).toHaveTextContent('*');
    expect(screen.getByTestId(selectors.ans)).toHaveTextContent('200');
  });
});