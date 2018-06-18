import axios from 'axios';

const urlRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new `request ${error}`();
  }
};

export default urlRequest;
