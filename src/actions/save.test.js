import {
  requestPostAnnualReview,
  receivePostAnnualReview,
  errorPostAnnualReview,
} from './save';

describe('(action creator) requestPostAnnualReview', () => {
  it('should return the right type and payload', () => {
    const data = 'data';
    const clientId = 'clientId';
    const expected = {
      type: 'POST_ANNUAL_REVIEW',
      payload: { clientId, data },
    };
    const actual = requestPostAnnualReview(clientId, data);
    expect(actual).toEqual(expected);
  });
});

describe('(action creator) receivePostAnnualReview', () => {
  it('should return the right type and payload', () => {
    const data = 'data';
    const expected = {
      type: 'POST_ANNUAL_REVIEW_SUCCESS',
      payload: { data },
    };
    const actual = receivePostAnnualReview(data);
    expect(actual).toEqual(expected);
  });
});

describe('(action creator) errorPostAnnualReview', () => {
  it('should return the right type and payload', () => {
    const error = 'error';
    const expected = {
      type: 'POST_ANNUAL_REVIEW_FAILURE',
      payload: { error },
    };
    const actual = errorPostAnnualReview(error);
    expect(actual).toEqual(expected);
  });
});

