import { combineReducers } from 'redux';
import postsContainer from '../screens/Posts/reducer';

const rootReducer = combineReducers({
  postsContainer,
});

export default rootReducer;
