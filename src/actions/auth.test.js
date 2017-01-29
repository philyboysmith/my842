/* eslint-disable */
import { resetState, resetError } from './auth';

describe('resetState', () => {
  it('should dispatch the right action', () => {
    const expected = { type: 'RESET_STATE' };
    const actual = resetState();
    expect(actual).toEqual(expected);
  });
});

describe('resetError', () => {
  it('should dispatch the right action', () => {
    const expected = { type: 'RESET_ERROR' };
    const actual = resetError();
    expect(actual).toEqual(expected);
  });
});