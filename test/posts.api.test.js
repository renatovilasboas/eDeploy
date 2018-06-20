import { expect } from 'chai';
import { requestPosts, requestUsers } from '../screens/Posts/api';

describe('API tests', () => {
  it(`GIVEN a api of posts 
        WHEN i request the posts
        THEN the system correctly returns the new state`, async () => {
    // Arrange
    // Act
    const posts = await requestPosts();
    // Assert
    expect(posts.length).to.be.greaterThan(0);
    expect(posts[0].userId).to.be.greaterThan(0);
    expect(posts[0].title.length).to.be.greaterThan(0);
    expect(posts[0].body.length).to.be.greaterThan(0);
  });

  it(`GIVEN a api of users 
        WHEN i request the users
        THEN the system correctly returns the new state`, async () => {
    // Arrange
    // Act
    const users = await requestUsers();
    // Assert
    expect(users.length).to.be.greaterThan(0);
    expect(users[0].id).to.be.greaterThan(0);
    expect(users[0].name.length).to.be.greaterThan(0);
  });
});
