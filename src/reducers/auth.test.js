import auth from './auth';

describe('Auth reducer', () => {
  const defaultState = {
    isFetching: false,
    isAuthenticated: false,
  };

  it('should return a default state', () => {
    const actual = auth();
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  it('should return default state on RESET_STATE', () => {
    const actual = auth({}, { type: 'RESET_STATE' });
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  it('should reset error message on RESET_ERROR', () => {
    const originalState = {
      isFetching: false,
      isAuthenticated: false,
      errorMessage: 'This is an error',
    };
    const actual = auth(originalState, { type: 'RESET_ERROR' });
    const expected = {
      isFetching: false,
      isAuthenticated: false,
      errorMessage: '',
    };
    expect(actual).toEqual(expected);
  });
});
