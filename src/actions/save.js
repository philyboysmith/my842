import { CALL_API } from '../middleware/api';

export default function post(clientId, postData) {
  return {
    [CALL_API]: {
      endpoint: `clients/${clientId}/annual_review`,
      authenticated: true,
      types: ['POST_REVISION_SUCCESS', 'POST_REVISION_FAILURE'],
    },
  };
}
