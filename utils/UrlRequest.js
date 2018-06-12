const urlRequest = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new `request ${error}`();
  }
};

export default urlRequest;
