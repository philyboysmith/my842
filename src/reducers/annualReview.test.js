import annualReview from './annualReview';

describe('annualReview reducer', () => {
  it('should return a default state', () => {
    const expected = {};
    const actual = annualReview();
    expect(actual).toEqual(expected);
  });
  it('should populate on a fetch success', () => {
    const expected = {
      test: 'test',
    };
    const actual = annualReview({}, {
      type: 'ANNUAL_REVIEW_SUCCESS',
      response: { test: 'test' },
    });
    expect(actual).toEqual(expected);
  });
});
