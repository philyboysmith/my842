import annualReview from './annualReview';

describe('annualReview reducer', () => {
  it('should return a default state', () => {
    const expected = {};
    const actual = annualReview();
    expect(actual).toEqual(expected);
  });
  it('should populate on a fetch success', () => {
    const expected = {
      data: { test: 'test' },
    };
    const actual = annualReview({}, {
      type: 'ANNUAL_REVIEW_SUCCESS',
      response: { test: 'test' },
    });
    expect(actual).toEqual(expected);
  });
  it('should reset on RESET_STATE', () => {
    const expected = {};
    const actual = annualReview({ asdf: 'asdf' }, {
      type: 'RESET_STATE',
    });
    expect(actual).toEqual(expected);
  });
});
