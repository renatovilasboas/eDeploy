import { REQUEST_POST_SUCCESS, REQUEST_USERS_SUCCESS } from './constants';

export const requestPostSuccess = (posts) => ({
  type: REQUEST_POST_SUCCESS,
  posts,
});

export const requestUsersSuccess = (users) => ({
  type: REQUEST_USERS_SUCCESS,
  users,
});
