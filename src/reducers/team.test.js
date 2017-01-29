/* eslint-disable */
import team from './team';

describe('Team reducer', () => {
  const defaultState = {
    isFetching: false,
    isLoaded: false,
    data: {},
  };

  it('should return a default state', () => {
    const actual = team();
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  it('should return default state on RESET_STATE', () => {
    const actual = team({}, { type: 'RESET_STATE' });
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });
});
