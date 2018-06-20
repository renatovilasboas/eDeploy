import reducer from '../screens/Posts/reducer';
import { expect } from 'chai';
import { requestUsersSuccess } from '../screens/Posts/actions';

describe('Users tests', () => {
  it(`GIVEN a action of type REQUEST_USERS_SUCCESS with a list of users and 
        the initial state of store
      WHEN i request the new state
      THEN the system correctly returns the new state`, () => {
    // Arrange
    const initialState = {
      posts: [],
      users: [],
    };

    const users = [
      {
        id: 1,
        name: 'userTeste',
      },
      {
        id: 2,
        name: 'userTeste 2',
      },
    ];
    const action = requestUsersSuccess(users);

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState.posts.length).to.be.equal(0);
    expect(newState.users.length).to.be.equal(2);
    users.forEach((user, index) => {
      const userOfState = newState.users[index];
      expect(userOfState.name).to.be.equal(user.name);
      expect(userOfState.id).to.be.equal(user.id);
    });
  });
});
