import urlRequest from '../../utils/UrlRequest';

export const requestPosts = async () => {
  try {
    const posts = await urlRequest('https://jsonplaceholder.typicode.com/posts');
    return posts;
  } catch (error) {
    throw new `Call api Error ${error}`();
  }
};

export const requestUsers = async () => {
  try {
    const users = await urlRequest('https://jsonplaceholder.typicode.com/users');
    return users;
  } catch (error) {
    throw new `Call api Error ${error}`();
  }
};
