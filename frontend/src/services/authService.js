import api from './api';

export const registerUser = async (userCredentials) => {
  try {
    const response = await api.post('/users/register', userCredentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const loginUser = async (userCredentials) => {
  try {
    let response;

    if (isEmail(userCredentials.username)) {
      response = await api.post('/users/login', {
        email: userCredentials.username,
        password: userCredentials.password,
      });
    } else {
      response = await api.post('/users/login', {
        username: userCredentials.username,
        password: userCredentials.password,
      });
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
