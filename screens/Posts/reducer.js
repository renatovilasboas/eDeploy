import { REQUEST_POST_SUCCESS, REQUEST_USERS_SUCCESS } from './constants';

const initialState = {
  posts: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_SUCCESS:
      return { posts: action.posts, users: [...state.users] };

    case REQUEST_USERS_SUCCESS:
      return { users: action.users, posts: [...state.posts] };

    default:
      return state;
  }
};

export default reducer;
