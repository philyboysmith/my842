import clients from './clients';

describe('Clients reducer', () => {
  const defaultState = {
    isFetching: false,
    isLoaded: false,
    data: {},
    activeClient: {},
  };

  it('should return a default state', () => {
    const actual = clients();
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });

  it('should return default state on RESET_STATE', () => {
    const actual = clients({}, { type: 'RESET_STATE' });
    const expected = defaultState;
    expect(actual).toEqual(expected);
  });
});
