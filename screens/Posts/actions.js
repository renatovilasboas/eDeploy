import { REQUEST_POST_SUCCESS } from './constants';

export const requestPostSuccess = (posts) => ({
  type: REQUEST_POST_SUCCESS,
  posts,
});
