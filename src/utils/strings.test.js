import { capitalize } from './strings';

describe('strings utils test suite', () => {
  test('it tests the capitalize()', () => {
    expect(capitalize('toDO 1')).toBe('Todo 1');
    expect(capitalize('TODO 1')).toBe('Todo 1');

    expect(capitalize('go TO school')).toBe('Go to school');
  });

  test('it tests the capitalize() for special scenarios', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('m')).toBe('M');
  });
});