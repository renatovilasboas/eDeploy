import { expect } from 'chai';
import { requestPosts } from '../screens/Posts/api';

describe('API tests', () => {
  it(`GIVEN a api of users 
        WHEN i request the users
        THEN the system correctly returns the new state`, async () => {
    // Arrange
    // Act
    const posts = await requestPosts();
    // Assert
    expect(posts.length).to.be.greaterThan(0);
  });
});
