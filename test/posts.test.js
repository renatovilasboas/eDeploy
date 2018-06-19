import reducer from '../screens/Posts/reducer';
import { requestPostSuccess } from '../screens/Posts/actions';
import { expect } from 'chai';

describe('Posts tests', () => {
  it(`GIVEN a action of type REQUEST_POST_SUCCESS with a list of posts and 
        the initial state of store
      WHEN i request the new state
      THEN the system correctly returns the new state`, () => {
    // Arrange
    const initialState = {
      posts: [],
      users: [],
    };

    const posts = [
      {
        id: 1,
        userId: 1,
        name: 'userTeste',
        photo: 'http://',
        title: 'title 1',
        body: 'non non nono ',
      },
      {
        id: 2,
        userId: 2,
        name: 'userTeste',
        photo: 'http://',
        title: 'title 2',
        body: 'non non nono ',
      },
      {
        id: 3,
        userId: 3,
        name: 'userTeste',
        photo: 'http://',
        title: 'title 2',
        body: 'non non nono ',
      },
    ];
    const action = requestPostSuccess(posts);

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState.users.length).to.be.equal(0);
    expect(newState.posts.length).to.be.equal(3);
    posts.forEach((post, index) => {
      const postOfState = newState.posts[index];
      expect(postOfState.title).to.be.equal(post.title);
      expect(postOfState.id).to.be.equal(post.id);
      expect(postOfState.userId).to.be.equal(post.userId);
      expect(postOfState.photo).to.be.equal(post.photo);
      expect(postOfState.body).to.be.equal(post.body);
    });
  });
});
