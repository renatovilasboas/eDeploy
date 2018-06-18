import { REQUEST_POST_SUCCESS } from './constants';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_SUCCESS:
      return { posts: action.posts };

    default:
      return state;
  }
};

export default reducer;
